import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Technician } from './technician.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ default: 'open' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Technician, (technician) => technician.tickets, { nullable: true })
  assignedTechnician: Technician;
}
