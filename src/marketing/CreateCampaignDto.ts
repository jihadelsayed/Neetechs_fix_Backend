export class CreateCampaignDto {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    budget?: number;
    spend?: number;
    status?: string;
  }
  