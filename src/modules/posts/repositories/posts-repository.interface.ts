import { IRepository } from '@interfaces/repository.interface'
import { FindManyOptions } from 'typeorm'
import { Posts } from '../models/posts.model'

export interface IPostsRepository extends IRepository {
  getAll(data?: IPostsQuery): Promise<Posts[]>
  getOne(data: any): Promise<Posts>
  add(data: any): Posts
  store(data: any): Promise<Posts>
  save(data: any): Promise<Posts>
  remove(data: any): Promise<Posts>
}

export interface IPostsQuery extends FindManyOptions {
  user?: number
}
