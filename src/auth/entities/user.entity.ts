import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Role } from './role.entity';
import { Profile } from 'src/users/entities/profile.entity';
import { UserSettings } from 'src/users/entities/user-settings.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  
  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];
  
  @OneToOne(() => Profile, profile => profile.user)
  profile: Profile;

  @OneToOne(() => UserSettings, settings => settings.user)
  settings: UserSettings;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
