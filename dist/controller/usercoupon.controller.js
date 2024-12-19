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
exports.UserCouponController = void 0;

const prisma_1 = __importDefault(require("../prisma"));

class UserCouponController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id, id, limit, page, is_redeem } = req.query;
                const filters = {};
                const take = limit ? Math.max(1, +limit) : 10;
                const skip = page ? Math.max(0, (+page - 1) * take) : 0;
                if (user_id)
                    filters.user_id = user_id;
                if (id)
                    filters.id = +id;
                if (is_redeem)
                    filters.is_redeem = is_redeem === "true";
                const data = yield prisma_1.default.userCoupon.findMany({
                    take,
                    skip,
                    where: Object.assign(Object.assign({}, filters), { expired_at: { gt: new Date() } }),
                });
                const total = yield prisma_1.default.userCoupon.count({
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
                console.log("Error during userCoupon list retrieval:", err);
                res.status(500).send({
                    message: "An error occurred while listing userCoupons",
                    error: err,
                });
            }
        });
    }
    redeemCoupon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existCustomerPoint = yield prisma_1.default.userCoupon.findFirst({
                    where: {
                        customer_id: req.body.user_id,
                        expired_at: { gt: new Date() },
                        is_redeem: false,
                    },
                });
                if (!existCustomerPoint) {
                    res.status(400).send({ message: "Coupon not found!" });
                    return;
                }
                const userCoupon = yield prisma_1.default.userCoupon.update({
                    where: { id: existCustomerPoint.id },
                    data: Object.assign(Object.assign({}, req.body), { is_redeem: true, updated_at: new Date() }),
                });
                res.status(200).send({ message: "Coupon is redeemed", userCoupon });
            }
            catch (err) {
                console.log(err);
                res.status(500).send(err);
            }
        });
    }
}
exports.UserCouponController = UserCouponController;
