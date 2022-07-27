const express = require('express')

const { createServer: createViteServer } = require('vite')

async function createServer() {
  const server = express()

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
  })

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

  server.use(vite.middlewares)

  return server
}
module.exports = createServer
