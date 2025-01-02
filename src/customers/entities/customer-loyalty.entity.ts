import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class CustomerLoyalty {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, (customer) => customer.loyaltyPoints, { onDelete: 'CASCADE' })
  customer: Customer;

  @Column()
  points: number;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  earnedAt: Date;
}
