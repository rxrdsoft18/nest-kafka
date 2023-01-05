import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedDto } from './dtos/order-created.dto';
import { GetUserEvent } from './event/get-user.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}
  handleOrderCreated(orderCreatedEvent: OrderCreatedDto) {
    this.authClient
      .send('get_user', new GetUserEvent(orderCreatedEvent.userId))
      .subscribe((user) => {
        console.log(
          `Billing user with stripe ID ${user.stripeUserId} a price of $${orderCreatedEvent.price}...`,
        );
      });
  }
}
