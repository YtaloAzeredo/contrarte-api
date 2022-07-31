import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false })
    name: string

  @Column({ nullable: false, unique: true })
    email: string

  @Column({ nullable: false })
    password: string

  @Column({ nullable: true })
    address_id: number

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
