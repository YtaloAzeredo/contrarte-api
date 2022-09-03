import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import { IPostsRepository } from '@modules/posts/repositories/posts-repository.interface'
import { Posts } from '@modules/posts/models/posts.model'
import NotFoundError from '@errors/not-found.error'

export class CreatePostsUseCase implements IUseCase {
  constructor (
    private readonly usersRepository: IUsersRepository,
    private readonly postsRepository: IPostsRepository
  ) {}

  async execute (postData: Posts): Promise<Posts> {
    const user = await this.usersRepository.getOne({ id: postData.user })
    if (!user) throw new NotFoundError(this.usersRepository.getNotFoundError())
    return this.postsRepository.store(postData)
  }
}
