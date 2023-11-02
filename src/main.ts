import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './constants';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  app.useGlobalFilters(new ValidationPipe({
    transformOptions: {
      enableImplicitConversion: true;
    }
  }));

  const ConfigServices = app.get(ConfigService);

  app.enableCors(CORS);

  app.setGlobalPrefix('api');

  await app.listen(ConfigServices.get('PORT'));

  console.log(`Aplication runnig on: ${await app.getUrl()}`);
}
bootstrap();
