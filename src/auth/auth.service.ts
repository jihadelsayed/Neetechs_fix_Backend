import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './RegisterDto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {} 

 
  async register(registerDto: RegisterDto): Promise<User> {
    const roles = await this.roleRepository.findByIds(registerDto.roles);
  
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
  
    const user = this.userRepository.create({
      username: registerDto.username,
      password: hashedPassword,
      email: registerDto.email,
      roles,
    });
  
    return await this.userRepository.save(user);
  }
  
  async login(loginDto: any): Promise<{ token: string }> {
    // Logic for user authentication and token generation
    return { token: 'fake-jwt-token' };
  }

  async getAllRoles(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async updateRole(id: number, roleDto: any): Promise<Role> {
    const role = await this.roleRepository.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException('Role not found');
    }
    Object.assign(role, roleDto);
    return this.roleRepository.save(role);
  }
}
