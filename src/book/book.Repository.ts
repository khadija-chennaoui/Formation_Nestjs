import {  DataSource, Repository,  } from 'typeorm';
import { Book } from './book.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookRepository extends Repository<Book> {
  constructor(private dataSource: DataSource)
  {
      super(Book, dataSource.createEntityManager());
  }
  repository: Repository<Book>
  async findByName(nameBook: string): Promise<Book> {
    return await this.findOne({ where: { nameBook } });
  }
}