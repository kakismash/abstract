import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalArticle } from 'src/externalArticle/ExternalArticle.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-22-136-117.compute-1.amazonaws.com',
      port: 5432,
      username: 'vtbpfdzzkckxqc',
      password:
        '7ad8c79fd7e317ea2c077dde168c2da3fd3f9c48edbe8b86631b3eb8442d9980',
      database: 'd8s3qbaotq99k2',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: ['warn', 'error'],
      ssl: {
        rejectUnauthorized: false,
      },
      logger: 'debug',
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      subscribers: [__dirname + '/subscriber/*{.ts,.js}'],
    }),
  ],
})
export class DatabaseModule {}
