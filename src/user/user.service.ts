// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './creat-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const result = await this.userRepository.insert(createUserDto);
    if (result.identifiers.length > 0) {
      return createUserDto;
    } else {
      throw new Error('Failed to insert user.');
    }
  }

  async getOne(username: string): Promise<User> {
    return this.userRepository.findByName(username);
  }
}
