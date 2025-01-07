"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class AdminController {
    // Fungsi untuk mendapatkan jumlah order berdasarkan promotor_id
    getOrderCountByPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { promotor_id } = req.params;
                // Mengambil jumlah order yang berhasil (status "SUCCESS") berdasarkan promotor_id
                const orderCount = yield prisma_1.default.order.count({
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
            }
            catch (error) {
                console.error("Error dalam getOrderCountByPromotor:", error);
                res.status(500).json({
                    status: "error",
                    message: "Terjadi kesalahan saat mengambil jumlah order per promotor",
                });
            }
        });
    }
    // Fungsi untuk mendapatkan total pendapatan berdasarkan promotor_id
    getTotalRevenueByPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const revenue = yield prisma_1.default.order.findMany({
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
                const formattedRevenue = revenue.map((order) => {
                    var _a;
                    return ({
                        final_price: order.final_price,
                        created_at: order.created_at,
                        event_title: ((_a = order.OrderDetails[0]) === null || _a === void 0 ? void 0 : _a.ticket.event.title) || "",
                    });
                });
                // Send the result in the response
                res.status(200).json({
                    status: "success",
                    data: formattedRevenue,
                });
            }
            catch (error) {
                console.error("Error dalam getTotalRevenueByPromotor:", error);
                res.status(500).json({
                    status: "error",
                    message: "Terjadi kesalahan saat mengambil total pendapatan untuk promotor",
                });
            }
        });
    }
    getOrderPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaction = yield prisma_1.default.order.findMany({
                    where: {
                        OrderDetails: {
                            some: {
                                ticket: {
                                    event: {
                                        promotor_id: +req.params.id, // Directly filter by promotor_id
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
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.AdminController = AdminController;
