import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('article')
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: string = 'pubmed' || 'omim' || 'hgmd';
}
