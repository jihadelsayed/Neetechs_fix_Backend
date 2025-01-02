import { Controller, Get, Query } from '@nestjs/common';
import { CommonService } from './common.service';

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get('audit-logs')
  async getAuditLogs(@Query('action') action?: string) {
    return this.commonService.getAuditLogs(action);
  }
}
