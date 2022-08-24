import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Images } from './images.repository'
import { Posts } from './posts.repository'

@Entity()
export class PostImages extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @ManyToOne(() => Images, (image) => image.post)
    image: Images

  @ManyToOne(() => Posts, (post) => post.images)
    post: Posts

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
