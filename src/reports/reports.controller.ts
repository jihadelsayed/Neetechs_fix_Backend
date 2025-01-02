import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  async findAllReports() {
    return this.reportsService.findAllReports();
  }

  @Get(':id')
  async findReport(@Param('id') id: number) {
    return this.reportsService.findReport(id);
  }

  @Post()
  async createReport(@Body() createReportDto: any) {
    return this.reportsService.createReport(createReportDto);
  }

  @Patch(':id')
  async updateReport(@Param('id') id: number, @Body() updateReportDto: any) {
    return this.reportsService.updateReport(id, updateReportDto);
  }
}
