// import { Request, Response } from "express";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export class AdminController {
//     // Mendapatkan Event Aktif (Event yang akan datang)
//     async getActiveEvents(req: Request, res: Response): Promise<void> {
//         try {
//             const activeEvents = await prisma.event.count({
//                 where: {
//                     datetime: {
//                         gt: new Date(), // Event yang akan datang
//                     },
//                 },
//             });

//             res.status(200).json({
//                 status: "success",
//                 data: { activeEvents },
//             });
//         } catch (error) {
//             console.error("Error dalam getActiveEvents:", error);
//             res.status(500).json({
//                 status: "error",
//                 message: "Terjadi kesalahan saat mengambil data event aktif",
//             });
//         }
//     }

//     // Mendapatkan Event Tidak Aktif (Event yang sudah lewat)
//     async getInactiveEvents(req: Request, res: Response): Promise<void> {
//         try {
//             const inactiveEvents = await prisma.event.count({
//                 where: {
//                     datetime: {
//                         lt: new Date(), // Event yang sudah lewat
//                     },
//                 },
//             });

//             res.status(200).json({
//                 status: "success",
//                 data: { inactiveEvents },
//             });
//         } catch (error) {
//             console.error("Error dalam getInactiveEvents:", error);
//             res.status(500).json({
//                 status: "error",
//                 message: "Terjadi kesalahan saat mengambil data event tidak aktif",
//             });
//         }
//     }

//     // Mendapatkan Total Event
//     async getTotalEvents(req: Request, res: Response): Promise<void> {
//         try {
//             const totalEvents = await prisma.event.count();

//             res.status(200).json({
//                 status: "success",
//                 data: { totalEvents },
//             });
//         } catch (error) {
//             console.error("Error dalam getTotalEvents:", error);
//             res.status(500).json({
//                 status: "error",
//                 message: "Terjadi kesalahan saat mengambil data total event",
//             });
//         }
//     }

//     // Mendapatkan Total Pendapatan
//     async getTotalRevenue(req: Request, res: Response): Promise<void> {
//         try {
//             const totalRevenue = await prisma.order.aggregate({
//                 _sum: {
//                     final_price: true, // Total dari final_price di model Order
//                 },
//                 where: {
//                     status_order: "SUCCESS", // Hanya menghitung order yang berhasil
//                 },
//             });

//             res.status(200).json({
//                 status: "success",
//                 data: {
//                     totalRevenue: totalRevenue._sum.final_price || 0,
//                 },
//             });
//         } catch (error) {
//             console.error("Error dalam getTotalRevenue:", error);
//             res.status(500).json({
//                 status: "error",
//                 message: "Terjadi kesalahan saat mengambil total pendapatan",
//             });
//         }
//     }

//     // Mendapatkan Statistik Event untuk Admin
//     async getEventStatistics(req: Request, res: Response): Promise<void> {
//         try {
//             const eventId = req.params.eventId;

//             // Mendapatkan detail event berdasarkan eventId
//             const event = await prisma.event.findUnique({
//                 where: {
//                     id: parseInt(eventId), // Mengambil event berdasarkan ID
//                 },
//             });

//             if (!event) {
//                  res.status(404).json({
//                     status: "error",
//                     message: "Event tidak ditemukan",
//                 });
//                 return
//             }

//             // Menghitung statistik secara manual untuk orders dan tickets
//             const orders = await prisma.order.findMany({
//                 where: {
//                     OrderDetails: {
//                         some: {
//                             ticket: {
//                                 event_id: event.id, // Mengambil order berdasarkan event_id
//                             },
//                         },
//                     },
//                     status_order: "SUCCESS", // Hanya order yang berhasil
//                 },
//             });

//             const tickets = await prisma.ticket.findMany({
//                 where: {
//                     event_id: event.id, // Mengambil ticket berdasarkan event_id
//                 },
//             });

//             const totalRevenue = orders.reduce(
//                 (sum: number, order: { final_price: number }) => sum + (order.final_price || 0),
//                 0
//             );

//             const totalCapacity = tickets.reduce(
//                 (sum: number, ticket: { seats: number }) => sum + ticket.seats,
//                 0
//             );

//             const ticketsSold = orders.length;
//             const sellThroughRate =
//                 totalCapacity > 0 ? (ticketsSold / totalCapacity) * 100 : 0;

