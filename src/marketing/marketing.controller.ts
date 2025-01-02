import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MarketingService } from './marketing.service';

@Controller('marketing')
export class MarketingController {
  constructor(private readonly marketingService: MarketingService) {}

  @Get('campaigns')
  async findAllCampaigns() {
    return this.marketingService.findAllCampaigns();
  }

  @Get('campaigns/:id')
  async findCampaign(@Param('id') id: number) {
    return this.marketingService.findCampaign(id);
  }

  @Post('campaigns')
  async createCampaign(@Body() createCampaignDto: any) {
    return this.marketingService.createCampaign(createCampaignDto);
  }

  @Patch('campaigns/:id')
  async updateCampaign(@Param('id') id: number, @Body() updateCampaignDto: any) {
    return this.marketingService.updateCampaign(id, updateCampaignDto);
  }

  @Delete('campaigns/:id')
  async deleteCampaign(@Param('id') id: number) {
    return this.marketingService.deleteCampaign(id);
  }
}
