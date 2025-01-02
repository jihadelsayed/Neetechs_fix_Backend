import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';
import { CreateReportDto } from './CreateReportDto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) {}

  async findAllReports(): Promise<Report[]> {
    return this.reportRepository.find();
  }

  async findReport(id: number): Promise<Report> {
    const report = await this.reportRepository.findOne({ where: { id } });
    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    return report;
  }

  async createReport(createReportDto: CreateReportDto): Promise<Report> {
    const report = this.reportRepository.create(createReportDto);
    return this.reportRepository.save(report);
  }
  

  async updateReport(id: number, updateReportDto: any): Promise<Report> {
    await this.findReport(id); // Ensure report exists
    await this.reportRepository.update(id, updateReportDto);
    return this.findReport(id);
  }
}
