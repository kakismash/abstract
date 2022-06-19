import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalArticle } from 'src/externalArticle/model/ExternalArticle.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [ExternalArticle],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
