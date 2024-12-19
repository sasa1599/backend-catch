import { Request, Response } from "express";
import prisma from "../prisma";
import bcrypt from "bcrypt";
import { findPromotor } from "../services/register.service";
import { cloudinaryUpload } from "../services/cloudinary";
import { createSlug } from "../helpers/slug";
export class PromotorController {
  // Register Promotor
  async registerPromotor(req: Request, res: Response) {
    try {
      const promotors = [
        "username",
        "email",
        "password",
        "confirmPassword",
        "name",
      ];
      promotors.map((promotor) => {
        if (!req.body[promotor]) {
          return res.status(400).send({ message: `${promotor} is required` });
        }
        // check password
        if (req.body.password != req.body.confirmPassword)
          throw { message: "password not match !" };
      });
      // validasi exist
      const existPromotor = await findPromotor(
        req.body.username,
        req.body.email
      );
      if (existPromotor)
        throw { message: "Username or Email already exists !" };

      // hash password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // create Promotor
      const promotor = await prisma.promotor.create({
        data: {
          username: req.body.username,
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          updated_at: null,
        },
      });
      res.status(200).send({ message: "Promotor created", promotor });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
  // update promotor
  async update(req: Request, res: Response) {
    try {
      const promotors = ["username", "email"];
      promotors.map((promotor) => {
        if (!req.body[promotor]) {
          return res.status(400).send({ message: `${promotor} is required` });
        }
      });
      const promotor = await prisma.promotor.update({
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
      res.status(200).send({ message: "promotor updated", promotor });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
  // list promotor
  async list(req: Request, res: Response) {
    try {
      const { email, id, username, isVerify, limit, page }: any = req.query;
      const filters: any = {};
      const take = limit ? +limit : 10;
      const skip = page ? +page * take : 0;
      if (email) filters.email = email;
      if (id) filters.id = +id;
      if (username) filters.username = username;
      if (isVerify) filters.isVerify = isVerify === "true";
      const data = await prisma.promotor.findMany({
        take,
        skip,
        where: filters,
      });
      const total = await prisma.promotor.count({
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
      console.log(err);
      res.status(500).send(err);
    }
  }
  async getPromotorId(req: Request, res: Response) {
    try {
      const user = await prisma.promotor.findUnique({
        where: { id: req.user?.id },
      });
      res.status(200).send({ user });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  // delete promotor
  async delete(req: Request, res: Response) {
    try {
      const promotor = await prisma.promotor.delete({
        where: {
          id: +req.params.id,
        },
      });
      res.status(200).send({ message: "Promotor deleted", promotor });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
  async proAvatarCloud(req: Request, res: Response) {
    try {
      if (!req.file) throw { message: "Avatar not found !" };
      const { secure_url } = await cloudinaryUpload(req.file, "avatarLogin");
      await prisma.promotor.update({
        where: { id: req.user?.id },
        data: { avatar: secure_url },
      });
      console.log(req.file);
      res.status(200).send({ message: "Avatar edited !" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async createEvent(req: Request, res: Response) {
    try {
      if (!req.file) throw { message: "thumbnail empty" };
      const { secure_url } = await cloudinaryUpload(req.file, "thumbnail");
      const { title, description, category, location, venue, datetime } =
        req.body;

      const slug = createSlug(title);

      const { id } = await prisma.event.create({
        data: {
          title,
          description,
          category,
          location,
          venue,
          slug: slug,
          datetime,
          thumbnail: secure_url,
          promotor_id: req.promtor?.id!,
        },
      });

      res.status(200).send({ message: "event created", event_id: id });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
