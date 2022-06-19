import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('external_article')
export class ExternalArticle {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: 'pubmed' | 'omim' | 'hgmd';
}
