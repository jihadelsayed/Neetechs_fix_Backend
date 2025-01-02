import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RepairStatistics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  totalRepairs: number;

  @Column({ default: 0 })
  openTickets: number;

  @Column({ default: 0 })
  closedTickets: number;

  @Column({ default: 0 })
  partsUsed: number;
}
