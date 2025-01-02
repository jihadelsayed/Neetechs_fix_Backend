import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { Overview } from './entities/overview.entity';
import { RepairStatistics } from './entities/repair-statistics.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Overview, RepairStatistics])],
  controllers: [DashboardController],
  providers: [DashboardService],
  exports: [DashboardService],
})
export class DashboardModule {}
