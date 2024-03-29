import { Controller, Get, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_user')
  handleGetUser(@Payload('userId', ParseIntPipe) userId: number) {
    return this.appService.getUser(userId);
  }

  @EventPattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) createUserDto: CreateUserDto) {
    console.log('ms-auth: createUser', createUserDto);
    this.appService.createUser(createUserDto);
  }
}