//             res.status(200).json({
//                 status: "success",
//                 data: {
//                     eventId: event.id,
//                     title: event.title,
//                     ticketsSold,
//                     totalCapacity,
//                     remainingCapacity: totalCapacity - ticketsSold,
//                     sellThroughRate: `${sellThroughRate.toFixed(2)}%`,
//                     revenue: `Rp ${totalRevenue.toLocaleString("id-ID")}`,
//                     status: new Date() > event.datetime ? "PAST" : "UPCOMING",
//                 },
//             });
//         } catch (error) {
//             console.error("Error dalam getEventStatistics:", error);
//             res.status(500).json({
//                 status: "error",
//                 message: "Terjadi kesalahan saat mengambil statistik event",
//             });
//         }
//     }

//     // Mendapatkan Overview Event Promotor (Termasuk Statistik)
//     async getPromotorEventOverview(req: Request, res: Response): Promise<void> {
//         try {
//             const promotorId = req.params.promotorId;

//             // Mendapatkan event berdasarkan promotor_id
//             const events = await prisma.event.findMany({
//                 where: { promotor_id: parseInt(promotorId) },
//             });

//             const formattedEvents = await Promise.all(events.map(async (event) => {
//                 // Mengambil order dan tiket untuk setiap event
//                 const orders = await prisma.order.findMany({
//                     where: {
//                         OrderDetails: {
//                             some: {
//                                 ticket: {
//                                     event_id: event.id,
//                                 },
//                             },
//                         },
//                         status_order: "SUCCESS",
//                     },
//                 });

//                 const tickets = await prisma.ticket.findMany({
//                     where: {
//                         event_id: event.id,
//                     },
//                 });

//                 const ticketsSold = orders.length;
//                 const totalRevenue = orders.reduce(
//                     (sum: number, order: { final_price: number }) => sum + (order.final_price || 0),
//                     0
//                 );
//                 const totalCapacity = tickets.reduce(
//                     (sum: number, ticket: { seats: number }) => sum + ticket.seats,
//                     0
//                 );
//                 const sellThroughRate =
//                     totalCapacity > 0 ? (ticketsSold / totalCapacity) * 100 : 0;

//                 return {
//                     id: event.id,
//                     title: event.title,
//                     category: event.category,
//                     ticketsSold,
//                     totalCapacity,
//                     sellThroughRate: `${sellThroughRate.toFixed(2)}%`,
//                     revenue: `Rp ${totalRevenue.toLocaleString("id-ID")}`,
//                     status: new Date() > event.datetime ? "PAST" : "UPCOMING",
//                 };
//             }));

//             res.status(200).json({
//                 status: "success",
//                 data: { events: formattedEvents },
//             });
//         } catch (error) {
//             console.error("Error dalam getPromotorEventOverview:", error);
//             res.status(500).json({
//                 status: "error",
//                 message: "Terjadi kesalahan saat mengambil overview event promotor",
//             });
//         }
//     }
// }

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
//   async getTotalRevenueByPromotor(req: Request, res: Response) {
//     try {
//       const { promotor_id } = req.params;

//       const totalRevenue = await prisma.order.aggregate({
//         _sum: {
//           final_price: true,
//         },
//         where: {
//           promotor_id: +promotor_id, // Menghitung berdasarkan promotor_id
//           status_order: "SUCCESS", // Hanya menghitung order dengan status "SUCCESS"
//         },
//       });

//       res.status(200).json({
//         status: "success",
//         data: {
//           totalRevenue: totalRevenue._sum.final_price || 0, // Total pendapatan untuk promotor ini
//         },
//       });
//     } catch (error) {
//       console.error("Error dalam getTotalRevenueByPromotor:", error);
//       res.status(500).json({
//         status: "error",
//         message:
//           "Terjadi kesalahan saat mengambil total pendapatan untuk promotor",
//       });
//     }
//   }
//   async getTotalRevenue(req: Request, res: Response): Promise<void> {
//     try {
//       const promotorId = req.promotor?.id;

//       if (!promotorId) {
//         res.status(400).json({ error: "Invalid promotor ID" });
//         return;
//       }
// const paidRevenue = await prisma.order.findMany({
//     where: {
//         status_order: "SUCCESS",
//     },
//     include: {
//         orderDetails: true, // Include the related orderDetails for the response
//       },
// })
//       const totalRevenue = await prisma.orderDetails.aggregate({
//         _sum: {
//           subPrice: true,
//         },
//         where: {
//           promotor_id: promotorId,
//         },
//       });

//       res.status(200).json({ totalRevenue: totalRevenue._sum.final_price || 0 });
//     } catch (error) {
//       console.error("Error fetching total revenue:", error);
//       res.status(500).json({ error: "Failed to fetch total revenue" });
//     }
//   }
}
