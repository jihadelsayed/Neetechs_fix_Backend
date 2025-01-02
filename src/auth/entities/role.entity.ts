import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'text', array: true, nullable: true })
  permissions: string[]; // List of permissions associated with the role

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
  
}
