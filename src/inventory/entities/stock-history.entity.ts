import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class StockHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.id, { onDelete: 'CASCADE' })
  product: Product;

  @Column()
  change: number; // Positive or negative number representing stock change

  @Column()
  reason: string; // E.g., "Purchase", "Sale", "Restock"

  @CreateDateColumn()
  changeDate: Date;
}
