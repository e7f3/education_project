const cors = require('cors')
const fs = require('fs')
const jsonServer = require('json-server')
// const jwt = require('jsonwebtoken')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(cors())
const middlewares = jsonServer.defaults({})

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 900)
  })
  next()
})

server.post('/login', (req, res) => {
  try {
    const username = req.body?.username
    const password = req.body?.password

    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8')
    )
    const { users } = db

    const userFromDb = users.find(
      (user) => user.username === username && user.password === password
    )

    if (userFromDb) {
      return res.json(userFromDb)
    }

    return res.status(401).json({ message: 'Auth error' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
})

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Auth error' })
  }
  next()
})

server.use(router)

// Use default router
server.listen(8000, () => {
  console.log('JSON Server is running on 8000 port')
})
