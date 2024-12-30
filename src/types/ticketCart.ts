export interface ITicketCartItem {
    quantity: number;
    ticket: {
      id: number;
      price: number;
      seats: number;
    };
  }