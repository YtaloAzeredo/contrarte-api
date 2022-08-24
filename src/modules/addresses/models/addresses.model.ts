import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Users } from '../../users/models/users.model'

@Entity()
export class Addresses extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    street: string

  @Column()
    city: string

  @Column()
    zipCode: string

  @ManyToOne(() => Users, (user) => user.addresses)
    user: Users

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
