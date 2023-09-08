import { Controller, Post, Get, Body, Param} from '@nestjs/common'
import { BookService } from './book.service'
import { CreateBookDto } from './create-book.dto'
import { Book } from './book.entity'
@Controller('book')
export class bookController {
constructor( private readonly bookServie: BookService){}

@Post('/add')
async create(@Body() creatBookDto: CreateBookDto) {
    return await this.bookServie.create(creatBookDto)
}

@Get('/AllBook')
async findAll() {
    return await this.bookServie.getAll()
}

@Get('/OneBook:nameBook')
async findOne(@Param('nameBook') nameBook: string):Promise<Book> {
    return await this.bookServie.getOne(nameBook)
}

}