import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Sale } from './sale.entity';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sale, sale => sale.receipts)
  @JoinColumn({ name: 'saleId' })
  sale: Sale;

  @Column()
  receiptNumber: string;  // Unique receipt number

  @Column('text')
  details: string;  // Details of the sale

  @CreateDateColumn()
  createdAt: Date;
}
