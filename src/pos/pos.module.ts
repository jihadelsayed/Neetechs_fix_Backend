import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosController } from './pos.controller';
import { PosService } from './pos.service';
import { Payment } from './entities/payment.entity';
import { Receipt } from './entities/receipt.entity';
import { Sale } from './entities/sale.entity';
import { SaleRepository } from './repositories/sale.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, Receipt, Sale])],
  controllers: [PosController],
  providers: [PosService, SaleRepository, Payment, Receipt],
  exports: [SaleRepository, Payment, Receipt],
})
export class PosModule {}
