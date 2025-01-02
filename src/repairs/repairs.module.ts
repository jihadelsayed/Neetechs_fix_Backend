import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepairsController } from './repairs.controller';
import { RepairsService } from './repairs.service';
import { Ticket } from './entities/ticket.entity';
import { Technician } from './entities/technician.entity';
import { PartsAndLabor } from './entities/parts-and-labor.entity';
import { Warranty } from './entities/warranty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Technician, PartsAndLabor, Warranty])],
  controllers: [RepairsController],
  providers: [RepairsService],
})
export class RepairsModule {}
