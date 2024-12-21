import { Request, Response } from "express";
import prisma from "../prisma";
const midtransClient = require("midtrans-client");

export class OrderController {
  async applyCoupon(total_price: number, coupon_id: string | null) {
    if (!coupon_id) return { total_price, discount: 0 };

    // Hard-coded 10% discount
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

    // Deduct all available points if points_used is greater than 0
    const final_price = total_price - totalPoints;
    return { final_price: Math.max(0, final_price), points_used: totalPoints };
  }

  async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const { total_price, ticketCart, coupon_id, points_used } = req.body;
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({ error: "User not authenticated" });
        return; // Ensure no further code runs
      }

      const expires_at = new Date(new Date().getTime() + 10 * 60000);

      // Fetch the user points
      const userPoints = await prisma.userPoint.findMany({
        where: { customer_id: userId, is_transaction: false },
      });

      let { total_price: discountedPrice, discount } = {
        total_price,
        discount: 0,
      };

      // Apply coupon discount
      if (coupon_id) {
        const coupon = await prisma.userCoupon.findUnique({
          where: { id: +coupon_id },
        });

        if (coupon && !coupon.is_redeem) {
          ({ total_price: discountedPrice, discount } = await this.applyCoupon(
            total_price,
            coupon_id
          ));
        } else {
          res
            .status(400)
            .json({ error: "Coupon is already redeemed or invalid" });
          return;
        }
      }

      // Apply points used and calculate the final price if points_used is provided
      let { final_price, points_used: pointsDeducted } = {
        final_price: discountedPrice,
        points_used: 0,
      };
      if (points_used > 0) {
        ({ final_price, points_used: pointsDeducted } = await this.applyPoints(
          userId,
          discountedPrice,
          points_used
        ));
      }

      // Create order with a transaction
      const order = await prisma.$transaction(async (prisma) => {
        const createdOrder = await prisma.order.create({
          data: { user_id: userId, total_price, final_price, expires_at },
        });

        // Insert order details
        for (const item of ticketCart) {
          await prisma.orderDetails.create({
            data: {
              order_id: createdOrder.id,
              ticket_id: item.ticket.id,
              quantity: item.seats,
              subPrice: item.seats * item.ticket.price,
            },
          });
        }

        // Mark coupon as redeemed if applicable
        if (coupon_id) {
          const coupon = await prisma.userCoupon.findUnique({
            where: { id: +coupon_id },
          });
          if (coupon && !coupon.is_redeem) {
            await prisma.userCoupon.update({
              where: { id: coupon_id },
              data: { is_redeem: true },
            });
          }
        }

        // Deduct points if used
        if (points_used > 0) {
          let remainingPoints = points_used;
          for (const point of userPoints) {
            if (remainingPoints <= 0) break;

            const deduction = Math.min(point.point, remainingPoints);
            remainingPoints -= deduction;

            await prisma.userPoint.update({
              where: { id: point.id },
              data: {
                point: point.point - deduction,
                is_transaction: point.point - deduction === 0,
              },
            });
          }
        }

        return createdOrder;
      });

      res.status(201).json({
        message: "Order created successfully",
        order: {
          id: order.id,
          total_price,
          final_price,
          points_used: pointsDeducted,
          coupon_applied: discount > 0,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
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
