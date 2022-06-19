import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExternalArticle {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: 'pubmed' | 'omim' | 'hgmd';
}
