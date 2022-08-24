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
import { PostComments } from './post-comments.repository'
import { PostLikes } from './post-likes.repository'
import { Users } from './users.repository'
import { PostImages } from './post-images.repository'

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
