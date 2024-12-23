import { Request, Response, Router } from "express";
// import { checkAdmin, verifyToken } from "../middlewares/verify";
// import { uploader } from "../services/uploader";
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
import expressAsyncHandler from "express-async-handler";

export class ListRouter {
  private customerController: CustomerController;
  private promotorController: PromotorController;
  private authController: AuthController;
  private userPointController: UserPointController;
  private userCouponController: UserCouponController;
  private eventController: EventController;
  private ticketController: TicketController;
  private orderController: OrderController;
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
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //get list customer & promotor
    this.router.get("/customers", verifyToken, this.customerController.list);
    this.router.get("/promotors", verifyToken, this.promotorController.list);
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
    this.router.get(
      "/events/:slug",
      verifyToken,
      this.eventController.getEventSlug.bind(this.eventController)
    );
    this.router.get(
      "/events/category/:category",
      this.eventController.getEventCategory
    );

    // Order
    this.router.post(
      "/order",
      verifyToken,
      expressAsyncHandler(
        this.orderController.createOrder.bind(this.orderController)
      )
    );

    this.router.post(
      "/create-order",
      verifyToken,
      expressAsyncHandler(this.orderController.createOrder)
    );
    this.router.post("/order/payment", this.orderController.getSnapToken);
    this.router.get("/order/:id", this.orderController.getOrderId);

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
    //cobain forgot
    // this.router.post("/forgotPassword", this.authController.forgotPassword);
    // this.router.post("/resetPassword", this.authController.resetPassword);

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

    //usercoupon
    this.router.post(
      "/usercoupons/redeem",
      this.userCouponController.redeemCoupon
    );
    this.router.get("/usercoupons", this.userCouponController.list);
  }

  getRouter(): Router {
    return this.router;
  }
}
