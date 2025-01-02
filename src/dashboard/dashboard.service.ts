import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Overview } from './entities/overview.entity';
import { RepairStatistics } from './entities/repair-statistics.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Overview)
    private readonly overviewRepository: Repository<Overview>,
    @InjectRepository(RepairStatistics)
    private readonly repairStatisticsRepository: Repository<RepairStatistics>,
  ) {}

  /**
   * Get the latest overview data.
   */
  async getOverview(): Promise<Overview> {
    return this.overviewRepository.findOne({ order: { generatedAt: 'DESC' } });
  }

  /**
   * Get the latest repair statistics data.
   */
  async getRepairStatistics(): Promise<RepairStatistics> {
    return this.repairStatisticsRepository.findOne({ order: { calculatedAt: 'DESC' } });
  }

  /**
   * Save new overview data.
   */
  async saveOverview(data: Partial<Overview>): Promise<Overview> {
    const overview = this.overviewRepository.create(data);
    return this.overviewRepository.save(overview);
  }

  /**
   * Save new repair statistics data.
   */
  async saveRepairStatistics(data: Partial<RepairStatistics>): Promise<RepairStatistics> {
    const repairStats = this.repairStatisticsRepository.create(data);
    return this.repairStatisticsRepository.save(repairStats);
  }
}
