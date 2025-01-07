import { Request, Response } from "express";
import prisma from "../prisma";

export class AdminController {
  // Fungsi untuk mendapatkan jumlah order berdasarkan promotor_id
  async getOrderCountByPromotor(req: Request, res: Response) {
    try {
      const { promotor_id } = req.params;

      // Mengambil jumlah order yang berhasil (status "SUCCESS") berdasarkan promotor_id
      const orderCount = await prisma.order.count({
        // where: {
        //   promotor_id: +promotor_id, // Pastikan promotor_id sesuai dengan tipe data yang ada di database
        //   status_order: "SUCCESS", // Menghitung hanya order dengan status "SUCCESS"
        // },
      });

      res.status(200).json({
        status: "success",
        data: {
          orderCount, // Jumlah order yang berhasil untuk promotor ini
        },
      });
    } catch (error) {
      console.error("Error dalam getOrderCountByPromotor:", error);
      res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengambil jumlah order per promotor",
      });
    }
  }

  // Fungsi untuk mendapatkan total pendapatan berdasarkan promotor_id
  async getTotalRevenueByPromotor(req: Request, res: Response): Promise<void> {
    try {
      const promotorId = req.params.id;
      console.log("Promotor ID:", promotorId);

      // Ensure promotorId is valid before making the query
      if (!promotorId) {
        res.status(400).json({
          status: "error",
          message: "Promotor ID is required",
        });
        return;
      }

      // Query to get the revenue for the given promotorId
      const revenue = await prisma.order.findMany({
        where: {
          status_order: "SUCCESS",
          OrderDetails: {
            some: {
              ticket: {
                event: {
                  promotor_id: +promotorId, // Ensure you are using promotorId
                },
              },
            },
          },
        },
        select: {
          final_price: true,
          created_at: true,
          OrderDetails: {
            select: {
              ticket: {
                select: {
                  event: {
                    select: {
                      promotor_id: true,
                      title: true,
                      datetime: true,
                    },
                  },
                },
              },
            },
          },
        },
        orderBy: {
          created_at: "asc",
        },
      });
      const formattedRevenue = revenue.map((order) => ({
        final_price: order.final_price,
        created_at: order.created_at,
        event_title: order.OrderDetails[0]?.ticket.event.title || "",
      }));
      // Send the result in the response
      res.status(200).json({
        status: "success",
        data: formattedRevenue,
      });
    } catch (error) {
      console.error("Error dalam getTotalRevenueByPromotor:", error);
      res.status(500).json({
        status: "error",
        message:
          "Terjadi kesalahan saat mengambil total pendapatan untuk promotor",
      });
    }
  }

  async getOrderPromotor(req: Request, res: Response) {
    try {
      const transaction = await prisma.order.findMany({
        where: {
          OrderDetails: {
            some: {
              ticket: {
                event: {
                  promotor_id: +req.params.id!, // Directly filter by promotor_id
                },
              },
            },
          },
        },
        select: {
          id: true,
          status_order: true,
          total_price: true,
          final_price: true,
          point: true,
          coupon: true,
          OrderDetails: {
            select: {
              quantity: true,
              ticket: {
                select: {
                  event: {
                    select: {
                      promotor_id: true,
                      title: true,
                      datetime: true,
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
}
