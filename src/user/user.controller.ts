import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getAllUsers(): string[] {
    return this.userService.getAllUsers();
  }

  @Post()
  addUser(@Body('name') name: string): string {
    return this.userService.addUser(name);
  }

  @Delete()
  deleteUser(@Body('name') name: string): string {
    return this.userService.deleteUser(name);
  }
}
