import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOption: CorsOptions = {
    origin: 'http://localhost:4200',
    methods: ['get', 'post', 'put', 'delete'],
  };
  app.enableCors(corsOption);
  console.log('Port: ', process.env.DB_PORT);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
