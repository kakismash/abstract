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
import { ExternalArticle } from './ExternalArticle.entity';
import { ExternalArticleService } from './externalarticle.service';

@Controller('external-article')
export class ExternalArticleController {
  constructor(private readonly extArtService: ExternalArticleService) {}

  @Post()
  async create(@Body() externalArticle: ExternalArticle) {
    return await this.extArtService.create(externalArticle);
  }

  @Get()
  async findAll() {
    return await this.extArtService.findAllExternalArticles();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.extArtService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() externalItemToUpdate: ExternalArticle,
  ) {
    return await this.extArtService.update(id, externalItemToUpdate);
  }

  @Delete(':id')
  async remove(@Param(':id') id: string) {
    return await this.extArtService.remove(id);
  }

  @Post('multiple')
  async addMultiple(@Body() externalList: Array<ExternalArticle>) {
    return this.extArtService.addMultiple(externalList);
  }
}
