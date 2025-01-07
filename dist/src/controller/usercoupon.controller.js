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
                const { user_id } = req.body;
                const userCoupon = yield prisma_1.default.userCoupon.findFirst({
                    where: {
                        customer_id: user_id,
                        is_redeem: false,
                        expired_at: { gt: new Date() },
                    },
                });
                if (!userCoupon) {
                    res.status(400).send({ message: "Coupon not found or expired!" });
                    return;
                }
                const discount = userCoupon.discount || 0;
                const redeemedCoupon = yield prisma_1.default.userCoupon.update({
                    where: { id: userCoupon.id },
                    data: { is_redeem: true, updated_at: new Date() },
                });
                res.status(200).send({
                    message: "Coupon redeemed successfully",
                    redeemedCoupon,
                    discount,
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).send({ message: "An error occurred", error: err });
            }
        });
    }
    getUserCoupon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const coupon = yield prisma_1.default.userCoupon.findFirst({
                    where: {
                        AND: [
                            { customer_id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                            { is_redeem: false },
                            { expired_at: { gt: new Date() } },
                        ],
                    },
                    select: { is_redeem: true },
                });
                res.status(200).send({ result: coupon });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.UserCouponController = UserCouponController;
