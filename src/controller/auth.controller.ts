import { Request, Response } from "express";
import prisma from "../../prisma";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthController {
  async Login(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      if (data.role == "customer") {
        const customer = await prisma.customer.findUnique({
          where: {
            username: data.username,
          },
        });

        if (!customer) throw { message: "Customer account not found !" };
        // if (!customer.isVerify) throw { message: "Account has not been verified !" };

        const isValidPass = await bcrypt.compare(password, customer.password);
        if (!isValidPass) {
          //   await prisma.customer.update({
          //     data: { loginAttempt: { increment: 1 } },
          //     where: { id: customer.id },
          //   });
          //   if (customer.loginAttempt == 2) {
          //     await prisma.customer.update({
          //       data: { isSuspend: true },
          //       where: { id: customer.id },
          //     });
          //   }
          throw { message: "Incorrect Password !" };
        }

        const payload = { id: customer.id, username: customer.username };
        const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

        res
          .status(200)
            .cookie("token", token, {
              //nambahin cookie
              httpOnly: true, //cookie hanya bisa diakses oleh server, dan tidak bisa diakses oleh client
              maxAge: 24 * 60 * 60 * 1000, //umur cookie
              path: "/",
              secure: false,
            })
          .send({
            message: "Login Successfully",
            customer,
            // token,
          });
        return;
      }
      if (data.role == "promotor") {
        const promotor = await prisma.promotor.findUnique({
          where: {
            username: data.username,
          },
        });

        if (!promotor) throw { message: "Promotor account not found !" };
        const isValidPass = await bcrypt.compare(password, promotor.password);
        if (!isValidPass) {
          throw { message: "Incorrect Password !" };
        }
        res.status(200).send({
          message: "Login Successfully",
          promotor,
        });
        return;
      }
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
