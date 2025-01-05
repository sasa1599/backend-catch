import { ITicketCartItem } from "./ticketCart"

export interface requestBody {
  coupon: boolean;
  total_price: number;
  final_price: number;
  ticketCart: ITicketCartItem[];
}
