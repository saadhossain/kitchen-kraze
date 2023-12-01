import { Body, Controller, Get, Post } from '@nestjs/common';
import { Users } from 'src/schema/users.schema';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() users: CreateUserDto): Promise<Users> {
    return this.usersService.createUser(users);
  }

  @Get()
  async getAllUsers(): Promise<Users[]> {
    return this.usersService.getUsers();
  }
}
