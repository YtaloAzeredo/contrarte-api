import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Images } from './images.model'
import { Posts } from '../modules/posts/models/posts.model'

@Entity()
export class PostImages extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @ManyToOne(() => Images, (image) => image.post)
    image: Images

  @ManyToOne(() => Posts, (post) => post.images)
    post: Posts

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
