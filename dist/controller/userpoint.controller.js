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
exports.UserPointController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class UserPointController {
    // list point customer
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { customer_id, id, limit, page, is_transaction } = req.query;
                const filters = {};
                const take = limit ? Math.max(1, +limit) : 10;
                const skip = page ? Math.max(0, (+page - 1) * take) : 0;
                if (customer_id)
                    filters.customer_id = customer_id;
                if (id)
                    filters.id = +id;
                if (is_transaction)
                    filters.is_transaction = is_transaction === "true";
                const data = yield prisma_1.default.userPoint.findMany({
                    take,
                    skip,
                    where: Object.assign(Object.assign({}, filters), { expired_at: { gt: new Date() } }),
                });
                const total = yield prisma_1.default.userPoint.count({
                    where: Object.assign(Object.assign({}, filters), { expired_at: { gt: new Date() } }),
                });
                const totalPage = Math.ceil(total / take);
                res.status(200).send({
                    items: data,
                    meta: {
                        total,
                        totalPage,
                        currentPage: page ? +page : 1,
                        perPage: take,
                    },
                });
            }
            catch (err) {
                console.log("Error during userPoint list retrieval:", err);
                res.status(500).send({
                    message: "An error occurred while listing userPoints",
                    error: err,
                });
            }
        });
    }
    redeemPoint(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existCustomerPoint = yield prisma_1.default.userPoint.findMany({
                    where: {
                        customer_id: req.body.customer_id,
                        expired_at: { gt: new Date() },
                        is_transaction: false,
                    },
                });
                if (existCustomerPoint.length < 1) {
                    res.status(400).send({ message: "UserPoint is null!" });
                    return;
                }
                const userPoint = yield prisma_1.default.userPoint.create({
                    data: Object.assign(Object.assign({}, req.body), { expired_at: null, is_transaction: true }),
                });
                res.status(200).send({ message: "UserPoint is redeemed", userPoint });
            }
            catch (err) {
                console.log(err);
                res.status(500).send(err);
            }
        });
    }
    getPointsUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const points = yield prisma_1.default.userPoint.aggregate({
                    where: {
                        AND: [
                            { customer_id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                            { is_transaction: false },
                            { expired_at: { gt: new Date() } },
                        ],
                    },
                    _sum: { point: true },
                });
                res.status(200).send({ result: points._sum.point });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.UserPointController = UserPointController;
