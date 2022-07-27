const express = require('express')

const router = express.Router()
const fruitsDb = require('../db/fruits.db')

router.get('/', (req, res) => {
  fruitsDb
    .getAllFruits()
    .then((fruits) => {
      res.json(fruits)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
