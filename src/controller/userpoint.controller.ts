import { Request, Response } from "express";
import prisma from "../prisma";

export class UserPointController {
  // list point customer
  async list(req: Request, res: Response) {
    try {
      const { customer_id, id, limit, page, is_transaction }: any = req.query;
      const filters: any = {};
      const take = limit ? Math.max(1, +limit) : 10;
      const skip = page ? Math.max(0, (+page - 1) * take) : 0;
      if (customer_id) filters.customer_id = customer_id;
      if (id) filters.id = +id;
      if (is_transaction) filters.is_transaction = is_transaction === "true";

      const data = await prisma.userPoint.findMany({
        take,
        skip,
        where: { ...filters, expired_at: { gt: new Date() } },
      });
      const total = await prisma.userPoint.count({
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
      console.log("Error during userPoint list retrieval:", err);
      res.status(500).send({
        message: "An error occurred while listing userPoints",
        error: err,
      });
    }
  }
  async redeemPoint(req: Request, res: Response): Promise<void> {
    try {
      const existCustomerPoint = await prisma.userPoint.findMany({
        where: {
          customer_id: req.body.customer_id,
          expired_at: { gt: new Date() },
          is_transaction: false,
        },
      });

      if (existCustomerPoint.length < 1) {
        res.status(400).send({ message: "UserPoint is null!" });
        return;
      }
      const userPoint = await prisma.userPoint.create({
        data: { ...req.body, expired_at: null, is_transaction: true },
      });
      res.status(200).send({ message: "UserPoint is redeemed", userPoint });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
  async getPointsUser(req: Request, res: Response) {
    try {
      const points = await prisma.userPoint.aggregate({
        where: {
          AND: [
            { customer_id: req.user?.id },
            { is_transaction: false },
            { expired_at: { gt: new Date() } },
          ],
        },
        _sum: { point: true },
      });
      res.status(200).send({ result: points._sum.point });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
