import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('say-hello')
  getHello(): string {
    return this.usersService.getHello();
  }
}
