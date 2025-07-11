import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: any) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: any) {
    return this.authService.login(loginDto);
  }

  @Get('roles')
  async getRoles() {
    return this.authService.getAllRoles();
  }

  @Put('roles/:id')
  async updateRole(@Param('id') id: number, @Body() roleDto: any) {
    return this.authService.updateRole(id, roleDto);
  }
}
