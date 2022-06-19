/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ExternalArticle } from '../model/ExternalArticle.entity';

@Injectable()
export class ExternalArticleService {
  constructor(
    @InjectRepository(ExternalArticle)
    private readonly externalArticleRepository: Repository<ExternalArticle>,
  ) {}

  async findAllExternalArticles(): Promise<ExternalArticle[]> {
    return await this.externalArticleRepository.find();
  }

  async findOne(id: string): Promise<ExternalArticle> {
    return await this.externalArticleRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(newExternalArt: ExternalArticle): Promise<ExternalArticle> {
    return await this.externalArticleRepository.save(newExternalArt);
  }

  async update(
    externalArtId: string,
    externalArticle: ExternalArticle,
  ): Promise<UpdateResult> {
    return await this.externalArticleRepository.update(
      externalArtId,
      externalArticle,
    );
  }

  async remove(externalId: string): Promise<DeleteResult> {
    return await this.externalArticleRepository.delete(externalId);
  }

  async addMultiple(
    listArticles: Array<ExternalArticle>,
  ): Promise<Array<ExternalArticle>> {
    return this.externalArticleRepository.save(listArticles);
  }
}
