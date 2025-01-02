import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { RepairsService } from './repairs.service';

@Controller('repairs')
export class RepairsController {
  constructor(private readonly repairsService: RepairsService) {}

  @Get()
  async findAllTickets() {
    return this.repairsService.findAllTickets();
  }

  @Get(':id')
  async findTicket(@Param('id') id: number) {
    return this.repairsService.findTicket(id);
  }

  @Post()
  async createTicket(@Body() createTicketDto: any) {
    return this.repairsService.createTicket(createTicketDto);
  }

  @Patch(':id')
  async updateTicket(@Param('id') id: number, @Body() updateTicketDto: any) {
    return this.repairsService.updateTicket(id, updateTicketDto);
  }
}
