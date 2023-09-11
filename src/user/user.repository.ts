import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  repository: Repository<User>;
  async findByName(username: string): Promise<User> {
    return await this.findOne({ where: { username } });
  }
}
