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
        },
      });

      if (!event) {
        res.status(404).send({ message: "Event not found" });
        return;
      }

      res.status(200).send(event);
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
  async getEventsByPromotor(req: Request, res: Response): Promise<void> {
    try {
      if (!req.user?.id) {
        res.status(400).send({ error: "User ID is missing. Please log in." });
        return;
      }

      const events = await prisma.event.findMany({
        where: {
          promotor_id: req.user?.id,
        },
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

      if (events.length === 0) {
        res.status(404).send({ error: "No events found for this promotor." });
        return; // Ensure the function exits after sending the response
      }

      // Return the fetched events
      res.status(200).send({ events });
    } catch (err) {
      // Log more details for debugging
      console.error("Error fetching events by promotor:", err);
      res
        .status(500)
        .send({ error: "Something went wrong. Please try again later." });
    }
  }
  async getEventDetail(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const event = await prisma.event.findUnique({
        where: { id: +id },
        select: {
          id: true,
          title: true,
          thumbnail: true,
          category: true,
          description: true,
          location: true,
          venue: true,
          datetime: true,
          tickets: {
            select: {
              category: true,
              price: true,
              description: true,
            },
          },
          promotor: {
            select: {
              username: true,
              avatar: true,
            },
          },
        },
      });
      res.status(200).send({ event });
    } catch (error) {
      console.log("Error get event detail:", error);
      res.status(400).send(error);
    }
  }
}
