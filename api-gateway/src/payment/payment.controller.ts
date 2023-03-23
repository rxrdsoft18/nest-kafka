import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { MakePaymentDto } from './dtos/make-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('pay')
  makePayment(@Body(ValidationPipe) makePaymentDto: MakePaymentDto) {
    console.log(makePaymentDto);
    this.paymentService.makePayment(makePaymentDto);
  }
}
