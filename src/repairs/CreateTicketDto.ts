import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsString()
  customerName: string;

  @IsNotEmpty()
  @IsString()
  issueDescription: string;

  technicianId: number; // Assuming this will link to a Technician entity

  partsAndLaborIds?: number[]; // Optional: Array of parts and labor IDs if needed

  warrantyId?: number; // Optional: Warranty ID if applicable

  status?: string; // Optional: Default 'open'
}
