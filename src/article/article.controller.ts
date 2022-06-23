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
  Query,
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';
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
    return await this.extArtService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() externalItemToUpdate: Article,
  ): Promise<Article> {
    await this.extArtService.update(id, externalItemToUpdate);
    return this.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.extArtService.remove(id);
  }

  @Post('multiple')
  async addMultiple(@Body() externalList: Array<Article>) {
    return this.extArtService.addMultiple(externalList);
  }

  @Get(':id/:type')
  async getAbstractContent(
    @Param('id') id: number,
    @Param('type') type: string,
    @Query('htmlType') htmlType?: string,
  ) {
    return this.extArtService.getAbstractContent(id, type, htmlType);
  }
}
