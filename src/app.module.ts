import { ArticleModule } from './article/article.module';
import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ArticleService } from './article/article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article/article.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([Article]),
    DatabaseModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService, ArticleService],
  exports: [AppService, ArticleService],
})
export class AppModule {}
