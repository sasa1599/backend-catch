import "express";

export type UserPayload = {
  id: number;
};

declare global {
  namespace Express {
    export interface Request {
      user?: UserPayload;
    }
  }
}
