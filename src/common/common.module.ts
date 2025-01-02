import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditLog } from './entities/audit-log.entity';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuditLog])],
  controllers: [CommonController],
  providers: [CommonService],
  exports: [CommonService], // Allow other modules to reuse CommonService
})
export class CommonModule {}
