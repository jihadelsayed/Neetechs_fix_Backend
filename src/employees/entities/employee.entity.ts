import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  position: string;

  @Column()
  salary: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Role, role => role.employees)
  @JoinColumn({ name: 'roleId' })
  role: Role;
}
