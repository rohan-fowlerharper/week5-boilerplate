import express from 'express'

import * as fruitsDb from '../db/fruits.db.js'

const router = express.Router()

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

export default router
