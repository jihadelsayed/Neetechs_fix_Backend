export class CreateNotificationDto {
    userId: number;
    message: string;
    status?: string;  // Optional
    timestamp?: Date; // Optional
  }
  