/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, UpdateResult, Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly repo: Repository<Article>,
  ) {}

  async findAllArticles(): Promise<Article[]> {
    return await this.repo.find();
  }

  async findOne(id: string): Promise<Article> {
    return await this.repo.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(newExternalArt: Article): Promise<Article> {
    return await this.repo.save(newExternalArt);
  }

  async update(
    externalArtId: string,
    externalArticle: Article,
  ): Promise<UpdateResult> {
    return await this.repo.update(externalArtId, externalArticle);
  }

  async remove(externalId: string): Promise<DeleteResult> {
    return await this.repo.delete(externalId);
  }

  async addMultiple(listArticles: Array<Article>): Promise<Array<Article>> {
    return this.repo.save(listArticles);
  }
}
