import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Images } from './Images'
import { PostComments } from './PostComments'

@Entity()
export class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    description: string

  @Column()
    likes: number

  @OneToMany(() => Images, (image) => image.post)
    images: Images[]

  @OneToMany(() => PostComments, (comment) => comment.post)
    comments: PostComments[]

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
