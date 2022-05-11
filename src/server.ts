import express from 'express'
import '@controllers/UsersController'
import '@dotenv'

const app = express()
const PORT = process.env.PORT

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

startApp()

function startApp () {
  app.listen(PORT, () => {
    console.log(`============ Server Started on http://localhost:${PORT} ============`)
  })
}
