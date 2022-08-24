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
import { PostComments } from './post-comments.model'
import { PostLikes } from './post-likes.model'
import { Users } from '../modules/users/models/users.model'
import { PostImages } from './post-images.model'

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
