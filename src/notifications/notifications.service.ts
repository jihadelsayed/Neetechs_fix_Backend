import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './CreateNotificationDto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  async findAllNotifications(): Promise<Notification[]> {
    return this.notificationRepository.find();
  }

  async findNotification(id: number): Promise<Notification> {
    const notification = await this.notificationRepository.findOne({ where: { id } });
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }
    return notification;
  }

  async createNotification(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    const notification = this.notificationRepository.create({
      userId: createNotificationDto.userId,
      message: createNotificationDto.message,
      status: createNotificationDto.status || 'unread', // Default to 'unread' if not provided
      timestamp: createNotificationDto.timestamp || new Date(),
    });
  
    return await this.notificationRepository.save(notification);
  }
  

  async updateNotification(id: number, updateNotificationDto: any): Promise<Notification> {
    await this.findNotification(id); // Ensure notification exists
    await this.notificationRepository.update(id, updateNotificationDto);
    return this.findNotification(id);
  }

  async deleteNotification(id: number): Promise<void> {
    const notification = await this.findNotification(id);
    await this.notificationRepository.remove(notification);
  }
}
