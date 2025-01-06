import { Request, Response } from "express";
import prisma from "../prisma";

export class ReviewController {
  async createReview(req: Request, res: Response) {
    try {
      await prisma.review.create({
        data: { ...req.body, user_id: req.user?.id, event_id: +req.params.id },
      });
      res.status(200).send({ message: "Review Created" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getReviews(req: Request, res: Response) {
    try {
      const reviews = await prisma.review.findMany({
        where: { event_id: +req.params.id },
        select: {
          rating: true,
          comment: true,
          createdAt: true,
          user: {
            select: {
              avatar: true,
              name: true,
            },
          },
        },
      });
      if (reviews.length === 0) {
        res.status(200).send({ result: [] });
      } else {
        res.status(200).send({ result: reviews });
      }
    } catch (err) {
      console.log("Error fetching reviews:", err);
      res.status(400).send(err);
    }
  }

  async getAvg(req: Request, res: Response) {
    try {
      const avgRating = await prisma.review.aggregate({
        where: { event: { promotor_id: +req.params.id } },
        _avg: { rating: true },
      });
      res.status(200).send({ result: avgRating._avg.rating });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
