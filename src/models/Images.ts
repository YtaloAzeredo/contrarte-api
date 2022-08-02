import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Posts } from './Posts'

@Entity()
export class Images extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @ManyToOne(() => Posts, (post) => post.images)
    post: Posts

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
