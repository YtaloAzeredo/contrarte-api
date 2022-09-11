import { PostsRepository } from '@modules/posts/repositories/posts.repository'
import { GetAllPostsController } from './get-all-posts.controller'
import { GetAllPostsUseCase } from './get-all-posts.use-case'

const postsRepository = new PostsRepository()
const getAllPostsUseCase = new GetAllPostsUseCase(postsRepository)
export const getAllPostsController = new GetAllPostsController(getAllPostsUseCase)
