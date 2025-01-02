import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Overview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalRepairs: number;

  @Column()
  totalRevenue: number;

  @Column()
  totalCustomers: number;

  @Column()
  pendingTickets: number;

  @CreateDateColumn()
  generatedAt: Date; // Timestamp when the overview was generated
}
