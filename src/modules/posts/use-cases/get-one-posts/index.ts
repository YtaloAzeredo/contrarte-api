import { PostsRepository } from '@modules/posts/repositories/posts.repository'
import { GetOnePostsController } from './get-one-posts.controller'
import { GetOnePostsUseCase } from './get-one-posts.use-case'

const postsRepository = new PostsRepository()
const getOnePostsUseCase = new GetOnePostsUseCase(postsRepository)
export const getOnePostsController = new GetOnePostsController(getOnePostsUseCase)
