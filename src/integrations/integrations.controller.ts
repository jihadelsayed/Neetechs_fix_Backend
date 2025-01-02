import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
import { Integration } from './entities/integrations.entity';
import { CreateIntegrationDto } from './CreateIntegrationDto';


@Controller('integrations')
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Post()
  async createIntegration(@Body() createIntegrationDto: CreateIntegrationDto): Promise<Integration> {
    return this.integrationsService.createIntegration(createIntegrationDto);
  }

  @Get()
  async getAllIntegrations(): Promise<Integration[]> {
    return this.integrationsService.getAllIntegrations();
  }

  @Get(':id')
  async getIntegrationById(@Param('id') id: number): Promise<Integration> {
    return this.integrationsService.getIntegrationById(id);
  }
}
