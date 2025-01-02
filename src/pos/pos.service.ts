import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';
import { Payment } from './entities/payment.entity';
import { Receipt } from './entities/receipt.entity';
import { CreatePaymentDto } from './CreatePaymentDto';
import { CreateReceiptDto } from './CreateReceiptDto';
import { CreateSaleDto } from './CreateSaleDto';
import { UpdateSaleDto } from './UpdateSaleDto';

@Injectable()
export class PosService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    @InjectRepository(Receipt)
    private readonly receiptRepository: Repository<Receipt>,
  ) {}

  async findAllSales(): Promise<Sale[]> {
    return this.saleRepository.find({ relations: ['payments', 'receipts'] });
  }

  async findSale(id: number): Promise<Sale> {
    const sale = await this.saleRepository.findOne({ where: { id }, relations: ['payments', 'receipts'] });
    if (!sale) {
      throw new NotFoundException(`Sale with ID ${id} not found`);
    }
    return sale;
  }

  async createSale(createSaleDto: CreateSaleDto): Promise<Sale> {
    const sale = this.saleRepository.create({
      customerId: createSaleDto.customerId,
      totalAmount: createSaleDto.totalAmount,
      status: createSaleDto.status || 'pending', // Default status is 'pending'
    });

    return await this.saleRepository.save(sale);
  }

  async updateSale(id: number, updateSaleDto: UpdateSaleDto): Promise<Sale> {
    await this.findSale(id); // Ensure sale exists
    await this.saleRepository.update(id, updateSaleDto);
    return this.findSale(id);
  }

  async createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const payment = this.paymentRepository.create({
      sale: { id: createPaymentDto.saleId },
      amount: createPaymentDto.amount,
      method: createPaymentDto.method,
      transactionId: createPaymentDto.transactionId,
    });

    return await this.paymentRepository.save(payment);
  }

  async createReceipt(createReceiptDto: CreateReceiptDto): Promise<Receipt> {
    const receipt = this.receiptRepository.create({
      sale: { id: createReceiptDto.saleId },
      receiptNumber: createReceiptDto.receiptNumber,
      details: createReceiptDto.details,
    });

    return await this.receiptRepository.save(receipt);
  }
}
