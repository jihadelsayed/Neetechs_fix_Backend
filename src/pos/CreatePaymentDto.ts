export class CreatePaymentDto {
    saleId: number;
    amount: number;
    method: string;
    transactionId?: string;  // Optional
  }
  