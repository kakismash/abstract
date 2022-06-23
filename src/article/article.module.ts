/*
https://docs.nestjs.com/modules
*/

import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './article.controller';
import { Article } from './article.entity';
import { ArticleService } from './article.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article]), HttpModule],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
