import { ITicketCartItem } from "./ticketCart"


export interface requestBody{
    promotor_id: any
    total_price: number
    final_price: number
    ticketCart: ITicketCartItem[]
  }
