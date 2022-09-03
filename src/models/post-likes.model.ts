import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Posts } from '../modules/posts/models/posts.model'
import { Users } from '../modules/users/models/users.model'

@Entity()
export class PostLikes extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @ManyToOne(() => Users, (user) => user.likes)
    user: Users

  @ManyToOne(() => Posts, (post) => post.likes)
    post: Posts

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
