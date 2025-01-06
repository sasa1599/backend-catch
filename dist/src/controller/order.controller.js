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
exports.OrderController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const client_1 = require("../../prisma/generated/client");
const midtransClient = require("midtrans-client");
class OrderController {
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const { total_price, coupon, point, final_price, ticketCart } = req.body;
                console.log(req.body);
                const transactionId = yield prisma_1.default.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                    if (coupon) {
                        const coupon = yield prisma.userCoupon.findFirst({
                            where: { customer_id: userId },
                        });
                        yield prisma.userCoupon.update({
                            where: { id: coupon === null || coupon === void 0 ? void 0 : coupon.id },
                            data: { is_redeem: false },
                        });
                    }
                    if (point) {
                        yield prisma.userPoint.updateMany({
                            where: { customer_id: userId },
                            data: { is_transaction: true },
                        });
                    }
                    const { id } = yield prisma.order.create({
                        data: {
                            user_id: userId,
                            total_price,
                            coupon,
                            point,
                            final_price,
                            expires_at: new Date(new Date().getTime() + 30 * 60000),
                        },
                    });
                    yield Promise.all(ticketCart.map((item) => __awaiter(this, void 0, void 0, function* () {
                        if (item.quantity > item.ticket.seats) {
                            throw new Error(`Seats for ticket ID: ${item.ticket.id} not available! `);
                        }
                        yield prisma.orderDetails.create({
                            data: {
                                order_id: id,
                                // user_id: req.user?.id,
                                ticket_id: item.ticket.id,
                                quantity: item.quantity,
                                subPrice: item.quantity * item.ticket.price,
                            },
                        });
                        yield prisma.ticket.update({
                            where: { id: item.ticket.id },
                            data: { seats: { decrement: item.quantity } },
                        });
                    })));
                    return id;
                }));
                res
                    .status(200)
                    .send({ message: "Transaction created", order_id: transactionId });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    // async createOrder(req: Request<{}, {}, requestBody>, res: Response) {
    //   try {
    //     const user_id = req.user?.id
    //     const { total_price, coupon ,final_price, ticketCart } = req.body;
    //     console.log(req.body);
    //     const expires_at = new Date(new Date().getTime() + 10 * 60000);
    //     const transactionId = await prisma.$transaction(async (prisma) => {
    //       if (coupon) {
    //         const coupon = await prisma.userCoupon.findFirst({
    //           where: { customer_id: user_id },
    //         });
    //         await prisma.userCoupon.update({
    //           where: { id: coupon?.id },
    //           data: { is_redeem: true },
    //         });
    //       }
    //       const { id } = await prisma.order.create({
    //         data: {
    //           user_id: +req.user?.id!,
    //           total_price,
    //           coupon,
    //           final_price,
    //           expires_at,
    //         },
    //       });
    //       await Promise.all(
    //         ticketCart.map(async (item) => {
    //           if (item.quantity > item.ticket.seats) {
    //             throw new Error(
    //               `Seats for ticket ID: ${item.ticket.id} not available! `
    //             );
    //           }
    //           await prisma.orderDetails.create({
    //             data: {
    //               order_id: id,
    //               // user_id: req.user?.id,
    //               ticket_id: item.ticket.id,
    //               quantity: item.quantity,
    //               subPrice: item.quantity * item.ticket.price,
    //             },
    //           });
    //           await prisma.ticket.update({
    //             where: { id: item.ticket.id },
    //             data: { seats: { decrement: item.quantity } },
    //           });
    //         })
    //       );
    //       return id;
    //     });
    //     res
    //       .status(200)
    //       .send({ message: "Transaction created", order_id: transactionId });
    //   } catch (err) {
    //     console.log(err);
    //     res.status(400).send(err);
    //   }
    // }
    getOrderCustomerId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const order = yield prisma_1.default.order.findMany({
                    where: { user_id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                    select: {
                        id: true,
                        user_id: true,
                        status_order: true,
                        expires_at: true,
                        total_price: true,
                        final_price: true,
                        point: true,
                        coupon: true,
                        OrderDetails: {
                            select: {
                                quantity: true,
                                subPrice: true,
                                ticket: {
                                    select: {
                                        description: true,
                                        price: true,
                                        event: {
                                            select: {
                                                id: true,
                                                title: true,
                                                thumbnail: true,
                                                datetime: true,
                                                location: true,
                                                venue: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                });
                res.status(200).send({ result: order });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getOrderId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaction = yield prisma_1.default.order.findUnique({
                    where: { id: +req.params.id },
                    select: {
                        id: true,
                        status_order: true,
                        expires_at: true,
                        total_price: true,
                        final_price: true,
                        OrderDetails: {
                            select: {
                                quantity: true,
                                subPrice: true,
                                ticket: {
                                    select: {
                                        description: true,
                                        price: true,
                                        event: {
                                            select: {
                                                promotor_id: true,
                                                title: true,
                                                thumbnail: true,
                                                datetime: true,
                                                location: true,
                                                venue: true,
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
    // Midtrans payment
    getSnapToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const { order_id } = req.body;
                console.log("order", req.body);
                const item_details = [];
                const checkTransaction = yield prisma_1.default.order.findUnique({
                    where: { id: order_id },
                    select: {
                        status_order: true,
                        expires_at: true,
                        coupon: true,
                        point: true,
                    },
                });
                if ((checkTransaction === null || checkTransaction === void 0 ? void 0 : checkTransaction.status_order) === client_1.StatusOrder.CANCELLED)
                    throw "You cannot continue transaction";
                const ticketTransaction = yield prisma_1.default.orderDetails.findMany({
                    where: { order_id: order_id },
                    include: {
                        ticket: {
                            select: {
                                category: true,
                            },
                        },
                    },
                });
                const user = yield prisma_1.default.customer.findUnique({
                    where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                });
                for (const item of ticketTransaction) {
                    item_details.push({
                        id: item.ticket_id,
                        price: item.subPrice / item.quantity,
                        quantity: item.quantity,
                        name: item.ticket.category,
                    });
                }
                if (checkTransaction === null || checkTransaction === void 0 ? void 0 : checkTransaction.coupon) {
                    const coupon = yield prisma_1.default.userCoupon.findFirst({
                        where: { customer_id: user === null || user === void 0 ? void 0 : user.id },
                    });
                    item_details.push({
                        id: coupon === null || coupon === void 0 ? void 0 : coupon.id,
                        price: -(req.body.total_price - checkTransaction.point) / 10,
                        quantity: 1,
                        name: "Coupon",
                    });
                    console.log("coupon", coupon);
                }
                if (checkTransaction && (checkTransaction === null || checkTransaction === void 0 ? void 0 : checkTransaction.point) > 0) {
                    const points = yield prisma_1.default.userPoint.findMany({
                        where: { customer_id: (_b = req.user) === null || _b === void 0 ? void 0 : _b.id },
                        select: { point: true },
                        orderBy: { created_at: "asc" },
                    });
                    item_details.push({
                        id: points[0].point,
                        price: -checkTransaction.point,
                        quantity: 1,
                        name: "Points",
                    });
                }
                const resMinutes = new Date(`${checkTransaction === null || checkTransaction === void 0 ? void 0 : checkTransaction.expires_at}`).getTime() -
                    new Date().getTime();
                const snap = new midtransClient.Snap({
                    isProduction: false,
                    serverKey: `${process.env.MID_SERVER_KEY}`,
                });
                const parameters = {
                    transaction_details: req.body,
                    customer_details: {
                        name: user === null || user === void 0 ? void 0 : user.name,
                        email: user === null || user === void 0 ? void 0 : user.email,
                    },
                    item_details,
                    page_expiry: {
                        duration: new Date(resMinutes).getMinutes(),
                        unit: "minutes",
                    },
                    expiry: {
                        unit: "minutes",
                        duration: new Date(resMinutes).getMinutes(),
                    },
                };
                const transaction = yield snap.createTransaction(parameters);
                res.status(200).send({ result: transaction.token });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    // async getSnapToken(req: Request, res: Response) {
    //   try {
    //     const { order_id } = req.body;
    //     console.log("order", order_id);
    //     const item_details = [];
    //     const checkTransaction = await prisma.order.findUnique({
    //       where: { id: order_id },
    //       select: { status_order: true, expires_at: true },
    //     });
    //     if (checkTransaction?.status_order === StatusOrder.CANCELLED)
    //       throw "You cannot continue the transaction, book another ticket now.";
    //     const resMinutes =
    //       new Date(`${checkTransaction?.expires_at}`).getTime() -
    //       new Date().getTime();
    //     const ticketOrder = await prisma.orderDetails.findMany({
    //       where: { order_id: order_id },
    //       include: {
    //         ticket: {
    //           select: {
    //             category: true,
    //           },
    //         },
    //       },
    //     });
    //     const user = await prisma.customer.findUnique({
    //       where: { id: req.user?.id },
    //     });
    //     for (const item of ticketOrder) {
    //       item_details.push({
    //         id: item.ticket_id,
    //         price: item.subPrice / item.quantity,
    //         quantity: item.quantity,
    //         name: item.ticket.category,
    //       });
    //     }
    //     const snap = new midtransClient.Snap({
    //       isProduction: false,
    //       serverKey: `${process.env.MID_SERVER_KEY}`,
    //     });
    //     const parameters = {
    //       transaction_details: req.body,
    //       customer_details: {
    //         name: user?.name,
    //         email: user?.email,
    //       },
    //       item_details,
    //       page_expiry: {
    //         duration: new Date(resMinutes).getMinutes(),
    //         unit: "minutes",
    //       },
    //       expiry: {
    //         unit: "minutes",
    //         duration: new Date(resMinutes).getMinutes(),
    //       },
    //     };
    //     console.log("parameters", parameters);
    //     const transaction = await snap.createTransaction(parameters);
    //     res.status(200).send({ result: transaction.token });
    //   } catch (err) {
    //     console.log(err);
    //     res.status(400).send(err);
    //   }
    // }
    updateOrderHook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { transaction_status, order_id } = req.body;
                const statusTransaction = transaction_status === "settlement"
                    ? "SUCCESS"
                    : transaction_status === "pending"
                        ? "PENDING"
                        : "CANCELLED";
                if (statusTransaction === "CANCELLED") {
                    const tickets = yield prisma_1.default.orderDetails.findMany({
                        where: { order_id: +order_id },
                        select: {
                            quantity: true,
                            ticket_id: true,
                        },
                    });
                    for (const item of tickets) {
                        yield prisma_1.default.ticket.update({
                            where: { id: item.ticket_id },
                            data: { seats: { increment: item.quantity } },
                        });
                    }
                }
                const statusMapping = {
                    success: client_1.StatusOrder.SUCCESS,
                    pending: client_1.StatusOrder.PENDING,
                    failed: client_1.StatusOrder.FAILED,
                    cancelled: client_1.StatusOrder.CANCELLED,
                };
                const mappedStatus = statusMapping[statusTransaction.toLowerCase()];
                if (!mappedStatus) {
                    throw new Error("Invalid statusTransaction received from Midtrans");
                }
                yield prisma_1.default.order.update({
                    where: { id: +order_id },
                    data: {
                        status_order: mappedStatus,
                    },
                });
                res.status(200).send({ message: "Success" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getTicketOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const tickets = yield prisma_1.default.orderDetails.findMany({
                    where: {
                        order_id: (_a = req.order) === null || _a === void 0 ? void 0 : _a.id,
                    },
                    select: {
                        quantity: true,
                        ticket_id: true,
                    },
                });
                res.status(200).send({ tickets });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.OrderController = OrderController;
