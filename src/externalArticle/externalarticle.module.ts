/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalArticleController } from './externalarticle.controller';
import { ExternalArticle } from './ExternalArticle.entity';
import { ExternalArticleService } from './externalarticle.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExternalArticle])],
  controllers: [ExternalArticleController],
  providers: [ExternalArticleService],
})
export class ExternalArticleModule {}
