import { Request, Response } from "express";
import prisma from "../prisma";
import { Prisma, Category } from "@prisma/client";

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
              id: true,
              category: true,
              description: true,
              seats: true,
              maxSeats: true,
              price: true,
            },
          },
          promotor: {
            select: {
              id: true,
              name: true,
              username: true,
              avatar: true,
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

  async getEventSlug(req: Request, res: Response) {
    try {
      const { slug } = req.params;
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
              id: true,
              category: true,
              description: true,
              seats: true,
              maxSeats: true,
              price: true,
            },
          },
        },
      });

      if (!event) {
        res.status(404).send({ message: "Event not found" });
      }

      res.status(200).send({ event });
    } catch (err) {
      console.log(err);
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
              id: true,
              category: true,
              description: true,
              seats: true,
              maxSeats: true,
              price: true,
            },
          },
          promotor: {
            select: {
              id: true,
              name: true,
              username: true,
              avatar: true,
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
