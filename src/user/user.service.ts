// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // async createUser(user: User): Promise<User> {
  //   return this.userRepository.save(user);
  // }

  async createUser(user: User): Promise<User> {
  const result = await this.userRepository.insert(user);
  if (result.identifiers.length > 0) {
    // L'insertion a réussi, vous pouvez renvoyer l'utilisateur inséré
    return user;
  } else {
    // L'insertion a échoué, vous pouvez gérer l'erreur ici
    throw new Error("Failed to insert user.");
  }
}
}