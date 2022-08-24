import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Comments } from './comments.repository'
import { Posts } from './posts.repository'

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
