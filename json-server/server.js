const cors = require('cors')
const fs = require('fs')
const jsonServer = require('json-server')
const _ = require('lodash')
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

server.post('/getUserProfileById', (req, res) => {
  try {
    const id = req.body?.userId

    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8')
    )
    const { profiles } = db

    const userProfileFromDb = Object.entries(profiles).find(
      ([userId, _]) => userId === id
    )?.[1]

    if (userProfileFromDb) {
      return res.json(userProfileFromDb)
    }

    return res.status(401).json({ message: 'User not found' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
})

server.put('/setUserProfile', (req, res) => {
  try {
    const id = req.body?.userId
    const userProfile = req.body?.formData

    if (!id) {
      return res.status(401).json({ message: 'User not found' })
    }

    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8')
    )

    const { profiles } = db

    profiles[id] = userProfile
    const updatedDb = JSON.stringify({ ...db, profiles })

    fs.writeFileSync(path.resolve(__dirname, 'db.json'), updatedDb)

    return res.json(userProfile)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
})

server.post('/getCommentsByArticleId', (req, res) => {
  try {
    const id = req.body?.articleId

    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8')
    )

    const { comments } = db

    const articleComments = comments.filter(
      (comment) => comment.articleId === id
    )

    if (articleComments) {
      return res.json(articleComments)
    }

    return res.status(401).json({ message: 'Comments not found' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
})

server.post('/getUserById', (req, res) => {
  try {
    const id = req.body?.userId

    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8')
    )

    const { users } = db

    const findedUser = users.find((user) => user.id === id)

    if (findedUser) {
      return res.json(findedUser)
    }

    return res.status(401).json({ message: 'User not found' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
})

server.get('/articles', (req, res) => {
  try {
    const types = req.query?.types.split(',')

    const articles = router.db.get('articles').value()

    const filteredArticles =
      Array.isArray(types) && types.length
        ? articles.filter((article) => {
            const result = types.find((type) => article.type.includes(type))
            return Boolean(result)
          })
        : articles

    const orderedAndSortedArticles = _.orderBy(
      filteredArticles,
      [req.query._sort],
      [req.query._order]
    )

    const searchQuery = req.query.q
    const searchedArticles = searchQuery
      ? orderedAndSortedArticles.filter((article) =>
          Object.values(article).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      : orderedAndSortedArticles

    // Apply pagination using standard JavaScript array methods
    const page = parseInt(req.query._page, 10) || 1
    const limit = parseInt(req.query._limit, 10) || 10
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedArticles = searchedArticles.slice(startIndex, endIndex)

    res.jsonp(paginatedArticles)
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
