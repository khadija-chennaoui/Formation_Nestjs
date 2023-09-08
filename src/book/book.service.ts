import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Book } from './book.entity'
import { CreateBookDto } from './create-book.dto'

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>
    ) {}

    async create(createBookDto: CreateBookDto): Promise<Book> {
        const book = this.bookRepository.create(createBookDto);
        return await this.bookRepository.save(book)
    }
    
}