import { IUseCase } from '@interfaces/use-case.interface'
import { IPostsRepository } from '@modules/posts/repositories/posts-repository.interface'
import NotFoundError from '@errors/not-found.error'

export class DeletePostsUseCase implements IUseCase {
  constructor (
    private readonly postsRepository: IPostsRepository
  ) {}

  async execute (id: number): Promise<string> {
    const post = await this.postsRepository.getOne({ id })
    if (!post) throw new NotFoundError(this.postsRepository.getNotFoundError())
    await this.postsRepository.remove(post)
    return this.postsRepository.getDeleteMessage()
  }
}
