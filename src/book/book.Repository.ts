import {  Repository } from 'typeorm';
import { Book } from './book.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookRepository extends Repository<Book> {
     repository: Repository<Book>
  // Vous pouvez ajouter des méthodes personnalisées pour interagir avec les livres ici
  async findByName(nameBook: string): Promise<Book | undefined> {
    return await this.repository.findOne({ where: { nameBook } });
  }
}