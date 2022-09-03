import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Comments } from './comments.model'
import { Posts } from '../modules/posts/models/posts.model'

@Entity()
export class PostComments extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @ManyToOne(() => Comments, (comment) => comment.post)
    comment: Comments

  @ManyToOne(() => Posts, (post) => post.comments)
    post: Posts

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
