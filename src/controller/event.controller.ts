import { Request, Response } from "express";
import prisma from "../prisma";
import { Category, Prisma } from "../../prisma/generated/client";

export class EventController {
  async getEvent(req: Request, res: Response) {
    try {
      const { search } = req.query;
      const filter: Prisma.EventWhereInput = {};
      if (search) {
        filter.title = { contains: search as string, mode: "insensitive" };
      }
      const event = await prisma.event.findMany({
        where: filter,
        select: {
          id: true,
          title: true,
          description: true,
          category: true,
          location: true,
          thumbnail: true,
          datetime: true,
          venue: true,
          slug: true,
          tickets: {
            select: {
              price: true,
            },
          },
          promotor: {
            select: {
              name: true,
            },
          },
        },
      });

      res.status(200).send({ event });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getEventSlug(req: Request, res: Response): Promise<void> {
    try {
      const { slug } = req.params;
      const { couponId, pointsUsed } = req.body;
  
      // Use the id from the verified token (req.user)
      const userId = req.user?.id;
  
      if (!userId) {
        res.status(400).send({ message: "User not authenticated" });
        return;
      }
  
      // Fetch event details from database
      const event = await prisma.event.findFirst({
        where: { slug },
        select: {
          id: true,
          title: true,
          description: true,
          category: true,
          location: true,
          thumbnail: true,
          venue: true,
          slug: true,
          datetime: true,
          promotor: {
            select: {
              id: true,
              name: true,
              username: true,
              avatar: true,
            },
          },
          tickets: {
            select: {
              category: true,
              description: true,
              seats: true,
              price: true,
            },
          },
        },
      });
  
      if (!event) {
        res.status(404).send({ message: "Event not found" });
        return;
      }
  
      // Get user points
      const userPoints = await prisma.userPoint.aggregate({
        where: { customer_id: userId },
        _sum: { point: true },
      });
      const totalPoints = userPoints._sum.point || 0;
  
      // Fetch available coupons
      const availableCoupons = await prisma.userCoupon.findMany({
        where: { customer_id: userId, is_redeem: false },
        select: {
          id: true,
          ref_code: true,
          discount: true,
          is_redeem: true,
        },
      });
  
      // Type explicitly for coupons
      const validCoupons = availableCoupons.map((coupon) => {
        return {
          ref_code: coupon.ref_code ?? "",
          discount: coupon.discount ?? 0,
          is_redeem: coupon.is_redeem ?? false,
        };
      });
  
      let finalPrice = event.tickets[0].price; // Assuming single ticket category for simplicity
  
      if (couponId) {
        const coupon = await prisma.userCoupon.findUnique({
          where: { id: couponId },
          select: { discount: true, ref_code: true, is_redeem: true },
        });
  
        if (!coupon || coupon.is_redeem) {
          res.status(400).send({ message: "Invalid or redeemed coupon" });
          return;
        }
  
        // Apply discount to final price
        const discountAmount = coupon.discount || 0;
        finalPrice -= discountAmount;
  
        // Ensure final price doesn't go below 0
        finalPrice = finalPrice < 0 ? 0 : finalPrice;
      }
  
      // Handle points usage (if pointsUsed is provided)
      if (pointsUsed) {
        // Check if points used are valid (i.e., must be in multiples of Rp 10,000)
        if (pointsUsed % 10000 !== 0 || pointsUsed > totalPoints) {
          res.status(400).send({
            message:
              "Invalid points usage: Points must be in multiples of Rp 10,000 and cannot exceed the ticket price",
          });
          return;
        }
  
        // Deduct points from final price
        finalPrice -= pointsUsed;
  
        // Ensure final price doesn't go below 0
        finalPrice = finalPrice < 0 ? 0 : finalPrice;
      }
  
      // Return event details along with final price, user points, and valid coupons
      res.status(200).send({
        event,
        userPoints: totalPoints,
        validCoupons,
        finalPrice,
      });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send({ error: "An error occurred while fetching the event" });
    }
  }
  

  async getEventCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;
      const event = await prisma.event.findMany({
        where: { category: category as Category },
        select: {
          id: true,
          title: true,
          description: true,
          category: true,
          location: true,
          thumbnail: true,
          datetime: true,
          venue: true,
          slug: true,
          tickets: {
            select: {
              price: true,
            },
          },
          promotor: {
            select: {
              name: true,
            },
          },
        },
      });
      res.status(200).send({ event });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
