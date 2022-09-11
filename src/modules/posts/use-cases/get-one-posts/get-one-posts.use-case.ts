import { IUseCase } from '@interfaces/use-case.interface'
import NotFoundError from '@errors/not-found.error'
import { IPostsRepository } from '@modules/posts/repositories/posts-repository.interface'
import { Posts } from '@modules/posts/models/posts.model'

export class GetOnePostsUseCase implements IUseCase {
  constructor (private readonly postsRepository: IPostsRepository) {}

  async execute (id: number): Promise<Posts> {
    const post = await this.postsRepository.getOne({ id })
    if (!post) throw new NotFoundError(this.postsRepository.getNotFoundError())
    return post
  }
}
