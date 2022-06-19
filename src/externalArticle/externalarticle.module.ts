/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalArticleController } from './controller/externalarticle.controller';
import { ExternalArticle } from './model/ExternalArticle.entity';
import { ExternalArticleService } from './service/externalarticle.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExternalArticle])],
  controllers: [ExternalArticleController],
  providers: [ExternalArticleService],
})
export class ExternalArticleModule {}
