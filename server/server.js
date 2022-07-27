const express = require('express')

const { createServer: createViteServer } = require('vite')

const isProd = process.env.NODE_ENV === 'production'

async function createServer() {
  const server = express()
  if (!isProd) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
      },
    })

    server.use(vite.middlewares)
  } else {
    server.use(express.static('dist'))
  }

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

  return server
}

module.exports = createServer
