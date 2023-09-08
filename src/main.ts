import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transforme automatiquement les données pour correspondre aux types des DTO
      whitelist: true, // Supprime automatiquement les propriétés inconnues des DTO
      forbidNonWhitelisted: true, // Lance une exception si des propriétés inconnues sont présentes dans les DTO
    }),
  );

  await app.listen(3000);
}
bootstrap();
