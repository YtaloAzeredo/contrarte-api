import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Posts } from './Posts'
import { Users } from './Users'

@Entity()
export class PostComments extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    comment: string

  @ManyToOne(() => Users, (user) => user.comments)
    user: Users

  @ManyToOne(() => Posts, (post) => post.comments)
    post: Posts

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
