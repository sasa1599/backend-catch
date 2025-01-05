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
      console.log(req.body);
      
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

  // async processPayment(req: Request, res: Response): Promise<void> {
  // const { order_id, bank, final_price, ticketCart } = req.body;

  // // Ensure that necessary fields are provided
  // if (!order_id || !bank || !final_price || !ticketCart || ticketCart.length === 0) {
  //   res.status(400).json({ message: "Missing required fields: order_id, bank, final_price, or ticketCart." });
  //   return; // Stop execution after sending a response
  // }

  // try {
  //   // Fetch the order from the database
  //   const order = await prisma.order.findUnique({
  //     where: { id: order_id },
  //   });

  //   // Check if the order exists and if its status is "PENDING"
  //   if (!order || order.status_order !== "PENDING") {
  //     res.status(400).json({ message: "Order not found or already processed." });
  //     return; // Stop execution after sending a response
  //   }

  //   // Validate the availability of tickets in the cart
  //   for (const item of ticketCart) {
  //     const ticket = await prisma.ticket.findUnique({
  //       where: { id: item.ticket.id },
  //     });

  //     if (!ticket) {
  //       res.status(400).json({ message: `Ticket with ID ${item.ticket.id} not found.` });
  //       return; // Stop execution after sending a response
  //     }

  //     if (item.quantity > ticket.seats) {
  //       res.status(400).json({
  //         message: `Not enough seats available for ticket ID ${item.ticket.id}.`,
  //       });
  //       return; // Stop execution after sending a response
  //     }
  //   }

  //   // Ensure MIDTRANS_SERVER_KEY is set in environment variables
  //   const serverKey = process.env.MID_SERVER_KEY;
  //   if (!serverKey) {
  //     res.status(500).json({ message: "MID_SERVER_KEY is missing!" });
  //     return; // Stop execution after sending a response
  //   }

  //   // Log the server key and check if it's loaded correctly
  //   console.log("MID_SERVER_KEY: ", serverKey);

  //   // Encode the server key in base64
  //   const encodedServerKey = Buffer.from(serverKey).toString("base64");
  //   console.log("Base64 Encoded Server Key: ", encodedServerKey);  // Debugging log

  //   // Prepare the payment payload for Midtrans API
  //   const payload = {
  //     payment_type: "bank_transfer",
  //     bank_transfer: {
  //       bank: bank, // Bank code, e.g., "bca"
  //     },
  //     transaction_details: {
  //       gross_amount: final_price,
  //       order_id: order.id.toString(),
  //     },
  //   };

  //   // Make the request to Midtrans API to process the payment
  //   const result = await axios.post(
  //     process.env.MIDTRANS_API_URL + "/transactions", // Ensure MIDTRANS_API_URL is set
  //     payload,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Basic ${encodedServerKey}`, // Use the base64 encoded server key in the authorization header
  //       },
  //     }
  //   );

  //   // Log the response from Midtrans for debugging
  //   console.log("Midtrans Full Response:", result.data);

  //   // Extract token and redirect_url from the response
  //   const { token, redirect_url, transaction_time } = result.data;

  //   // Format the transaction time if available
  //   const formattedTransactionTime = transaction_time
  //     ? new Date(transaction_time).toISOString()
  //     : null;

  //   // Update the order with the payment details and change the order status
  //   await prisma.order.update({
  //     where: { id: order.id },
  //     data: {
  //       mid_transaction_id: result.data.transaction_id,
  //       mid_transaction_status: result.data.transaction_status,
  //       mid_payment_type: result.data.payment_type,
  //       mid_payment_detail: result.data.va_numbers, // Virtual account numbers (if applicable)
  //       status_order: result.data.transaction_status === "success" ? "SUCCESS" : "FAILED", // Update the order status
  //       // transaction_time: formattedTransactionTime, // Update with formatted time
  //     },
  //   });

  //   // Update the ticket seat availability based on the ticket cart
  //   for (const item of ticketCart) {
  //     await prisma.ticket.update({
  //       where: { id: item.ticket.id },
  //       data: {
  //         seats: {
  //           decrement: item.quantity, // Decrease the available seats for the booked tickets
  //         },
  //       },
  //     });
  //     res.status(200).send({ result: order });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).send(err);
  //   }

  //   // Send the successful response with the token and redirect URL from Midtrans
  //   res.status(200).json({
  //     message: "Payment processed successfully.",
  //     token: token, // Token for redirecting the user for payment
  //     redirect_url: redirect_url, // URL for the user to complete the payment
  //     transaction_time: formattedTransactionTime, // Include the formatted transaction time
  //   });
  // } catch (err) {
  //   console.error("Error processing payment:", err);
  //   res.status(400).json({ message: "Error processing payment." });
  // }
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
          final_price:true,
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

  // Midtrans payment
  async getSnapToken(req: Request, res: Response) {
    try {
      const { order_id } = req.body;
      console.log("order", order_id);

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
      console.log("parameters", parameters);
      const transaction = await snap.createTransaction(parameters);

      res.status(200).send({ result: transaction.token });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

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
