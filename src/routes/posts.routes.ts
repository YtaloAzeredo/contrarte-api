import { getAllPostsController } from '@modules/posts/use-cases/get-all-posts'
import { getOnePostsController } from '@modules/posts/use-cases/get-one-posts'
import { createPostsController } from '@modules/posts/use-cases/create-posts'
import { deletePostsController } from '@modules/posts/use-cases/delete-posts'
import { updatePostsController } from '@modules/posts/use-cases/update-posts'
import { Router } from 'express'
const router = Router()

router.get('/posts', (req, res) => getAllPostsController.handle(req, res))
router.get('/posts/:id', (req, res) => getOnePostsController.handle(req, res))
router.post('/posts', (req, res) => createPostsController.handle(req, res))
router.delete('/posts/:id', (req, res) => deletePostsController.handle(req, res))
router.put('/posts/:id', (req, res) => updatePostsController.handle(req, res))

export default router
