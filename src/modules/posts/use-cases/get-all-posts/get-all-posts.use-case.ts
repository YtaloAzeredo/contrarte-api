import { IUseCase } from '@interfaces/use-case.interface'
import NotFoundError from '@errors/not-found.error'
import { IPostsQuery, IPostsRepository } from '@modules/posts/repositories/posts-repository.interface'
import { Posts } from '@modules/posts/models/posts.model'

export class GetAllPostsUseCase implements IUseCase {
  constructor (private readonly postsRepository: IPostsRepository) {}

  async execute (query: IPostsQuery): Promise<Posts[]> {
    const posts = await this.postsRepository.getAll(query)
    if (!posts.length) throw new NotFoundError(this.postsRepository.getNotFoundError())
    return posts
  }
}
