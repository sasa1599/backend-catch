import { Request, Response } from "express";
import prisma from "../prisma";

export class ReviewController {
  async createReview(req: Request, res: Response) {
    try {
      await prisma.review.create({
        data: { ...req.body, user_id: req.user?.id, event_id: req.params.id },
      });
      res.status(200).send({ message: "Review Created" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getReviews(req: Request, res: Response) {
    try {
      const reviews = prisma.review.findMany({
        where: { event_id: +req.params.id },
      });
      res.status(200).send({ result: reviews });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}