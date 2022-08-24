import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Posts } from './posts.repository'
import { Users } from './users.repository'

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
