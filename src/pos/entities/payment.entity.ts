import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Sale } from './sale.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sale, sale => sale.payments)
  @JoinColumn({ name: 'saleId' })
  sale: Sale;

  @Column()
  amount: number;  // Amount paid

  @Column()
  method: string;  // Payment method (credit card, cash, etc.)

  @Column({ nullable: true })
  transactionId: string;  // Optional transaction ID for online payments

  @CreateDateColumn()
  createdAt: Date;
}
