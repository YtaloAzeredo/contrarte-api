import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Addresses } from './Addresses'
import { PostComments } from './PostComments'

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

  @OneToMany(() => PostComments, (comment) => comment.user)
    comments: PostComments[]

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
