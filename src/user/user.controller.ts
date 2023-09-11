// user.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './creat-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<CreateUserDto[]> {
    return this.userService.findAll();
  }

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<CreateUserDto> {
    return this.userService.createUser(user);
  }

  @Get('/OneUser/:username')
  async One(@Param('username') username: string): Promise<CreateUserDto> {
    return await this.userService.getOne(username);
  }
}
