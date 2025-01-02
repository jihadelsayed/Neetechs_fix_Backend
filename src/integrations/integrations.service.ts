// ├── Integrations
// │   ├── Payment Gateways
// │   ├── Accounting Tools
// │   ├── E-commerce Platforms
// │   └── API Access
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIntegrationDto } from './CreateIntegrationDto';
import { Integration } from './entities/integrations.entity';

@Injectable()
export class IntegrationsService {
  constructor(
    @InjectRepository(Integration)
    private readonly integrationRepository: Repository<Integration>,
  ) {}

  async createIntegration(createIntegrationDto: CreateIntegrationDto): Promise<Integration> {
    const integration = this.integrationRepository.create(createIntegrationDto);
    return this.integrationRepository.save(integration);
  }

  async getAllIntegrations(): Promise<Integration[]> {
    return this.integrationRepository.find();
  }

  async getIntegrationById(id: number): Promise<Integration> {
    const integration = await this.integrationRepository.findOne({ where: { id } });
    if (!integration) {
      throw new NotFoundException(`Integration with ID ${id} not found`);
    }
    return integration;
  }
  
}
