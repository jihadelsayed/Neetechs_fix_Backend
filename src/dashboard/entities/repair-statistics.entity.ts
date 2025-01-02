import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class RepairStatistics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  completedRepairs: number;

  @Column()
  averageRepairTime: number; // Average time in hours

  @Column()
  mostRepairedDevice: string;

  @Column({ type: 'timestamp' })
  @CreateDateColumn()
  calculatedAt: Date; // Timestamp when the statistics were calculated
}
