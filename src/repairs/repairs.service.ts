import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { Technician } from './entities/technician.entity';
import { PartsAndLabor } from './entities/parts-and-labor.entity';
import { Warranty } from './entities/warranty.entity';
import { CreateTicketDto } from './CreateTicketDto';

@Injectable()
export class RepairsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    @InjectRepository(Technician)
    private readonly technicianRepository: Repository<Technician>,
    @InjectRepository(PartsAndLabor)
    private readonly partsAndLaborRepository: Repository<PartsAndLabor>,
    @InjectRepository(Warranty)
    private readonly warrantyRepository: Repository<Warranty>,
  ) {}

  async findAllTickets(): Promise<Ticket[]> {
    return this.ticketRepository.find({ relations: ['technician', 'partsAndLabor', 'warranty'] });
  }

  async findTicket(id: number): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOne({ where: { id }, relations: ['technician', 'partsAndLabor', 'warranty'] });
    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return ticket;
  }

  async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = this.ticketRepository.create(createTicketDto);
    return this.ticketRepository.save(ticket);
  }
  

  async updateTicket(id: number, updateTicketDto: any): Promise<Ticket> {
    await this.findTicket(id); // Ensure ticket exists
    await this.ticketRepository.update(id, updateTicketDto);
    return this.findTicket(id);
  }
}
