/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, UpdateResult, Repository } from 'typeorm';
import { ExternalArticle } from './ExternalArticle.entity';

@Injectable()
export class ExternalArticleService {
  constructor(
    @InjectRepository(ExternalArticle)
    private readonly repo: Repository<ExternalArticle>,
  ) {}

  async findAllExternalArticles(): Promise<ExternalArticle[]> {
    return await this.repo.find();
  }

  async findOne(id: string): Promise<ExternalArticle> {
    return await this.repo.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(newExternalArt: ExternalArticle): Promise<ExternalArticle> {
    return await this.repo.save(newExternalArt);
  }

  async update(
    externalArtId: string,
    externalArticle: ExternalArticle,
  ): Promise<UpdateResult> {
    return await this.repo.update(externalArtId, externalArticle);
  }

  async remove(externalId: string): Promise<DeleteResult> {
    return await this.repo.delete(externalId);
  }

  async addMultiple(
    listArticles: Array<ExternalArticle>,
  ): Promise<Array<ExternalArticle>> {
    return this.repo.save(listArticles);
  }
}
