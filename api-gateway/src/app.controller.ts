import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('billing')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createOrder(@Body() body: CreateOrderDto): void {
    console.log(body);
    return this.appService.createOrder(body);
  }
}
