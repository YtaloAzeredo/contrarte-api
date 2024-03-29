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
import { Users } from '../modules/users/models/users.model'

@Entity()
export class Comments extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    comment: string

  @ManyToOne(() => Users, (user) => user.comments)
    user: Users

  @OneToMany(() => PostComments, (post) => post.comment)
    post: PostComments[]

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
