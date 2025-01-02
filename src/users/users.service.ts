import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { UserSettings } from './entities/user-settings.entity';
import { User } from 'src/auth/entities/user.entity';
import { CreateUserDto } from './CreateUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    @InjectRepository(UserSettings)
    private readonly userSettingsRepository: Repository<UserSettings>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find({ relations: ['profile', 'settings'] });
  }

  async findUser(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id }, relations: ['profile', 'settings'] });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // Create the user entity
    const user = this.userRepository.create(createUserDto);
  
    // Create associated Profile and UserSettings entities
    const profile = this.profileRepository.create({
      firstName: createUserDto.profile?.firstName,
      lastName: createUserDto.profile?.lastName,
      avatarUrl: createUserDto.profile?.avatarUrl,
      phoneNumber: createUserDto.profile?.phoneNumber,
      user: user, // Directly set the user object
    });
  
    const settings = this.userSettingsRepository.create({
      emailNotifications: createUserDto.settings?.emailNotifications,
      smsNotifications: createUserDto.settings?.smsNotifications,
      language: createUserDto.settings?.language,
      theme: createUserDto.settings?.theme,
      user: user, // Directly set the user object
    });
  
    // Assign the created profile and settings to the user
    user.profile = profile;
    user.settings = settings;
  
    // Save the user, profile, and settings in the database
    await this.userRepository.save(user);
    await this.profileRepository.save(profile);
    await this.userSettingsRepository.save(settings);
  
    return user; // Ensure this returns the saved user object
  }
  
  
  

  async updateUser(id: number, updateUserDto: any): Promise<User> {
    const user = await this.findUser(id); // Ensure user exists
    await this.userRepository.update(id, updateUserDto);
    return this.findUser(id);
  }
}
