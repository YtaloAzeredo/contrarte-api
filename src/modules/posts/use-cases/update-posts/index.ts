import { PostsRepository } from '@modules/posts/repositories/posts.repository'
import { UpdatePostsController } from './update-posts.controller'
import { UpdatePostsUseCase } from './update-posts.use-case'

const postsRepository = new PostsRepository()
const updatePostsUseCase = new UpdatePostsUseCase(postsRepository)
export const updatePostsController = new UpdatePostsController(updatePostsUseCase)
