import { Controller, Get, Post, Body } from '@nestjs/common';
import { RepairsService } from './repairs.service';

@Controller('repairs')
export class RepairsController {
  constructor(private readonly repairsService: RepairsService) {}

  @Post('create')
  async createTicket(@Body('description') description: string) {
    return this.repairsService.createTicket(description);
  }

  @Get()
  async getAllTickets() {
    return this.repairsService.getAllTickets();
  }
}
