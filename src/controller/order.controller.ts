import { Request, Response } from "express";
import prisma from "../prisma";
import { requestBody } from "src/types/reqOrder";
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
      const userId = 1;
      const {  total_price, final_price, ticketCart } = req.body;
      const expires_at = new Date(new Date().getTime() + 10 * 60000);

      const transactionId = await prisma.$transaction(async (prisma) => {
        const { id } = await prisma.order.create({
          data: { user_id: userId, total_price,final_price, expires_at },
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

  async getOrderId(req: Request, res: Response) {
    try {
      const transaction = await prisma.order.findUnique({
        where: { id: +req.params.id },
        select: {
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
      const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: `${process.env.MID_SERVERY_KEY}`,
      });

      const parameters = {
        order_details: req.body,
      };

      const transaction = await snap.createOrder(parameters);
      res.status(200).send({ result: transaction.token });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
