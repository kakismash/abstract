/*
https://docs.nestjs.com/providers#services
*/

import {
  HttpException,
  HttpService,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError, map } from 'rxjs';
import { DeleteResult, UpdateResult, Repository } from 'typeorm';
import { Article } from './article.entity';
// import BeautifulDom from 'beautiful-dom';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const BeautifulDom = require('beautiful-dom');

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly repo: Repository<Article>,
    private readonly http: HttpService,
  ) {}

  async findAllArticles(): Promise<Article[]> {
    return await this.repo.find();
  }

  async findOne(id: number): Promise<Article> {
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

  async getAbstractContent(id: number, type: string, htmlType?: string) {
    const path = 'https://' + type + '.ncbi.nlm.nih.gov/' + id;
    console.log(path);
    return this.http
      .get<string>(path)
      .pipe(
        catchError((e) => {
          throw new HttpException(
            'something fail',
            HttpStatus.EXPECTATION_FAILED,
          );
        }),
      )
      .pipe(
        map((r) => {
          try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const dom = new BeautifulDom(r.data);
            const divAbstract = dom.querySelector('div#abstract');
            if (htmlType) {
              return JSON.stringify(divAbstract[htmlType]);
            } else {
              return JSON.stringify(divAbstract.innerText);
            }
          } catch (error) {
            throw new HttpException(
              'something fail',
              HttpStatus.EXPECTATION_FAILED,
            );
          }
        }),
      );
  }
}
