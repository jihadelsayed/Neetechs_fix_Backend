import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { PosService } from './pos.service';

@Controller('pos')
export class PosController {
  constructor(private readonly posService: PosService) {}

  @Get('sales')
  async findAllSales() {
    return this.posService.findAllSales();
  }

  @Get('sales/:id')
  async findSale(@Param('id') id: number) {
    return this.posService.findSale(id);
  }

  @Post('sales')
  async createSale(@Body() createSaleDto: any) {
    return this.posService.createSale(createSaleDto);
  }

  @Patch('sales/:id')
  async updateSale(@Param('id') id: number, @Body() updateSaleDto: any) {
    return this.posService.updateSale(id, updateSaleDto);
  }

  @Post('payments')
  async createPayment(@Body() createPaymentDto: any) {
    return this.posService.createPayment(createPaymentDto);
  }

  @Post('receipts')
  async createReceipt(@Body() createReceiptDto: any) {
    return this.posService.createReceipt(createReceiptDto);
  }
}
