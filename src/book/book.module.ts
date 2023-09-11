import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bookController } from './book.controller';
import { Book } from './book.entity';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [bookController],
  providers: [BookService, BookRepository],
  exports: [BookService],
})
export class BookModule {}
