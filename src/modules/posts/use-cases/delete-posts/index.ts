import { PostsRepository } from '@modules/posts/repositories/posts.repository'
import { DeletePostsController } from './delete-posts.controller'
import { DeletePostsUseCase } from './delete-posts.use-case'

const postsRepository = new PostsRepository()
const deletePostsUseCase = new DeletePostsUseCase(postsRepository)
export const deletePostsController = new DeletePostsController(deletePostsUseCase)
