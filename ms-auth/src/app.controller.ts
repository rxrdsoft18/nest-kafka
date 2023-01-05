import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { GetUserDto } from './dtos/get-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_user')
  getUser(data: GetUserDto) {
    console.log('ms-auth: getUser', data);
    return this.appService.getUser(data);
  }
}
