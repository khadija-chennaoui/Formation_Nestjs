// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../typeorm.config';
import { UserController } from './user/user.controller'; 
import { UserService } from './user/user.service'; 
import { User } from './user/user.entity'; 
import { bookController } from "./book/book.controller";
import { Book } from "./book/book.entity";
import { BookService } from "./book/book.service";
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature([User])],
  controllers: [UserController], 
  providers: [UserService], 
})
export class UserModule {}
// @Module({
//   imports: [TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature([Book])],
//   controllers: [bookController], 
//   providers: [BookService], 
// })
// export class BookModule {}

@Module({
  imports: [UserModule], 
})

export class AppModule {}