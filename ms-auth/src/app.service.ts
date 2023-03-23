import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(private readonly userRepository: UserRepository) {}
  createUser(data: CreateUserDto): void {
    this.userRepository.save(data);
  }

  getUser(id: number): User {
    return this.userRepository.findOne(id);
  }
}
