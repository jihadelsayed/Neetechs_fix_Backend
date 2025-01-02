import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Payment } from './payment.entity';
import { Receipt } from './receipt.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;  // Customer associated with the sale

  @Column()
  totalAmount: number;  // Total amount of the sale

  @Column()
  status: string;  // Status of the sale (completed, pending, etc.)

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Payment, payment => payment.sale)
  payments: Payment[];

  @OneToMany(() => Receipt, receipt => receipt.sale)
  receipts: Receipt[];
}
