const express = require('express')
const fs = require('fs')
const path = require('path')

const server = express()

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

// static assets
server.use(express.static(path.resolve(__dirname, '../dist')))

// middleware
server.use(express.urlencoded({ extended: false }))

// api routes
server.get('/api', (req, res) => {
  res.json({ message: 'Hello World' })
})

server.get('/api/*', (req, res) => {
  res.sendStatus(404)
})

// serve the built dist folder (client)
server.get('*', (req, res) => {
  try {
    const html = fs.readFileSync(
      path.resolve(__dirname, '../dist/index.html'),
      'utf8'
    )
    if (isDevelopment) {
      console.warn(
        'WARNING: You are using development mode with a preview build, please note that the preview build may not be up to date with your changes.'
      )
    }
    return res.send(html)
  } catch (err) {
    console.log(err.message)
    if (err.message.includes('no such file or directory')) {
      return res
        .status(404)
        .send('dist folder not found, try running `npm run build`')
    }
    return res.status(500).send('something went wrong')
  }
})

module.exports = server
