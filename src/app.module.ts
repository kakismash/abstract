import { ExternalArticleModule } from './externalArticle/externalarticle.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ExternalArticleModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
