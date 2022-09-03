import { Abstract } from '@repositories/abstract.repository'
import { IPostsRepository } from './posts-repository.interface'
import { Posts } from '../models/posts.model'

export class PostsRepository extends Abstract implements IPostsRepository {
  constructor () {
    super('Post')
  }

  async getAll (): Promise<Posts[]> {
    const response = await Posts.find()
    return response
  }

  async getOne ({ id }: { id?: number }): Promise<Posts> {
    const response = await Posts.findOneBy({ id }) as Posts
    return response
  }

  add (dataValues: Posts): Posts {
    return Posts.create(dataValues)
  }

  async store (dataValues: Posts): Promise<Posts> {
    const response = Posts.create(dataValues)
    return response.save()
  }

  async save (tableObject: Posts): Promise<Posts> {
    return tableObject.save()
  }

  async remove (tableObject: Posts): Promise<Posts> {
    return tableObject.remove()
  }
}
