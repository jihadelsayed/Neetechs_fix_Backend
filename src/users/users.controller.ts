import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  async findUser(@Param('id') id: number) {
    return this.usersService.findUser(id);
  }

  @Post()
  async createUser(@Body() createUserDto: any) {
    return this.usersService.createUser(createUserDto);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() updateUserDto: any) {
    return this.usersService.updateUser(id, updateUserDto);
  }
}
