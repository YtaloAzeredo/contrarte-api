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
import { Addresses } from './addresses.model'
import { Images } from './images.model'
import { Comments } from './comments.model'
import { PostLikes } from './post-likes.model'
import { Posts } from './posts.model'

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
