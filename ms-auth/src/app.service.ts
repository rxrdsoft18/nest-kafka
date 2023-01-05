import { Injectable } from '@nestjs/common';
import { GetUserDto } from './dtos/get-user.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: 'd7564509-0c01-4ffc-a4bd-c7796d96ff20',
      stripeUserId: '43234',
    },
    {
      userId: '0a52c386-fa0e-43a0-8a5e-66b32959ac24',
      stripeUserId: '27279',
    },
  ];

  getUser(getUserRequest: GetUserDto) {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
