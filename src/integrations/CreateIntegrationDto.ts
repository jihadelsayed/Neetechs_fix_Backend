import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateIntegrationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsOptional()
  configuration: string;  // Configuration details as a JSON string (optional)

  @IsString()
  @IsOptional()
  status: string;  // Status of the integration (e.g., active, inactive), default is 'active'
}
