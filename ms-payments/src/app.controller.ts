import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { MakePaymentDto } from './dtos/make-payment.dto';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka,
  ) {}

  @EventPattern('process_payment')
  handleProcessPayment(makePaymentDto: MakePaymentDto) {
    console.log('ms-payments: makePaymentDto', makePaymentDto);
    this.appService.processPayment(makePaymentDto);
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
