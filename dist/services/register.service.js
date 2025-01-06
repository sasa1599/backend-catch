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
exports.findPromotor = exports.findReferralCode = exports.findCust = void 0;
const prisma_1 = __importDefault(require("../prisma"));
//customer
const findCust = (username, email) => __awaiter(void 0, void 0, void 0, function* () {
    const userCust = yield prisma_1.default.customer.findFirst({
        where: { OR: [{ username: username }, { email: email }] },
    });
    return userCust;
});
exports.findCust = findCust;
const findReferralCode = (referralCode) => __awaiter(void 0, void 0, void 0, function* () {
    const referredUser = yield prisma_1.default.customer.findFirst({
        where: { ref_code: referralCode },
    });
    return referredUser;
});
exports.findReferralCode = findReferralCode;
//promotor
const findPromotor = (username, email) => __awaiter(void 0, void 0, void 0, function* () {
    const userPro = yield prisma_1.default.promotor.findFirst({
        where: { OR: [{ username: username }, { email: email }] },
    });
    return userPro;
});
exports.findPromotor = findPromotor;
