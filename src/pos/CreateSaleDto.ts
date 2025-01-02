export class CreateSaleDto {
    customerId: number;
    totalAmount: number;
    status?: string;  // Optional, default: 'pending'
  }
  