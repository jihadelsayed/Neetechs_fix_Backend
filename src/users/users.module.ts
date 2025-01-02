import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Profile } from './entities/profile.entity';
import { UserSettings } from './entities/user-settings.entity';
import { User } from 'src/auth/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, UserSettings])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
