const express = require('express')

const { createServer: createViteServer } = require('vite')

const fruitsRouter = require('./routes/fruits.router')

const isProd = process.env.NODE_ENV === 'production'

async function createServer() {
  const server = express()

  let vite
  if (!isProd) {
    // 1. use the vite dev server in development mode
    vite = await createViteServer({
      server: {
        middlewareMode: true,
      },
    })
  } else {
    // 4. express.static (in production) needs to be before user-defined routes
    server.use(express.static('dist'))
  }

  // 2. user-defined routes and middleware
  server.use(express.urlencoded({ extended: true }))
  server.use('/api/fruits', fruitsRouter)
  server.get('/api/hello-world', (req, res) => {
    res.json('Hello World')
  })
  // use a 404 route to ensure you get good error messages when you miss api routes
  server.use('/api/*', (req, res) => {
    res.sendStatus(404)
  })

  // 3. vite dev server middleware needs to be after user-defined routes
  if (!isProd) {
    server.use(vite.middlewares)
  }

  return server
}

module.exports = createServer
