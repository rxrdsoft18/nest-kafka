import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly client: ClientKafka,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    this.client.emit('create_user', JSON.stringify(createUserDto));
  }
}
