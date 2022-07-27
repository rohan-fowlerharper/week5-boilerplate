const express = require('express')

const { createServer: createViteServer } = require('vite')

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

  // 2. user-defined routes
  server.get('/api', (req, res) => {
    res.json([
      {
        id: 1,
        name: 'apple',
        color: 'red',
      },
      {
        id: 2,
        name: 'banana',
        color: 'yellow',
      },
    ])
  })

  // 3. vite dev server middleware needs to be after user-defined routes
  if (!isProd) {
    server.use(vite.middlewares)
  }

  return server
}

module.exports = createServer
