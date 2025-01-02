import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ticket } from './ticket.entity';

@Entity()
export class Technician {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  expertise: string;

  @OneToMany(() => Ticket, ticket => ticket.technician)
  tickets: Ticket[];
}
