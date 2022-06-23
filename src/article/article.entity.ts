import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('article')
export class Article extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  type: string = 'pubmed' || 'omim' || 'hgmd';
}
