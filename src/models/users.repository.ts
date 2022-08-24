import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Addresses } from './addresses.repository'
import { Images } from './images.repository'
import { Comments } from './comments.repository'
import { PostLikes } from './post-likes.repository'
import { Posts } from './posts.repository'

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false })
    name: string

  @Column({ nullable: false, unique: true })
    email: string

  @Column({ nullable: false })
    password: string

  @OneToMany(() => Addresses, (address) => address.user)
    addresses: Addresses[]

  @OneToMany(() => Comments, (comment) => comment.user)
    comments: Comments[]

  @OneToMany(() => PostLikes, (like) => like.user)
    likes: PostLikes[]

  @OneToMany(() => Posts, (post) => post.user)
    posts: Posts[]

  @OneToOne(() => Images)
  @JoinColumn()
    profilePicture: Images

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
