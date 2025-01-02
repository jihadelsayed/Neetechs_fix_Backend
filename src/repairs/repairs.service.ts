import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class RepairsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  async createTicket(description: string): Promise<Ticket> {
    const ticket = this.ticketRepository.create({ description });
    return this.ticketRepository.save(ticket);
  }

  async getAllTickets(): Promise<Ticket[]> {
    return this.ticketRepository.find({ relations: ['assignedTechnician'] });
  }
}
