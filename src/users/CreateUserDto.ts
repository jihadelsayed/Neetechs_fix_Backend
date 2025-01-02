import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  email: string;

  profile?: CreateProfileDto;
  settings?: CreateUserSettingsDto;
}

export class CreateProfileDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;
}

export class CreateUserSettingsDto {
  @IsOptional()
  emailNotifications?: boolean;

  @IsOptional()
  smsNotifications?: boolean;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsString()
  theme?: string;
}
