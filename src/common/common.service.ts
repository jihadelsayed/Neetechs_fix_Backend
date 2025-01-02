import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditLog } from './entities/audit-log.entity';

@Injectable()
export class CommonService {
  constructor(
    @InjectRepository(AuditLog)
    private readonly auditLogRepository: Repository<AuditLog>,
  ) {}

  /**
   * Logs an action to the AuditLog table.
   */
  async logAction(action: string, performedBy?: string, targetEntity?: string, details?: string): Promise<void> {
    const auditLog = this.auditLogRepository.create({
      action,
      performedBy,
      targetEntity,
      details,
    });
    await this.auditLogRepository.save(auditLog);
  }

  /**
   * Fetches all audit logs, optionally filtering by action.
   */
  async getAuditLogs(action?: string): Promise<AuditLog[]> {
    if (action) {
      return this.auditLogRepository.find({ where: { action }, order: { timestamp: 'DESC' } });
    }
    return this.auditLogRepository.find({ order: { timestamp: 'DESC' } });
  }
}
