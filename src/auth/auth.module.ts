import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { CommonModule } from '../common/common.module';
@Module({
  imports: [TypeOrmModule.forFeature([User, Role])
  ,CommonModule,],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService], // Export the service for use in other modules
})
export class AuthModule {}
