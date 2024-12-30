import { Request, Response } from "express";
import prisma from "../prisma";
import { requestBody } from "src/types/reqOrder";
import { StatusOrder } from "../../prisma/generated/client";

const midtransClient = require("midtrans-client");

export class OrderController {
  async applyCoupon(total_price: number, coupon_id: string | null) {
    if (!coupon_id) return { total_price, discount: 0 };

    const discount = coupon_id ? 0.1 * total_price : 0;
    return { total_price: total_price - discount, discount };
  }

  async applyPoints(userId: number, total_price: number, points_used: number) {
    const userPoints = await prisma.userPoint.findMany({
      where: { customer_id: userId, is_transaction: false },
    });
    const totalPoints = userPoints.reduce((sum, point) => sum + point.point, 0);

    if (points_used > totalPoints) {
      throw new Error("Not enough points available");
    }

    const final_price = total_price - totalPoints;
    return { final_price: Math.max(0, final_price), points_used: totalPoints };
  }

  async createOrder(req: Request<{}, {}, requestBody>, res: Response) {
    try {
      const { total_price, final_price, ticketCart } = req.body;
      const expires_at = new Date(new Date().getTime() + 10 * 60000);

      const transactionId = await prisma.$transaction(async (prisma) => {
        const { id } = await prisma.order.create({
          data: {
            user_id: +req.user?.id!,
            total_price,
            final_price,
            expires_at,
          },
        });

        await Promise.all(
          ticketCart.map(async (item) => {
            if (item.quantity > item.ticket.seats) {
              throw new Error(
                `Seats for ticket ID: ${item.ticket.id} not available! `
              );
            }
            await prisma.orderDetails.create({
              data: {
                order_id: id,
                user_id: req.user?.id,
                ticket_id: item.ticket.id,
                quantity: item.quantity,
                subPrice: item.quantity * item.ticket.price,
              },
            });
            await prisma.ticket.update({
              where: { id: item.ticket.id },
              data: { seats: { decrement: item.quantity } },
            });
          })
        );
        return id;
      });

      res
        .status(200)
        .send({ message: "Transaction created", order_id: transactionId });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getOrderCustomerId(req: Request, res: Response) {
    try {
      const order = await prisma.order.findMany({
        where: { user_id: req.user?.id },
        select: {
          user_id: true,
          status_order: true,
          expires_at: true,
          total_price: true,
          final_price: true,
          OrderDetails: {
            select: {
              quantity: true,
              subPrice: true,
              ticket: {
                select: {
                  description: true,
                  price: true,
                  event: {
                    select: {
                      title: true,
                      thumbnail: true,
                      datetime: true,
                      location: true,
                      venue: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      res.status(200).send({ result: order });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getOrderId(req: Request, res: Response) {
    try {
      const transaction = await prisma.order.findUnique({
        where: { id: +req.params.id },
        select: {
          id: true,
          status_order: true,
          expires_at: true,
          total_price: true,
          final_price: true,
          OrderDetails: {
            select: {
              quantity: true,
              subPrice: true,
              ticket: {
                select: {
                  description: true,
                  price: true,
                  event: {
                    select: {
                      title: true,
                      thumbnail: true,
                      datetime: true,
                      location: true,
                      venue: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      res.status(200).send({ result: transaction });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getSnapToken(req: Request, res: Response) {
    try {
      const { order_id } = req.body;
      const item_details = [];

      const checkTransaction = await prisma.order.findUnique({
        where: { id: order_id },
        select: { status_order: true, expires_at: true },
      });
      if (checkTransaction?.status_order === StatusOrder.CANCELLED)
        throw "You cannot continue the transaction, book another ticket now.";

      const resMinutes =
        new Date(`${checkTransaction?.expires_at}`).getTime() -
        new Date().getTime();

      const ticketOrder = await prisma.orderDetails.findMany({
        where: { order_id: order_id },
        include: {
          ticket: {
            select: {
              category: true,
            },
          },
        },
      });

      const user = await prisma.customer.findUnique({
        where: { id: req.user?.id },
      });

      for (const item of ticketOrder) {
        item_details.push({
          id: item.ticket_id,
          price: item.subPrice / item.quantity,
          quantity: item.quantity,
          name: item.ticket.category,
        });
      }

      const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: `${process.env.MID_SERVER_KEY}`,
      });

      const parameters = {
        transaction_details: req.body,
        customer_details: {
          first_name: user?.name,
          email: user?.email,
        },
        item_details,
        page_expiry: {
          duration: new Date(resMinutes).getMinutes(),
          unit: "minutes",
        },
        expiry: {
          unit: "minutes",
          duration: new Date(resMinutes).getMinutes(),
        },
      };
      const transaction = await snap.createOrder(parameters);

      res.status(200).send({ result: transaction.token });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async midtransWebHook(req: Request, res: Response) {
    try {
      const { transaction_status, order_id } = req.body;
      const statusTransaction =
        transaction_status === "settlement"
          ? "SUCCESS"
          : transaction_status === "pending"
          ? "PENDING"
          : "canceled";

      if (statusTransaction === "canceled") {
        const tickets = await prisma.orderDetails.findMany({
          where: { order_id: +order_id },
          select: {
            quantity: true,
            ticket_id: true,
          },
        });

        for (const item of tickets) {
          await prisma.ticket.update({
            where: { id: item.ticket_id },
            data: { seats: { increment: item.quantity } },
          });
        }
      }

      const statusMapping: { [key: string]: StatusOrder } = {
        success: StatusOrder.SUCCESS,
        pending: StatusOrder.PENDING,
        failed: StatusOrder.FAILED,
        cancelled: StatusOrder.CANCELLED,
      };

      const mappedStatus = statusMapping[statusTransaction.toLowerCase()];
      if (!mappedStatus) {
        throw new Error("Invalid statusTransaction received from Midtrans");
      }

      await prisma.order.update({
        where: { id: +order_id },
        data: {
          status_order: mappedStatus,
        },
      });
      res.status(200).send({ message: "Success" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getTicketOrder(req: Request, res: Response) {
    try {
      const tickets = await prisma.orderDetails.findMany({
        where: {
          order_id: req.order?.id,
        },
        select: {
          quantity: true,
          ticket_id: true,
        },
      });
      res.status(200).send({ tickets });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
