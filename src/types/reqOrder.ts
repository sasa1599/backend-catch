import { ITicketCartItem } from "./ticketCart";

export interface requestBody {
  point: number;
  coupon: boolean;
  total_price: number;
  final_price: number;
  ticketCart: ITicketCartItem[];
}