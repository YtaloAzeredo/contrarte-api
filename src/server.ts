import express from 'express'
import './bootstrap'
import './database'
import { routes } from './routes'

const app = express()
const port = process.env.SERVER_PORT

startApp()

function startApp () {
  app.use(express.json())
  routes.map(route => app.use(route))
  app.listen(port, () => {
    console.log(`============ Server Running on port:${port} ============`)
  })
}
