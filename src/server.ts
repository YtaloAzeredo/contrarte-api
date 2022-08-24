import 'express-async-errors'
import express from 'express'
import './bootstrap'
import './database'
import { routes } from './routes'
import { errorHandler } from './middlewares/error-handler.middleware'
import { middlewares } from './middlewares'

const app = express()
const port = process.env.SERVER_PORT

const handleErrorException = () => {
  process.on('uncaughtException', (error, origin) => {
    console.log(`${origin}: ${error}`)
  })

  process.on('unhandledRejection', (error) => {
    console.log(`unhandledRejection: ${error}`)
  })
}

const startApp = () => {
  app.use(express.json())
  routes.map(route => app.use(route))
  middlewares.map((middleware) => app.use(middleware))
  app.listen(port, () => {
    console.log(`============ Server Running on port:${port} ============`)
  })
  handleErrorException()
  app.use(errorHandler)
}

startApp()
