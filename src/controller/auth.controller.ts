import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";
import bcrypt from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import {
  findCust,
  findPromotor,
  findReferralCode,
} from "../services/register.service";
import path from "path";
import Handlebars from "handlebars";
import { transporter } from "../services/mailer";
import fs from "fs";

const addPoint = async (referralUserId: number) => {
  try {
    const points = 10000; // Points to be added
    const expirationDate = new Date(
      new Date().setMonth(new Date().getMonth() + 3)
    ); // 3 months from now


    await prisma.userPoint.create({
      data: {
        customer_id: referralUserId,
        point: points,
        expired_at: expirationDate,
      },
    });

    console.log("Points successfully added to referral user.");
  } catch (err) {
    console.error("Error adding points:", err);
    throw err; // Let the caller handle the error
  }
};

const addCoupon = async (user_id: number) => {
  try {
    const percentage = 10; // Percentage for the coupon
    const expirationDate = new Date(
      new Date().setMonth(new Date().getMonth() + 3)
    ); // 3 months from now

    await prisma.userCoupon.create({
      data: {
        customer_id: user_id,
        precentage: percentage,
        expired_at: expirationDate,
        updated_at: null,
      },
    });

    console.log("Coupon successfully added to new user.");
  } catch (err) {
    console.error("Error adding coupon:", err);
    throw err; // Let the caller handle the error
  }
};

export class AuthController {
  async Login(req: Request, res: Response): Promise<void> {
    try {
      const { data, password } = req.body;
      if (data.role === "customer") {
        const customer = await prisma.customer.findUnique({
          where: { username: data.username },
        });

        if (!customer) throw { message: "Customer account not found!" };
        const isValidPass = await bcrypt.compare(password, customer.password);
        if (!isValidPass) throw { message: "Incorrect Password!" };
        if (!customer.isVerify)
          throw {
            message:
              "Your account is not verified. Please verify your account before logging in.",
          };

        const payload = { id: customer.id, username: customer.username };
        const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

        res
          .status(200)
          .cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            path: "/",
            secure: process.env.NODE_ENV === "production",
          })
          .send({ message: "Login Successfully", customer });
      } else if (data.role === "promotor") {
        const promotor = await prisma.promotor.findUnique({
          where: { username: data.username },
        });

        if (!promotor) throw { message: "Promotor account not found!" };

        const isValidPass = await bcrypt.compare(password, promotor.password);
        if (!isValidPass) throw { message: "Incorrect Password!" };
        if (!promotor.is_verify)
          throw {
            message:
              "Your account is not verified. Please verify your account before logging in.",
          };

        const payload = { id: promotor.id, username: promotor.username };
        const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

        res
          .status(200)
          .cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            path: "/",
            secure: process.env.NODE_ENV === "production",
          })
          .send({ message: "Login Successfully", promotor });
      }
    } catch (err) {
      console.error("Error during login:", err);
      res.status(400).send(err);
    }
  }

  async registeration(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const {
        username,
        email,
        password,
        confirmPassword,
        name,
        referred_code,
      } = req.body;

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
      const existingCustomer = await findCust(username, email);
      if (existingCustomer) {
        res.status(400).send({ message: "Username or Email already exists" });
        return;
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the new customer
      const customer = await prisma.customer.create({
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
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "10m" });
      const link = `http://localhost:3000/verify/${token}?role=customer`;

      // Prepare and send the email
      const templatePath = path.join(__dirname, "../templates", "verify.hbs");
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = Handlebars.compile(templateSource);
      const html = compiledTemplate({ username: req.body.username, link });

      await transporter.sendMail({
        from: "shnazzhr@gmail.com",
        to: req.body.email,
        subject: "Registration Successful",
        html,
      });

      // Generate the ref_code and update customer
      const updateCustomer = await prisma.customer.update({
        where: { id: customer.id },
        data: {
          ref_code: `${customer.id}${customer.username.substring(0, 3)}`,
        },
      });

      // If referred_code is provided, add points to the referrer
      if (referred_code) {
        const referralUser = await findReferralCode(referred_code);
        if (referralUser) {
          await addPoint(referralUser.id);
          await addCoupon(customer.id);
        } else {
          console.error("Invalid referral code provided.");
        }
      }

      res.status(201).send({
        message:
          "Customer created successfully. Please check your email for verification.",
        customer,
        updateCustomer,
      });
    } catch (err) {
      console.error("Error during registration:", err);
      res
        .status(500)
        .send({ message: "An error occurred during registration", error: err });
    }
  }
  async registerPromotor(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
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
      const existPromotor = await findPromotor(
        req.body.username,
        req.body.email
      );
      if (existPromotor) {
        res.status(400).send({ message: "Username or Email already exists!" });
        return; // Stop further execution
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Create the promotor
      const promotor = await prisma.promotor.create({
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
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "10m" });
      const link = `http://localhost:3000/verify/${token}?role=promotor`;

      // Prepare and send the email
      const templatePath = path.join(__dirname, "../templates", "verify.hbs");
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = Handlebars.compile(templateSource);
      const html = compiledTemplate({ username: req.body.username, link });

      await transporter.sendMail({
        from: "shnazzhr@gmail.com",
        to: req.body.email,
        subject: "Registration Successful",
        html,
      });

      res.status(201).send({
        message:
          "Promotor created successfully. Please check your email for verification.",
        promotor,
      });
    } catch (err: any) {
      console.error("Error creating promotor:", err);
      res
        .status(500)
        .send({ message: "An error occurred during registration", error: err });
    }
  }

  async verifyPromotor(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedPromotor = verify(token, process.env.JWT_KEY!) as {
        id: number;
        role: string;
      };
      await prisma.promotor.update({
        data: { is_verify: true },
        where: { id: verifiedPromotor.id },
      });
      res.status(200).send({ message: "Promotor verified successfully" });
    } catch (err: any) {
      console.error("Error verifying promotor:", err);
      res.status(400).send({
        message: "Invalid token or verification failed",
        error: err.message,
      });
    }
  }
  async verifyCustomer(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedCustomer = verify(token, process.env.JWT_KEY!) as {
        id: number;
        role: string;
      };
      await prisma.customer.update({
        data: { isVerify: true },
        where: { id: verifiedCustomer.id },
      });
      res.status(200).send({ message: "Customer verified successfully" });
    } catch (err: any) {
      console.error("Error verifying customer:", err);
      res.status(400).send({
        message: "Invalid token or verification failed",
        error: err.message,
      });
    }
  }

  //cobain forgot password nanti dulu belum bisa 
  // async forgotPassword(req: Request, res: Response, next: NextFunction) {
  // const user = await prisma.customer.findFirst({
  //   where: {
  //     email: req.body.email,
  //   },
  // })
  // }
  // async resetPassword(req: Request, res: Response, next: NextFunction) {

  // }
}
