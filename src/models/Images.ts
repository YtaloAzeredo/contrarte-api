import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { PostImages } from './PostImages'

@Entity()
export class Images extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    url: string

  @OneToMany(() => PostImages, (post) => post.image)
    post: PostImages[]

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
