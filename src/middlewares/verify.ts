import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // const token = req.header("Authorization")?.replace("Bearer ", ""); //gadipake soalnya udh pake cookie
      const token = req.cookies?.token;
      console.log(req.cookies, "cookies")
      console.log(token)
      if (!token) throw new Error("Unauthorized!");
  
      const verifiedUser = verify(token, process.env.JWT_KEY!) as JwtPayload; //added JWT payload
      console.log(verifiedUser, "Verified User");
  
      req.user = verifiedUser as {id: number};
      req.promtor = verifiedUser as {id: number}
      console.log(req.user, "verified user");
        
      next();
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: "Oops! Your account isn’t verified yet. Please verify your token by clicking the link we sent to your email."});
    }
  };