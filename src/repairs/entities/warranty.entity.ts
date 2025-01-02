import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ticket } from './ticket.entity';

@Entity()
export class Warranty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  warrantyNumber: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  terms: string;

  @OneToMany(() => Ticket, ticket => ticket.warranty)
  tickets: Ticket[];
}
