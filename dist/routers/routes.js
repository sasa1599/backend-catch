"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRouter = void 0;
const express_1 = require("express");
const customer_controller_1 = require("../controller/customer.controller");
const auth_controller_1 = require("../controller/auth.controller");
const promotor_controller_1 = require("../controller/promotor.controller");
const userpoint_controller_1 = require("../controller/userpoint.controller");
const usercoupon_controller_1 = require("../controller/usercoupon.controller");
const verify_1 = require("../middlewares/verify");
const uploader_1 = require("../services/uploader");
const event_controller_1 = require("../controller/event.controller");
const ticket_controller_1 = require("../controller/ticket.controller");
const order_controller_1 = require("../controller/order.controller");
const review_controller_1 = require("../controller/review.controller");
const admin_controller_1 = require("../controller/admin.controller");
class ListRouter {
    constructor() {
        this.customerController = new customer_controller_1.CustomerController();
        this.promotorController = new promotor_controller_1.PromotorController();
        this.authController = new auth_controller_1.AuthController();
        this.userPointController = new userpoint_controller_1.UserPointController();
        this.userCouponController = new usercoupon_controller_1.UserCouponController();
        this.eventController = new event_controller_1.EventController();
        this.ticketController = new ticket_controller_1.TicketController();
        this.orderController = new order_controller_1.OrderController();
        this.reviewController = new review_controller_1.ReviewController();
        this.adminController = new admin_controller_1.AdminController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        //get list customer & promotor
        this.router.get("/customers", this.customerController.list);
        this.router.get("/promotors", this.promotorController.list);
        //register customer & promotor
        this.router.post("/customers", this.customerController.registeration);
        this.router.post("/promotors", this.promotorController.registerPromotor);
        //promotor create event
        this.router.post("/promotor/create-event/", verify_1.verifyToken, (0, uploader_1.uploader)("memoryStorage", "thumbnail-").single("thumbnail"), this.promotorController.createEvent);
        // promotor create ticket
        this.router.post("/promotor/create-event/create-ticket/:id", verify_1.verifyToken, this.ticketController.createTicket);
        //event router
        this.router.get("/events", this.eventController.getEvent);
        this.router.get("/events/detail/:id", this.eventController.getEventDetail);
        this.router.get("/events/promotor", verify_1.verifyToken, this.eventController.getEventsByPromotor);
        this.router.get("/events/:slug", this.eventController.getEventSlug);
        this.router.get("/events/category/:category", this.eventController.getEventCategory);
        //Ticket
        this.router.get("/tickets/:event_id", this.ticketController.getTickets);
        // Order
        this.router.post("/order", verify_1.verifyToken, this.orderController.createOrder);
        this.router.post("/order/payment", verify_1.verifyToken, this.orderController.getSnapToken);
        this.router.get("/order/order", verify_1.verifyToken, this.orderController.getTicketOrder);
        this.router.post("/order/midtrans-webhook", this.orderController.updateOrderHook);
        this.router.get("/order/:id", verify_1.verifyToken, this.orderController.getOrderId);
        this.router.post("/create-order", verify_1.verifyToken, this.orderController.createOrder);
        // update order_status
        this.router.post("/midtrans-webhook", this.orderController.updateOrderHook);
        this.router.get("/order/user/detail", verify_1.verifyToken, this.orderController.getOrderCustomerId);
        this.router.get("/order/:id", this.orderController.getOrderId);
        // Review
        this.router.get("/review/:id", this.reviewController.getReviews);
        this.router.post("/review/:id", verify_1.verifyToken, this.reviewController.createReview);
        this.router.get("/review/avg/:id", this.reviewController.getAvg);
        // profile
        this.router.get("/customers/profile", verify_1.verifyToken, this.customerController.getUsersId);
        this.router.get("/promotors/profile", verify_1.verifyToken, this.promotorController.getPromotorId);
        this.router.patch("/customers/:id", this.customerController.update.bind(this.customerController));
        this.router.patch("/promotors/:id", this.promotorController.update);
        this.router.delete("/promotors/:id", this.promotorController.delete);
        this.router.delete("/customers/:id", this.customerController.delete);
        //Auth Login & Register & Verify
        this.router.post("/login", this.authController.Login);
        this.router.post("/register", this.authController.registeration);
        this.router.post("/register/promotor", this.authController.registerPromotor);
        this.router.patch("/verify/customers/:token", this.authController.verifyCustomer);
        this.router.patch("/verify/promotors/:token", this.authController.verifyPromotor);
        //cobain reset & forgot password ==================================================================================================
        this.router.post("/resetpassword", this.authController.resetPasswordUser);
        this.router.post("/resetpassword/promotor", this.authController.resetPasswordPromotor);
        // ================================================================================================================
        // ==========================================================ADMIN COBAIN==================================================
        // Dashboard statistics routes
        this.router.get("/admin/orders/promotor/:id/count", this.adminController.getOrderCountByPromotor);
        this.router.get("/admin/orders/:id", verify_1.verifyToken, this.adminController.getOrderPromotor);
        this.router.get("/admin/revenue/:id", verify_1.verifyToken, this.adminController.getTotalRevenueByPromotor);
        // ============================================================================================================================
        //cobain cloudinary
        this.router.patch("/avatarcloud", verify_1.verifyToken, (0, uploader_1.uploader)("memoryStorage", "avatarLogin-").single("file"), this.customerController.editAvatarCloud);
        //cloudinary promotor
        this.router.patch("/proavatarcloud", verify_1.verifyToken, (0, uploader_1.uploader)("memoryStorage", "avatarLogin-").single("file"), this.promotorController.proAvatarCloud);
        //userpoint
        this.router.post("/userpoints/reedem", this.userPointController.redeemPoint);
        this.router.get("/userpoints", this.userPointController.list);
        this.router.get("/user/point", verify_1.verifyToken, this.userPointController.getPointsUser);
        //usercoupon
        this.router.post("/usercoupons/redeem", this.userCouponController.redeemCoupon);
        this.router.get("/usercoupons", this.userCouponController.list);
        this.router.get("/user/coupon", verify_1.verifyToken, this.userCouponController.getUserCoupon);
    }
    getRouter() {
        return this.router;
    }
}
exports.ListRouter = ListRouter;
