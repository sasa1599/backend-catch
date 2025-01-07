import { Request, Response, Router } from "express";
import { CustomerController } from "../controller/customer.controller";
import { AuthController } from "../controller/auth.controller";
import { PromotorController } from "../controller/promotor.controller";
import { UserPointController } from "../controller/userpoint.controller";
import { UserCouponController } from "../controller/usercoupon.controller";
import { verifyToken } from "../middlewares/verify";
import { uploader } from "../services/uploader";
import { EventController } from "../controller/event.controller";
import { TicketController } from "../controller/ticket.controller";
import { OrderController } from "../controller/order.controller";
import { ReviewController } from "../controller/review.controller";
import { AdminController } from "../controller/admin.controller";

export class ListRouter {
  private customerController: CustomerController;
  private promotorController: PromotorController;
  private authController: AuthController;
  private userPointController: UserPointController;
  private userCouponController: UserCouponController;
  private eventController: EventController;
  private ticketController: TicketController;
  private orderController: OrderController;
  private reviewController: ReviewController;

  private adminController: AdminController;
  private router: Router;

  constructor() {
    this.customerController = new CustomerController();
    this.promotorController = new PromotorController();
    this.authController = new AuthController();
    this.userPointController = new UserPointController();
    this.userCouponController = new UserCouponController();
    this.eventController = new EventController();
    this.ticketController = new TicketController();
    this.orderController = new OrderController();
    this.reviewController = new ReviewController();
    this.adminController = new AdminController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //get list customer & promotor
    this.router.get("/customers", this.customerController.list);
    this.router.get("/promotors", this.promotorController.list);
    //register customer & promotor
    this.router.post("/customers", this.customerController.registeration);
    this.router.post("/promotors", this.promotorController.registerPromotor);

    //promotor create event
    this.router.post(
      "/promotor/create-event/",
      verifyToken,
      uploader("memoryStorage", "thumbnail-").single("thumbnail"),
      this.promotorController.createEvent
    );
    // promotor create ticket
    this.router.post(
      "/promotor/create-event/create-ticket/:id",
      verifyToken,
      this.ticketController.createTicket
    );

    //event router
    this.router.get("/events", this.eventController.getEvent);
    this.router.get("/events/detail/:id", this.eventController.getEventDetail);
    this.router.get(
      "/events/promotor",
      verifyToken,
      this.eventController.getEventsByPromotor
    );
    this.router.get("/events/:slug", this.eventController.getEventSlug);
    this.router.get(
      "/events/category/:category",
      this.eventController.getEventCategory
    );

    //Ticket
    this.router.get("/tickets/:event_id", this.ticketController.getTickets);

    // Order
    this.router.post("/order", verifyToken, this.orderController.createOrder);
    this.router.post(
      "/order/payment",
      verifyToken,
      this.orderController.getSnapToken
    );
    this.router.get(
      "/order/order",
      verifyToken,
      this.orderController.getTicketOrder
    );
    this.router.post(
      "/order/midtrans-webhook",
      this.orderController.updateOrderHook
    );
    this.router.get("/order/:id", verifyToken, this.orderController.getOrderId);

    this.router.post(
      "/create-order",
      verifyToken,
      this.orderController.createOrder
    );
    // update order_status
    this.router.post("/midtrans-webhook", this.orderController.updateOrderHook);

    this.router.get(
      "/order/user/detail",
      verifyToken,
      this.orderController.getOrderCustomerId
    );

    this.router.get("/order/:id", this.orderController.getOrderId);

    // Review
    this.router.get("/review/:id", this.reviewController.getReviews);
    this.router.post(
      "/review/:id",
      verifyToken,
      this.reviewController.createReview
    );
    this.router.get("/review/avg/:id", this.reviewController.getAvg);

    // profile
    this.router.get(
      "/customers/profile",
      verifyToken,
      this.customerController.getUsersId
    );
    this.router.get(
      "/promotors/profile",
      verifyToken,
      this.promotorController.getPromotorId
    );
    this.router.patch(
      "/customers/:id",
      this.customerController.update.bind(this.customerController)
    );
    this.router.patch("/promotors/:id", this.promotorController.update);

    this.router.delete("/promotors/:id", this.promotorController.delete);
    this.router.delete("/customers/:id", this.customerController.delete);

    //Auth Login & Register & Verify
    this.router.post("/login", this.authController.Login);
    this.router.post("/register", this.authController.registeration);
    this.router.post(
      "/register/promotor",
      this.authController.registerPromotor
    );
    this.router.patch(
      "/verify/customers/:token",
      this.authController.verifyCustomer
    );
    this.router.patch(
      "/verify/promotors/:token",
      this.authController.verifyPromotor
    );

    //cobain reset & forgot password ==================================================================================================
    this.router.post("/resetpassword", this.authController.resetPasswordUser);

    this.router.post(
      "/resetpassword/promotor",
      this.authController.resetPasswordPromotor
    );

    // ================================================================================================================

    // ==========================================================ADMIN COBAIN==================================================
    // Dashboard statistics routes
    this.router.get(
      "/admin/orders/promotor/:id/count",
      this.adminController.getOrderCountByPromotor
    );
    this.router.get(
      "/admin/orders/:id",
      verifyToken,
      this.adminController.getOrderPromotor
    );
    this.router.get(
      "/admin/revenue/:id",
      verifyToken,
      this.adminController.getTotalRevenueByPromotor
    );

    // ============================================================================================================================
    //cobain cloudinary
    this.router.patch(
      "/avatarcloud",
      verifyToken,
      uploader("memoryStorage", "avatarLogin-").single("file"),
      this.customerController.editAvatarCloud
    );

    //cloudinary promotor
    this.router.patch(
      "/proavatarcloud",
      verifyToken,
      uploader("memoryStorage", "avatarLogin-").single("file"),
      this.promotorController.proAvatarCloud
    );

    //userpoint
    this.router.post(
      "/userpoints/reedem",
      this.userPointController.redeemPoint
    );
    this.router.get("/userpoints", this.userPointController.list);
    this.router.get(
      "/user/point",
      verifyToken,
      this.userPointController.getPointsUser
    );

    //usercoupon
    this.router.post(
      "/usercoupons/redeem",
      this.userCouponController.redeemCoupon
    );
    this.router.get("/usercoupons", this.userCouponController.list);
    this.router.get(
      "/user/coupon",
      verifyToken,
      this.userCouponController.getUserCoupon
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
