import createServer from './server.js'

const port = process.env.PORT || 5173

createServer().then((server) => {
  server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })
})
