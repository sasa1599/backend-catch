import { Request, Response } from "express";
import prisma from "../prisma";

export class TicketController {
  async createTicket(req: Request, res: Response): Promise<void> {
    try {
      const { category, description, seats, maxSeats, price } = req.body;
      
      const event_id = req.params.id

      if (!event_id) {
        res.status(400).send({ message: "Event ID is required" });
        return; 
      }

      await prisma.ticket.create({
        data: {
          category,
          description,
          seats,
          maxSeats,
          price,
          event_id:+event_id,
        },
      });

      res.status(201).send({ message: "Ticket created" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: "An error occurred", error: err });
    }
  }
  async getTickets(req: Request, res: Response) {
    try {
      const tickets = await prisma.ticket.findMany({
        where: { event_id: +req.params.event_id },
      });
      res.status(200).send({ result: tickets });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}

