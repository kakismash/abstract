/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Article } from './article.entity';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly extArtService: ArticleService) {}

  @Post()
  async create(@Body() externalArticle: Article) {
    return await this.extArtService.create(externalArticle);
  }

  @Get()
  async findAll() {
    return await this.extArtService.findAllArticles();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.extArtService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() externalItemToUpdate: Article) {
    return await this.extArtService.update(id, externalItemToUpdate);
  }

  @Delete(':id')
  async remove(@Param(':id') id: string) {
    return await this.extArtService.remove(id);
  }

  @Post('multiple')
  async addMultiple(@Body() externalList: Array<Article>) {
    return this.extArtService.addMultiple(externalList);
  }
}
