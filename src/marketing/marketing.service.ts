import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './entities/campaign.entity';
import { CreateCampaignDto } from './CreateCampaignDto';

@Injectable()
export class MarketingService {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
  ) {}

  async findAllCampaigns(): Promise<Campaign[]> {
    return this.campaignRepository.find();
  }

  async findCampaign(id: number): Promise<Campaign> {
    const campaign = await this.campaignRepository.findOne({ where: { id } });
    if (!campaign) {
      throw new NotFoundException(`Campaign with ID ${id} not found`);
    }
    return campaign;
  }

  async createCampaign(createCampaignDto: CreateCampaignDto): Promise<Campaign> {
    const campaign = this.campaignRepository.create({
      name: createCampaignDto.name,
      description: createCampaignDto.description,
      startDate: createCampaignDto.startDate,
      endDate: createCampaignDto.endDate,
      budget: createCampaignDto.budget,
      spend: createCampaignDto.spend,
      status: createCampaignDto.status,
    });
  
    return await this.campaignRepository.save(campaign);
  }
  

  async updateCampaign(id: number, updateCampaignDto: any): Promise<Campaign> {
    await this.findCampaign(id); // Ensure campaign exists
    await this.campaignRepository.update(id, updateCampaignDto);
    return this.findCampaign(id);
  }

  async deleteCampaign(id: number): Promise<void> {
    const campaign = await this.findCampaign(id);
    await this.campaignRepository.remove(campaign);
  }
}
