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
exports.EventController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class EventController {
    getEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search } = req.query;
                const filter = {};
                if (search) {
                    filter.title = { contains: search, mode: "insensitive" };
                }
                const event = yield prisma_1.default.event.findMany({
                    where: filter,
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        category: true,
                        location: true,
                        thumbnail: true,
                        datetime: true,
                        venue: true,
                        slug: true,
                        tickets: {
                            select: {
                                price: true,
                            },
                        },
                        promotor: {
                            select: {
                                name: true,
                            },
                        },
                    },
                });
                res.status(200).send({ event });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getEventSlug(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { slug } = req.params;
                // Fetch event details from database
                const event = yield prisma_1.default.event.findFirst({
                    where: { slug },
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        category: true,
                        location: true,
                        thumbnail: true,
                        venue: true,
                        slug: true,
                        datetime: true,
                        promotor: {
                            select: {
                                id: true,
                                name: true,
                                username: true,
                                avatar: true,
                            },
                        },
                    },
                });
                if (!event) {
                    res.status(404).send({ message: "Event not found" });
                    return;
                }
                res.status(200).send(event);
            }
            catch (err) {
                console.error(err);
                res
                    .status(500)
                    .send({ error: "An error occurred while fetching the event" });
            }
        });
    }
    getEventCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { category } = req.params;
                const event = yield prisma_1.default.event.findMany({
                    where: { category: category },
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        category: true,
                        location: true,
                        thumbnail: true,
                        datetime: true,
                        venue: true,
                        slug: true,
                        tickets: {
                            select: {
                                price: true,
                            },
                        },
                        promotor: {
                            select: {
                                name: true,
                            },
                        },
                    },
                });
                res.status(200).send({ event });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.EventController = EventController;
