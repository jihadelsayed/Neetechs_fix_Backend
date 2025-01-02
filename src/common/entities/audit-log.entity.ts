import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class AuditLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: string; // e.g., 'USER_LOGIN', 'UPDATE_ROLE'

  @Column({ nullable: true })
  performedBy: string; // Username or user ID of the actor

  @Column({ nullable: true })
  targetEntity: string; // Target entity affected, e.g., 'User', 'Role'

  @Column({ type: 'text', nullable: true })
  details: string; // Any additional details about the action

  @CreateDateColumn()
  timestamp: Date; // Automatically stores the timestamp of the action
}
