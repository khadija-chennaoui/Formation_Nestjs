// typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: 'mongodb+srv://khadija:khadija99@cluster0.odoxcal.mongodb.net/FormatioNest',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // À des fins de développement uniquement !
};