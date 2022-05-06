import express from 'express'
import '@controllers/UsersController'

const app = express()
const PORT = 3000

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

startApp()

function startApp () {
  app.listen(PORT, onListen)
}

function onListen () {
  console.log(`============ Server Started on http://localhost:${PORT} ============`)
}
