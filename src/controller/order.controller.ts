import { Request, Response } from "express";
import prisma from "../prisma";
import { requestBody } from "src/types/reqOrder";
import { StatusOrder } from "../../prisma/generated/client";

const midtransClient = require("midtrans-client");

export class OrderController {
  async createOrder(req: Request<{}, {}, requestBody>, res: Response) {
    try {
      const userId = req.user?.id;
      const { total_price, coupon, point, final_price, ticketCart } = req.body;
      console.log(req.body);

      const transactionId = await prisma.$transaction(async (prisma) => {
        if (coupon) {
          const coupon = await prisma.userCoupon.findFirst({
            where: { customer_id: userId },
          });
          await prisma.userCoupon.update({
            where: { id: coupon?.id },
            data: { is_redeem: true },
          });
        }
        if (point) {
          await prisma.userPoint.updateMany({
            where: { customer_id: userId },
            data: { is_transaction: true },
          });
        }
        const { id } = await prisma.order.create({
          data: {
            user_id: userId!,
            total_price,
            coupon,
            point,
            final_price,
            expires_at: new Date(new Date().getTime() + 30 * 60000),
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
                // user_id: req.user?.id,
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

  // async createOrder(req: Request<{}, {}, requestBody>, res: Response) {
  //   try {
  //     const user_id = req.user?.id
  //     const { total_price, coupon ,final_price, ticketCart } = req.body;
  //     console.log(req.body);

  //     const expires_at = new Date(new Date().getTime() + 10 * 60000);
  //     const transactionId = await prisma.$transaction(async (prisma) => {
  //       if (coupon) {
  //         const coupon = await prisma.userCoupon.findFirst({
  //           where: { customer_id: user_id },
  //         });
  //         await prisma.userCoupon.update({
  //           where: { id: coupon?.id },
  //           data: { is_redeem: true },
  //         });
  //       }
  //       const { id } = await prisma.order.create({
  //         data: {
  //           user_id: +req.user?.id!,
  //           total_price,
  //           coupon,
  //           final_price,
  //           expires_at,
  //         },
  //       });

  //       await Promise.all(
  //         ticketCart.map(async (item) => {
  //           if (item.quantity > item.ticket.seats) {
  //             throw new Error(
  //               `Seats for ticket ID: ${item.ticket.id} not available! `
  //             );
  //           }
  //           await prisma.orderDetails.create({
  //             data: {
  //               order_id: id,
  //               // user_id: req.user?.id,
  //               ticket_id: item.ticket.id,
  //               quantity: item.quantity,
  //               subPrice: item.quantity * item.ticket.price,
  //             },
  //           });
  //           await prisma.ticket.update({
  //             where: { id: item.ticket.id },
  //             data: { seats: { decrement: item.quantity } },
  //           });
  //         })
  //       );
  //       return id;
  //     });

  //     res
  //       .status(200)
  //       .send({ message: "Transaction created", order_id: transactionId });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).send(err);
  //   }
  // }

  async getOrderCustomerId(req: Request, res: Response) {
    try {
      const order = await prisma.order.findMany({
        where: { user_id: req.user?.id },
        select: {
          id: true,
          user_id: true,
          status_order: true,
          expires_at: true,
          total_price: true,
          final_price: true,
          point: true,
          coupon: true,
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
                      id: true,
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

  // Midtrans payment
  async getSnapToken(req: Request, res: Response) {
    try {
      const { order_id } = req.body;
      const item_details = [];

      const checkTransaction = await prisma.order.findUnique({
        where: { id: order_id },
        select: {
          status_order: true,
          expires_at: true,
          coupon: true,
          point: true,
        },
      });
      if (checkTransaction?.status_order === StatusOrder.CANCELLED)
        throw "You cannot continue transaction, as your delaying transaction";

      const ticketTransaction = await prisma.orderDetails.findMany({
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

      for (const item of ticketTransaction) {
        item_details.push({
          id: item.ticket_id,
          price: item.subPrice / item.quantity,
          quantity: item.quantity,
          name: item.ticket.category,
        });
      }

      if (checkTransaction?.coupon) {
        const coupon = await prisma.userCoupon.findFirst({
          where: { customer_id: user?.id },
        });
        item_details.push({
          id: coupon?.id,
          price: -(req.body.base_price - checkTransaction.point!) / 10,
          quantity: 1,
          name: "Coupon",
        });
      }

      if (checkTransaction && checkTransaction?.point! > 0) {
        const points = await prisma.userPoint.findMany({
          where: { customer_id: req.user?.id },
          select: { point: true },
          orderBy: { created_at: "asc" },
        });

        item_details.push({
          id: points[0].point,
          price: -checkTransaction.point!,
          quantity: 1,
          name: "Points",
        });
      }

      const resMinutes =
        new Date(`${checkTransaction?.expires_at}`).getTime() -
        new Date().getTime();

      const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: `${process.env.MID_SERVER_KEY}`,
      });

      const parameters = {
        transaction_details: req.body,
        customer_details: {
          name: user?.name,
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

      const transaction = await snap.createTransaction(parameters);
      res.status(200).send({ result: transaction.token });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  // async getSnapToken(req: Request, res: Response) {
  //   try {
  //     const { order_id } = req.body;
  //     console.log("order", order_id);

  //     const item_details = [];

  //     const checkTransaction = await prisma.order.findUnique({
  //       where: { id: order_id },
  //       select: { status_order: true, expires_at: true },
  //     });
  //     if (checkTransaction?.status_order === StatusOrder.CANCELLED)
  //       throw "You cannot continue the transaction, book another ticket now.";

  //     const resMinutes =
  //       new Date(`${checkTransaction?.expires_at}`).getTime() -
  //       new Date().getTime();

  //     const ticketOrder = await prisma.orderDetails.findMany({
  //       where: { order_id: order_id },
  //       include: {
  //         ticket: {
  //           select: {
  //             category: true,
  //           },
  //         },
  //       },
  //     });

  //     const user = await prisma.customer.findUnique({
  //       where: { id: req.user?.id },
  //     });

  //     for (const item of ticketOrder) {
  //       item_details.push({
  //         id: item.ticket_id,
  //         price: item.subPrice / item.quantity,
  //         quantity: item.quantity,
  //         name: item.ticket.category,
  //       });
  //     }

  //     const snap = new midtransClient.Snap({
  //       isProduction: false,
  //       serverKey: `${process.env.MID_SERVER_KEY}`,
  //     });

  //     const parameters = {
  //       transaction_details: req.body,
  //       customer_details: {
  //         name: user?.name,
  //         email: user?.email,
  //       },
  //       item_details,
  //       page_expiry: {
  //         duration: new Date(resMinutes).getMinutes(),
  //         unit: "minutes",
  //       },
  //       expiry: {
  //         unit: "minutes",
  //         duration: new Date(resMinutes).getMinutes(),
  //       },
  //     };
  //     console.log("parameters", parameters);
  //     const transaction = await snap.createTransaction(parameters);

  //     res.status(200).send({ result: transaction.token });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).send(err);
  //   }
  // }

  async updateOrderHook(req: Request, res: Response) {
    try {
      const { transaction_status, order_id } = req.body;
      const statusTransaction =
        transaction_status === "settlement"
          ? "SUCCESS"
          : transaction_status === "pending"
          ? "PENDING"
          : "CANCELLED";

      if (statusTransaction === "CANCELLED") {
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
