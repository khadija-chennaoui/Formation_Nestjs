/* eslint-disable prettier/prettier */
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();

export const options: DataSourceOptions = {
  type: 'postgres',
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
  entities: [__dirname + './../**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + './../migrations/*{.ts,.js}'],
};

export const AppDataSource = new DataSource(options);

