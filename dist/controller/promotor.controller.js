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
exports.PromotorController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const register_service_1 = require("../services/register.service");
const cloudinary_1 = require("../services/cloudinary");
const slug_1 = require("../helpers/slug");
class PromotorController {
    // Register Promotor
    registerPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const promotors = [
                    "username",
                    "email",
                    "password",
                    "confirmPassword",
                    "name",
                ];
                promotors.map((promotor) => {
                    if (!req.body[promotor]) {
                        return res.status(400).send({ message: `${promotor} is required` });
                    }
                    // check password
                    if (req.body.password != req.body.confirmPassword)
                        throw { message: "password not match !" };
                });
                // validasi exist
                const existPromotor = yield (0, register_service_1.findPromotor)(req.body.username, req.body.email);
                if (existPromotor)
                    throw { message: "Username or Email already exists !" };
                // hash password
                const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
                // create Promotor
                const promotor = yield prisma_1.default.promotor.create({
                    data: {
                        username: req.body.username,
                        name: req.body.name,
                        email: req.body.email,
                        password: hashedPassword,
                        updated_at: null,
                    },
                });
                res.status(200).send({ message: "Promotor created", promotor });
            }
            catch (err) {
                console.log(err);
                res.status(500).send(err);
            }
        });
    }
    // update promotor
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const promotors = ["username", "email"];
                promotors.map((promotor) => {
                    if (!req.body[promotor]) {
                        return res.status(400).send({ message: `${promotor} is required` });
                    }
                });
                const promotor = yield prisma_1.default.promotor.update({
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
                res.status(200).send({ message: "promotor updated", promotor });
            }
            catch (err) {
                console.log(err);
                res.status(500).send(err);
            }
        });
    }
    // list promotor
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, id, username, isVerify, limit, page } = req.query;
                const filters = {};
                const take = limit ? +limit : 10;
                const skip = page ? +page * take : 0;
                if (email)
                    filters.email = email;
                if (id)
                    filters.id = +id;
                if (username)
                    filters.username = username;
                if (isVerify)
                    filters.isVerify = isVerify === "true";
                const data = yield prisma_1.default.promotor.findMany({
                    take,
                    skip,
                    where: filters,
                });
                const total = yield prisma_1.default.promotor.count({
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
                console.log(err);
                res.status(500).send(err);
            }
        });
    }
    getPromotorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const user = yield prisma_1.default.promotor.findUnique({
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
    // delete promotor
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const promotor = yield prisma_1.default.promotor.delete({
                    where: {
                        id: +req.params.id,
                    },
                });
                res.status(200).send({ message: "Promotor deleted", promotor });
            }
            catch (err) {
                console.log(err);
                res.status(500).send(err);
            }
        });
    }
    proAvatarCloud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file)
                    throw { message: "Avatar not found !" };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "avatarLogin");
                yield prisma_1.default.promotor.update({
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
    // createEvent
    createEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file)
                    throw { message: "thumbnail empty" };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "thumbnail");
                const { title, description, category, location, venue, datetime, coupon_promotor, } = req.body;
                const slug = (0, slug_1.createSlug)(title);
                const { id } = yield prisma_1.default.event.create({
                    data: {
                        title,
                        description,
                        category,
                        location,
                        venue,
                        slug: slug,
                        datetime,
                        thumbnail: secure_url,
                        promotor_id: (_a = req.promotor) === null || _a === void 0 ? void 0 : _a.id,
                        coupon_promotor: +coupon_promotor,
                    },
                });
                res.status(200).send({ message: "event created", event_id: id });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.PromotorController = PromotorController;
