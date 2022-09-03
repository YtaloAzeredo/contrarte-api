import { PostsRepository } from '@modules/posts/repositories/posts.repository'
import { UserRepository } from '@modules/users/repositories/users.repository'
import { CreatePostsController } from './create-posts.controller'
import { CreatePostsUseCase } from './create-posts.use-case'

const usersRepository = new UserRepository()
const postsRepository = new PostsRepository()
const createPostsUseCase = new CreatePostsUseCase(usersRepository, postsRepository)
export const createPostsController = new CreatePostsController(createPostsUseCase)
