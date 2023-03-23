import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { MakePaymentDto } from './dtos/make-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('pay')
  async makePayment(@Body(ValidationPipe) makePaymentDto: MakePaymentDto) {
    console.log(makePaymentDto);
    await this.paymentService.makePayment(makePaymentDto);
  }
}
