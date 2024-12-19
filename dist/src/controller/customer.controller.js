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
exports.CustomerController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const register_service_1 = require("../services/register.service");
const cloudinary_1 = require("../services/cloudinary");
const addPoint = (referralUserId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingPoint = yield prisma_1.default.userPoint.findFirst({
            where: { customer_id: referralUserId },
        });
        const points = 10000; // Points to be added
        const expirationDate = new Date(new Date().setMonth(new Date().getMonth() + 3)); // 3 months from now
        yield prisma_1.default.userPoint.create({
            data: {
                customer_id: referralUserId,
                point: points,
                expired_at: expirationDate,
            },
        });
        console.log("Points successfully added to referral user.");
        return;
    }
    catch (err) {
        console.error("Error adding points:", err);
        throw err; // Let the caller handle the error
    }
});
const addCoupon = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const precentage = 10; // Points to be added
        const expirationDate = new Date(new Date().setMonth(new Date().getMonth() + 3)); // 3 months from now
        yield prisma_1.default.userCoupon.create({
            data: {
                customer_id: user_id,
                precentage: precentage,
                expired_at: expirationDate,
                updated_at: null,
            },
        });
        return;
    }
    catch (err) {
        console.error("Error adding points:", err);
        throw err; // Let the caller handle the error
    }
});
class CustomerController {
    // register customer
    registeration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customers = ["username", "email", "password", "confirmPassword", "name"];
                customers.map((customer) => {
                    if (!req.body[customer]) {
                        return res.status(400).send({ message: `${customer} is required` });
                    }
                    // check password
                    if (req.body.password != req.body.confirmPassword)
                        throw { message: "password not match !" };
                });
                // validasi exist
                const existCustomer = yield (0, register_service_1.findCust)(req.body.username, req.body.email);
                if (existCustomer)
                    throw { message: "Username or Email already exists !" };
                // hash password
                const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
                // validasi exist referral code
                if (req.body.referred_code) {
                    // Fetch referral user
                    const referralUser = yield (0, register_service_1.findReferralCode)(req.body.referred_code);
                    if (!referralUser) {
                        res.status(400).send({ message: "Referral code not found!" });
                        return;
                    }
                    // Add points to the referrer
                    yield addPoint(referralUser.id); // Pass referralUser ID
                }
                // create customer
                const customer = yield prisma_1.default.customer.create({
                    data: {
                        username: req.body.username,
                        name: req.body.name,
                        email: req.body.email,
                        password: hashedPassword,
                        referred_code: req.body.referred_code,
                        updated_at: null,
                    },
                });
                //coupon 10%
                if (customer.referred_code) {
                    yield addCoupon(customer.id);
                }
                // create referral code
                const updateCustomer = yield prisma_1.default.customer.update({
                    where: { id: customer.id },
                    data: { ref_code: customer.id + customer.username.substring(0, 3) },
                });
                res.status(201).send({ message: "Customer created", updateCustomer });
            }
            catch (err) {
                console.error("Error during registration:", err);
                res
                    .status(500)
                    .send({ message: "An error occurred during registration", error: err });
            }
        });
    }
    // update customer
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customers = ["username", "email", "name"];
                customers.map((customer) => {
                    if (!req.body[customer]) {
                        return res.status(400).send({ message: `${customer} is required` });
                    }
                });
                const existingCustomer = yield prisma_1.default.customer.findFirst({
                    where: {
                        OR: [{ username: req.body.username }, { email: req.body.email }],
                        NOT: { id: +req.params.id },
                    },
                });
                if (existingCustomer) {
                    res.status(400).send({ message: "Username or Email already exists!" });
                    return;
                }
                const customer = yield prisma_1.default.customer.update({
                    where: {
                        id: +req.params.id,
                    },
                    data: {
                        username: req.body.username,
                        name: req.body.name,
                        email: req.body.email,
                        updated_at: new Date(),
                    },
                });
                res.status(200).send({ message: "Customer updated", customer });
            }
            catch (err) {
                console.error("Error during customer update:", err);
                res
                    .status(500)
                    .send({ message: "An error occurred during update", error: err });
            }
        });
    }
    // list customer
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { ref_code, referred_code, email, id, username, isVerify, limit, page, } = req.query;
                const filters = {};
                const take = limit ? Math.max(1, +limit) : 10;
                const skip = page ? Math.max(0, (+page - 1) * take) : 0;
                if (ref_code)
                    filters.ref_code = ref_code;
                if (referred_code)
                    filters.referred_code = referred_code;
                if (email)
                    filters.email = email;
                if (id)
                    filters.id = +id;
                if (username)
                    filters.username = username;
                if (isVerify)
                    filters.isVerify = isVerify === "true";
                const data = yield prisma_1.default.customer.findMany({
                    take,
                    skip,
                    where: filters,
                });
                const total = yield prisma_1.default.customer.count({
                    where: filters,
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
                console.log("Error during customer list retrieval:", err);
                res.status(500).send({
                    message: "An error occurred while listing customers",
                    error: err,
                });
            }
        });
    }
    getUsersId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const user = yield prisma_1.default.customer.findUnique({
                    where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                });
                res.status(200).send({ user });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    // delete customer
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield prisma_1.default.customer.delete({
                    where: {
                        id: +req.params.id,
                    },
                });
                res.status(200).send({ message: "Customer deleted", customer });
            }
            catch (err) {
                console.log(err);
                res.status(500).send(err);
            }
        });
    }
    editAvatarCloud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file)
                    throw { message: "Avatar not found !" };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "avatarLogin");
                yield prisma_1.default.customer.update({
                    where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                    data: { avatar: secure_url },
                });
                console.log(req.file);
                res.status(200).send({ message: "Avatar edited !" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.CustomerController = CustomerController;
