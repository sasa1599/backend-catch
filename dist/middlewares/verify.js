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
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // const token = req.header("Authorization")?.replace("Bearer ", ""); //gadipake soalnya udh pake cookie
        const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
        console.log(req.cookies, "cookies");
        console.log(token);
        if (!token)
            throw new Error("Unauthorized!");
        const verifiedUser = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY); //added JWT payload
        console.log(verifiedUser, "Verified User");
        req.user = verifiedUser;
        req.promtor = verifiedUser;
        console.log(req.user, "verified user");
        next();
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ message: "Oops! Your account isn’t verified yet. Please verify your token by clicking the link we sent to your email." });
    }
});
exports.verifyToken = verifyToken;
