import { Request, Response } from "express";
import prisma from "../prisma";

export class UserCouponController {
  async list(req: Request, res: Response) {
    try {
      const { user_id, id, limit, page, is_redeem }: any = req.query;
      const filters: any = {};
      const take = limit ? Math.max(1, +limit) : 10;
      const skip = page ? Math.max(0, (+page - 1) * take) : 0;
      if (user_id) filters.user_id = user_id;
      if (id) filters.id = +id;
      if (is_redeem) filters.is_redeem = is_redeem === "true";

      const data = await prisma.userCoupon.findMany({
        take,
        skip,
        where: { ...filters, expired_at: { gt: new Date() } },
      });
      const total = await prisma.userCoupon.count({
        where: { ...filters, expired_at: { gt: new Date() } },
      });
      const totalPage = Math.ceil(total / take);
      res.status(200).send({
        items: data,
        meta: {
          total,
          totalPage,
          currentPage: page ? +page : 1,
          perPage: take,
        },
      });
    } catch (err) {
      console.log("Error during userCoupon list retrieval:", err);
      res.status(500).send({
        message: "An error occurred while listing userCoupons",
        error: err,
      });
    }
  }
  async redeemCoupon(req: Request, res: Response): Promise<void> {
    try {
      const { user_id } = req.body;
  
      const userCoupon = await prisma.userCoupon.findFirst({
        where: {
          customer_id: user_id,
          is_redeem: false,
          expired_at: { gt: new Date() },
        },
      });
  
      if (!userCoupon) {
        res.status(400).send({ message: "Coupon not found or expired!" });
        return 
      }
  
      const discount = userCoupon.discount || 0;
  
      const redeemedCoupon = await prisma.userCoupon.update({
        where: { id: userCoupon.id },
        data: { is_redeem: true, updated_at: new Date() },
      });
  
      res.status(200).send({
        message: "Coupon redeemed successfully",
        redeemedCoupon,
        discount,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: "An error occurred", error: err });
    }
  }
  
}
