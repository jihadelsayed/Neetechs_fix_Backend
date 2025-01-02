import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async findAllNotifications() {
    return this.notificationsService.findAllNotifications();
  }

  @Get(':id')
  async findNotification(@Param('id') id: number) {
    return this.notificationsService.findNotification(id);
  }

  @Post()
  async createNotification(@Body() createNotificationDto: any) {
    return this.notificationsService.createNotification(createNotificationDto);
  }

  @Patch(':id')
  async updateNotification(@Param('id') id: number, @Body() updateNotificationDto: any) {
    return this.notificationsService.updateNotification(id, updateNotificationDto);
  }

  @Delete(':id')
  async deleteNotification(@Param('id') id: number) {
    return this.notificationsService.deleteNotification(id);
  }
}
