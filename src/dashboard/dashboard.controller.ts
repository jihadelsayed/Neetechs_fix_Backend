import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('overview')
  async getOverview() {
    return this.dashboardService.getOverview();
  }

  @Get('repair-statistics')
  async getRepairStatistics() {
    return this.dashboardService.getRepairStatistics();
  }
}
