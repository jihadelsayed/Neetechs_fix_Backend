import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Technician } from './technician.entity';
import { PartsAndLabor } from './parts-and-labor.entity';
import { Warranty } from './warranty.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column()
  issueDescription: string;

  @ManyToOne(() => Technician, technician => technician.tickets)
  technician: Technician;

  @OneToMany(() => PartsAndLabor, partsAndLabor => partsAndLabor.ticket)
  partsAndLabor: PartsAndLabor[];

  @ManyToOne(() => Warranty, warranty => warranty.tickets)
  warranty: Warranty;

  @Column({ default: 'open' })
  status: string;  // 'open', 'in-progress', 'closed'

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
