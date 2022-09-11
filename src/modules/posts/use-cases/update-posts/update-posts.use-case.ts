import { IUseCase } from '@interfaces/use-case.interface'
import NotFoundError from '@errors/not-found.error'
import { IPostsRepository } from '@modules/posts/repositories/posts-repository.interface'
import { Posts } from '@modules/posts/models/posts.model'

export class UpdatePostsUseCase implements IUseCase {
  constructor (private readonly postsRepository: IPostsRepository) {}

  async execute (postData: Posts): Promise<Posts> {
    const post = await this.postsRepository.getOne({ id: postData.id })
    if (!post) throw new NotFoundError(this.postsRepository.getNotFoundError())
    post.description = postData.description
    return this.postsRepository.save(post)
  }
}
