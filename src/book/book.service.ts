import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { CreateBookDto } from './create-book.dto';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {
  constructor(
    // @InjectRepository(Book)
    private readonly bookRepository: BookRepository,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    return await this.bookRepository.save(book);
  }
  async getAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }
  async getOne(nameBook: string): Promise<Book> {
    return this.bookRepository.findByName(nameBook);
  }
}
