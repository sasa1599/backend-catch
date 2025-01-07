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
exports.AuthController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = require("jsonwebtoken");
const register_service_1 = require("../services/register.service");
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const mailer_1 = require("../services/mailer");
const fs_1 = __importDefault(require("fs"));
const addPoint = (referralUserId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
    }
    catch (err) {
        console.error("Error adding points:", err);
        throw err; // Let the caller handle the error
    }
});
const addCoupon = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const percentage = 10; // Percentage for the coupon
        const expirationDate = new Date(new Date().setMonth(new Date().getMonth() + 3)); // 3 months from now
        yield prisma_1.default.userCoupon.create({
            data: {
                customer_id: user_id,
                precentage: percentage,
                expired_at: expirationDate,
                updated_at: null,
            },
        });
        console.log("Coupon successfully added to new user.");
    }
    catch (err) {
        console.error("Error adding coupon:", err);
        throw err; // Let the caller handle the error
    }
});
class AuthController {
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, password } = req.body;
                if (data.role === "customer") {
                    const customer = yield prisma_1.default.customer.findUnique({
                        where: { username: data.username },
                    });
                    if (!customer)
                        throw { message: "Customer account not found!" };
                    const isValidPass = yield bcrypt_1.default.compare(password, customer.password);
                    if (!isValidPass)
                        throw { message: "Incorrect Password!" };
                    if (!customer.isVerify)
                        throw {
                            message: "Your account is not verified. Please verify your account before logging in.",
                        };
                    // Check if points or coupon are already assigned to the customer
                    const existingPoints = yield prisma_1.default.userPoint.findFirst({
                        where: { customer_id: customer.id },
                    });
                    const existingCoupon = yield prisma_1.default.userCoupon.findFirst({
                        where: { customer_id: customer.id },
                    });
                    // Check if the customer used a referral code
                    if (customer.referred_code && !existingPoints && !existingCoupon) {
                        // Find the referring customer
                        const referralUser = yield (0, register_service_1.findReferralCode)(customer.referred_code);
                        if (referralUser) {
                            // Check if the referral user has already received points (ensure this is done only once)
                            const existingReferralPoints = yield prisma_1.default.userPoint.findFirst({
                                where: { customer_id: referralUser.id },
                            });
                            // If the referral user hasn't received points yet, add them
                            if (!existingReferralPoints) {
                                yield addPoint(referralUser.id); // Add points to referrer
                            }
                            // If the new customer hasn't received a coupon yet, add it
                            if (!existingCoupon) {
                                yield addCoupon(customer.id); // Add coupon to customer
                            }
                        }
                    }
                    // Create JWT token for the customer
                    const payload = { id: customer.id, username: customer.username };
                    const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                    res
                        .status(200)
                        .cookie("token", token, {
                        httpOnly: true,
                        maxAge: 24 * 60 * 60 * 1000, // 1 day
                    })
                        .send({ message: "Login Successfully", customer, token });
                }
                else if (data.role === "promotor") {
                    const promotor = yield prisma_1.default.promotor.findUnique({
                        where: { username: data.username },
                    });
                    if (!promotor)
                        throw { message: "Promotor account not found!" };
                    const isValidPass = yield bcrypt_1.default.compare(password, promotor.password);
                    if (!isValidPass)
                        throw { message: "Incorrect Password!" };
                    if (!promotor.is_verify)
                        throw {
                            message: "Your account is not verified. Please verify your account before logging in.",
                        };
                    const payload = { id: promotor.id, username: promotor.username };
                    const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                    res
                        .status(200)
                        .cookie("token", token, {
                        httpOnly: true,
                        maxAge: 24 * 60 * 60 * 1000, // 1 day
                        path: "/",
                        secure: process.env.NODE_ENV === "production",
                    })
                        .send({ message: "Login Successfully", promotor, token });
                }
            }
            catch (err) {
                console.error("Error during login:", err);
                res.status(400).send(err);
            }
        });
    }
    registeration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, email, password, confirmPassword, name, referred_code, } = req.body;
                // Validate input
                if (!username || !email || !password || !confirmPassword || !name) {
                    res.status(400).send({ message: "All fields are required" });
                    return;
                }
                if (password !== confirmPassword) {
                    res.status(400).send({ message: "Passwords do not match" });
                    return;
                }
                // Check if customer already exists
                const existingCustomer = yield (0, register_service_1.findCust)(username, email);
                if (existingCustomer) {
                    res.status(400).send({ message: "Username or Email already exists" });
                    return;
                }
                // Hash password
                const hashedPassword = yield bcrypt_1.default.hash(password, 10);
                // Create the new customer
                const customer = yield prisma_1.default.customer.create({
                    data: {
                        username,
                        email,
                        password: hashedPassword,
                        name,
                        referred_code,
                    },
                });
                // Generate verification token
                const payload = { id: customer.id, role: "customer" };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "10m" });
                const link = `${process.env.BASE_URL_FE}/verify/${token}?role=customer`;
                // Prepare and send the email
                const templatePath = path_1.default.join(__dirname, "../templates", "verify.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ username: req.body.username, link });
                yield mailer_1.transporter.sendMail({
                    from: "shnazzhr@gmail.com",
                    to: req.body.email,
                    subject: "Registration Successful",
                    html,
                });
                // Generate the ref_code and update customer
                const updateCustomer = yield prisma_1.default.customer.update({
                    where: { id: customer.id },
                    data: {
                        ref_code: `${customer.id}${customer.username.substring(0, 3)}`,
                    },
                });
                res.status(201).send({
                    message: "Customer created successfully. Please check your email for verification.",
                    customer,
                    updateCustomer,
                });
            }
            catch (err) {
                console.error("Error during registration:", err);
                res
                    .status(500)
                    .send({ message: "An error occurred during registration", error: err });
            }
        });
    }
    registerPromotor(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requiredFields = [
                    "username",
                    "email",
                    "password",
                    "confirmPassword",
                    "name",
                ];
                // Validate required fields
                for (const field of requiredFields) {
                    if (!req.body[field]) {
                        res.status(400).send({ message: `${field} is required` });
                        return; // Stop further execution
                    }
                }
                // Check if passwords match
                if (req.body.password !== req.body.confirmPassword) {
                    res.status(400).send({ message: "Passwords do not match!" });
                    return; // Stop further execution
                }
                // Check if username or email already exists
                const existPromotor = yield (0, register_service_1.findPromotor)(req.body.username, req.body.email);
                if (existPromotor) {
                    res.status(400).send({ message: "Username or Email already exists!" });
                    return; // Stop further execution
                }
                // Hash the password
                const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
                // Create the promotor
                const promotor = yield prisma_1.default.promotor.create({
                    data: {
                        username: req.body.username,
                        name: req.body.name,
                        email: req.body.email,
                        password: hashedPassword,
                        updated_at: null,
                    },
                });
                // Generate verification token
                const payload = { id: promotor.id, role: "promotor" };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "10m" });
                const link = `${process.env.BASE_URL_FE}/verify/${token}?role=promotor`;
                // Prepare and send the email
                const templatePath = path_1.default.join(__dirname, "../templates", "verify.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ username: req.body.username, link });
                yield mailer_1.transporter.sendMail({
                    from: "shnazzhr@gmail.com",
                    to: req.body.email,
                    subject: "Registration Successful",
                    html,
                });
                res.status(201).send({
                    message: "Promotor created successfully. Please check your email for verification.",
                    promotor,
                });
            }
            catch (err) {
                console.error("Error creating promotor:", err);
                res
                    .status(500)
                    .send({ message: "An error occurred during registration", error: err });
            }
        });
    }
    verifyPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const verifiedPromotor = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                yield prisma_1.default.promotor.update({
                    data: { is_verify: true },
                    where: { id: verifiedPromotor.id },
                });
                res.status(200).send({ message: "Promotor verified successfully" });
            }
            catch (err) {
                console.error("Error verifying promotor:", err);
                res.status(400).send({
                    message: "Invalid token or verification failed",
                    error: err.message,
                });
            }
        });
    }
    verifyCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const verifiedCustomer = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                yield prisma_1.default.customer.update({
                    data: { isVerify: true },
                    where: { id: verifiedCustomer.id },
                });
                res.status(200).send({ message: "Customer verified successfully" });
            }
            catch (err) {
                console.error("Error verifying customer:", err);
                res.status(400).send({
                    message: "Invalid token or verification failed",
                    error: err.message,
                });
            }
        });
    }
    //reset password
    resetPasswordUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, newPassword, confirmPassword } = req.body;
                // Check if all required fields are provided
                if (!username || !newPassword || !confirmPassword) {
                    res.status(400).send({ message: "All fields are required!" });
                    return;
                }
                // Check if the new passwords match
                if (newPassword !== confirmPassword) {
                    res.status(400).send({ message: "Passwords do not match!" });
                    return;
                }
                // Find the user by username
                const user = yield prisma_1.default.customer.findUnique({
                    where: { username },
                });
                if (!user) {
                    res.status(404).send({ message: "User not found!" });
                    return;
                }
                // Hash the new password
                const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
                // Update the user's password
                yield prisma_1.default.customer.update({
                    where: { username },
                    data: { password: hashedPassword },
                });
                res
                    .status(200)
                    .send({ message: "Password has been reset successfully!" });
            }
            catch (err) {
                console.error("Error resetting password:", err);
                res.status(500).send({ message: "An internal server error occurred!" });
            }
        });
    }
    resetPasswordPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, newPassword, confirmPassword } = req.body;
                // Check if all required fields are provided
                if (!username || !newPassword || !confirmPassword) {
                    res.status(400).send({ message: "All fields are required!" });
                    return;
                }
                // Check if the new passwords match
                if (newPassword !== confirmPassword) {
                    res.status(400).send({ message: "Passwords do not match!" });
                    return;
                }
                // Find the promotor by username
                const promotor = yield prisma_1.default.promotor.findUnique({
                    where: { username },
                });
                if (!promotor) {
                    res.status(404).send({ message: "promotor not found!" });
                    return;
                }
                // Hash the new password
                const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
                // Update the promotor's password
                yield prisma_1.default.promotor.update({
                    where: { username },
                    data: { password: hashedPassword },
                });
                res
                    .status(200)
                    .send({ message: "Password has been reset successfully!" });
            }
            catch (err) {
                console.error("Error resetting password:", err);
                res.status(500).send({ message: "An internal server error occurred!" });
            }
        });
    }
}
exports.AuthController = AuthController;
