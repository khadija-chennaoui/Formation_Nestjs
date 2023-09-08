import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.URL_DB,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // À des fins de développement uniquement !
};