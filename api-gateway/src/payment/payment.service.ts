import { Inject, Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dtos/make-payment.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT_MICROSERVICE') private readonly client: ClientKafka,
  ) {}
  async makePayment(makePaymentDto: MakePaymentDto) {
    this.client.emit('process_payment', JSON.stringify(makePaymentDto));
  }
}
