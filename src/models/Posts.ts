import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { PostComments } from './PostComments'
import { PostLikes } from './PostLikes'
import { Users } from './Users'
import { PostImages } from './PostImages'

@Entity()
export class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    description: string

  @OneToMany(() => PostComments, (comment) => comment.post)
    comments: PostComments[]

  @OneToMany(() => PostLikes, (like) => like.post)
    likes: PostLikes[]

  @OneToMany(() => PostImages, (image) => image.post)
    images: PostImages[]

  @ManyToOne(() => Users, (user) => user.posts)
    user: Users

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
