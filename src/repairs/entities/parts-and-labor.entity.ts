import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Ticket } from './ticket.entity';

@Entity()
export class PartsAndLabor {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ticket, ticket => ticket.partsAndLabor)
  ticket: Ticket;

  @Column()
  partName: string;

  @Column('decimal')
  partCost: number;

  @Column('decimal')
  laborCost: number;

  @Column()
  totalCost: number;

  @Column()
  description: string;  // Part and labor description
}
