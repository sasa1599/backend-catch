import "express";

export type UserPayload = {
  id: number;
};

export type PromotorPayload = {
  id: number;
};
export type EventPayload = {
  id: number;
};

declare global {
  namespace Express {
    export interface Request {
      user?: UserPayload;
      promtor?: PromotorPayload;
      event?: EventPayload;
    }
  }
}
