import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";
import bcrypt from "bcrypt";
import { findCust, findReferralCode } from "../services/register.service";

const addPoint = async (referralUserId: number) => {
  try {
    const existingPoint = await prisma.userPoint.findFirst({
      where: { customer_id: referralUserId },
    });

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
    return;
  } catch (err) {
    console.error("Error adding points:", err);
    throw err; // Let the caller handle the error
  }
};

const addCoupon = async (user_id: number) => {
  try {
    const precentage = 10; // Points to be added
    const expirationDate = new Date(
      new Date().setMonth(new Date().getMonth() + 3)
    ); // 3 months from now

    await prisma.userCoupon.create({
      data: {
        user_id: user_id,
        precentage: precentage,
        expired_at: expirationDate,
        updated_at: null,
      },
    });

    return;
  } catch (err) {
    console.error("Error adding points:", err);
    throw err; // Let the caller handle the error
  }
};
export class CustomerController {
  // register customer
  async registeration(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
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
      const existCustomer = await findCust(req.body.username, req.body.email);
      if (existCustomer)
        throw { message: "Username or Email already exists !" };
      // hash password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      
      // validasi exist referral code
      if (req.body.referred_code) {
        // Fetch referral user
        const referralUser = await findReferralCode(req.body.referred_code);
        if (!referralUser) {
          res.status(400).send({ message: "Referral code not found!" });
          return;
        }
        
        // Add points to the referrer
        await addPoint(referralUser.id); // Pass referralUser ID
      }
      // create customer
      const customer = await prisma.customer.create({
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
        await addCoupon(customer.id);
      }

      // create referral code
      const updateCustomer = await prisma.customer.update({
        where: { id: customer.id },
        data: { ref_code: customer.id + customer.username.substring(0, 3) },
      });

      res.status(201).send({ message: "Customer created", updateCustomer });
    } catch (err) {
      console.error("Error during registration:", err);
      res
        .status(500)
        .send({ message: "An error occurred during registration", error: err });
    }
  }

  // update customer
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const customers = ["username", "email", "name"];
      customers.map((customer) => {
        if (!req.body[customer]) {
          return res.status(400).send({ message: `${customer} is required` });
        }
      });
      const existingCustomer = await prisma.customer.findFirst({
        where: {
          OR: [{ username: req.body.username }, { email: req.body.email }],
          NOT: { id: +req.params.id },
        },
      });

      if (existingCustomer) {
        res.status(400).send({ message: "Username or Email already exists!" });
        return;
      }
      const customer = await prisma.customer.update({
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
    } catch (err) {
      console.error("Error during customer update:", err);
      res
        .status(500)
        .send({ message: "An error occurred during update", error: err });
    }
  }

  // list customer
  async list(req: Request, res: Response) {
    try {
      const {
        ref_code,
        referred_code,
        email,
        id,
        username,
        isVerify,
        limit,
        page,
      }: any = req.query;
      const filters: any = {};
      const take = limit ? Math.max(1, +limit) : 10;
      const skip = page ? Math.max(0, (+page - 1) * take) : 0;
      if (ref_code) filters.ref_code = ref_code;
      if (referred_code) filters.referred_code = referred_code;
      if (email) filters.email = email;
      if (id) filters.id = +id;
      if (username) filters.username = username;
      if (isVerify) filters.isVerify = isVerify === "true";

      const data = await prisma.customer.findMany({
        take,
        skip,
        where: filters,
      });
      const total = await prisma.customer.count({
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
    } catch (err) {
      console.log("Error during customer list retrieval:", err);
      res.status(500).send({
        message: "An error occurred while listing customers",
        error: err,
      });
    }
  }

  async getUsersId(req: Request, res: Response) {
    try {
      const user = await prisma.customer.findUnique({
        where: { id: req.user?.id },
      });
      res.status(200).send({ user });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  // delete customer
  async delete(req: Request, res: Response) {
    try {
      const customer = await prisma.customer.delete({
        where: {
          id: +req.params.id,
        },
      });
      res.status(200).send({ message: "Customer deleted", customer });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
}
