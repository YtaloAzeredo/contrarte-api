import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Posts } from './Posts'
import { Users } from './Users'

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
