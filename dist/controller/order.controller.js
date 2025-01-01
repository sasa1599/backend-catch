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
    applyCoupon(total_price, coupon_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!coupon_id)
                return { total_price, discount: 0 };
            const discount = coupon_id ? 0.1 * total_price : 0;
            return { total_price: total_price - discount, discount };
        });
    }
    applyPoints(userId, total_price, points_used) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPoints = yield prisma_1.default.userPoint.findMany({
                where: { customer_id: userId, is_transaction: false },
            });
            const totalPoints = userPoints.reduce((sum, point) => sum + point.point, 0);
            if (points_used > totalPoints) {
                throw new Error("Not enough points available");
            }
            const final_price = total_price - totalPoints;
            return { final_price: Math.max(0, final_price), points_used: totalPoints };
        });
    }
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { total_price, final_price, ticketCart } = req.body;
                const expires_at = new Date(new Date().getTime() + 10 * 60000);
                const transactionId = yield prisma_1.default.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    const { id } = yield prisma.order.create({
                        data: {
                            user_id: +((_a = req.user) === null || _a === void 0 ? void 0 : _a.id),
                            total_price,
                            final_price,
                            expires_at,
                        },
                    });
                    yield Promise.all(ticketCart.map((item) => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        if (item.quantity > item.ticket.seats) {
                            throw new Error(`Seats for ticket ID: ${item.ticket.id} not available! `);
                        }
                        yield prisma.orderDetails.create({
                            data: {
                                order_id: id,
                                user_id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id,
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
    getOrderCustomerId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const order = yield prisma_1.default.order.findMany({
                    where: { user_id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                    select: {
                        user_id: true,
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
    getSnapToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { order_id } = req.body;
                const item_details = [];
                const checkTransaction = yield prisma_1.default.order.findUnique({
                    where: { id: order_id },
                    select: { status_order: true, expires_at: true },
                });
                if ((checkTransaction === null || checkTransaction === void 0 ? void 0 : checkTransaction.status_order) === client_1.StatusOrder.CANCELLED)
                    throw "You cannot continue the transaction, book another ticket now.";
                const resMinutes = new Date(`${checkTransaction === null || checkTransaction === void 0 ? void 0 : checkTransaction.expires_at}`).getTime() -
                    new Date().getTime();
                const ticketOrder = yield prisma_1.default.orderDetails.findMany({
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
                for (const item of ticketOrder) {
                    item_details.push({
                        id: item.ticket_id,
                        price: item.subPrice / item.quantity,
                        quantity: item.quantity,
                        name: item.ticket.category,
                    });
                }
                const snap = new midtransClient.Snap({
                    isProduction: false,
                    serverKey: `${process.env.MID_SERVER_KEY}`,
                });
                const parameters = {
                    transaction_details: req.body,
                    customer_details: {
                        first_name: user === null || user === void 0 ? void 0 : user.name,
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
                const transaction = yield snap.createOrder(parameters);
                res.status(200).send({ result: transaction.token });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    midtransWebHook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { transaction_status, order_id } = req.body;
                const statusTransaction = transaction_status === "settlement"
                    ? "SUCCESS"
                    : transaction_status === "pending"
                        ? "PENDING"
                        : "canceled";
                if (statusTransaction === "canceled") {
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
