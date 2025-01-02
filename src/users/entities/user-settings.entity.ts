import { User } from 'src/auth/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class UserSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, user => user.settings)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ default: true })
  emailNotifications: boolean;  // Whether user wants email notifications

  @Column({ default: true })
  smsNotifications: boolean;    // Whether user wants SMS notifications

  @Column({ default: 'en' })
  language: string;             // User preferred language

  @Column({ default: 'dark' })
  theme: string;                // User preferred theme (light or dark)

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
