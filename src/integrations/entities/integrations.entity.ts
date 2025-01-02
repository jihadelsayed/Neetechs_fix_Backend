import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Integration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;  // Name of the integration

  @Column()
  type: string;  // Type of the integration (e.g., API, Webhook, etc.)

  @Column('text')
  configuration: string;  // Configuration details in JSON format

  @Column()
  status: string;  // Status of the integration (e.g., active, inactive)

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
