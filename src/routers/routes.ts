import { Router } from "express";
// import { checkAdmin, verifyToken } from "../middlewares/verify";
// import { uploader } from "../services/uploader";
import { CustomerController } from "../controller/customer.controller";
import { AuthController } from "../controller/auth.controller";
import { PromotorController } from "../controller/promotor.controller";
import { UserPointController } from "../controller/userpoint.controller";
import { UserCouponController } from "../controller/usercoupon.controller";
import { verifyToken } from "../middlewares/verify";

export class ListRouter {
  private customerController: CustomerController;
  private promotorController: PromotorController;
  private authController: AuthController;
  private userPointController: UserPointController;
  private userCouponController: UserCouponController;
  private router: Router;

  constructor() {
    this.customerController = new CustomerController();
    this.promotorController = new PromotorController();
    this.authController = new AuthController();
    this.userPointController = new UserPointController();
    this.userCouponController = new UserCouponController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/customers", verifyToken, this.customerController.list);
    this.router.get("/promotors", verifyToken, this.promotorController.list);

    this.router.post("/customers", this.customerController.registeration);
    this.router.post("/promotors", this.promotorController.registerPromotor);

    // this.router.patch(
    //   "/avatar",
    //   verifyToken,
    //   uploader("diskStorage", "avatar-", "/avatar").single("file"),
    //   this.customerController.editAvatar
    // );

    // this.router.patch(
    //   "/avatar-cloud",
    //   verifyToken,
    //   uploader("memoryStorage", "avatar-").single("file"),
    //   this.customerController.editAvatarCloud
    // );
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

    //Auth
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

    // this.router.get("/session", this.authController.getSession)

    //userpoint
    this.router.post(
      "/userpoints/transaction",
      this.userPointController.createTransaction
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
