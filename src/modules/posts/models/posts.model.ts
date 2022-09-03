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
import { PostComments } from '../../../models/post-comments.model'
import { PostLikes } from '../../../models/post-likes.model'
import { Users } from '../../users/models/users.model'
import { PostImages } from '../../../models/post-images.model'

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
