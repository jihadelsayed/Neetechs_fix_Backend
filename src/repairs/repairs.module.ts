import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepairsService } from './repairs.service';
import { RepairsController } from './repairs.controller';
import { Ticket } from './entities/ticket.entity';
import { Technician } from './entities/technician.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Technician])],
  controllers: [RepairsController],
  providers: [RepairsService],
})
export class RepairsModule {}
