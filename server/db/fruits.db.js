const connection = require('./connection')

function getAllFruits(db = connection) {
  return db('fruits').select()
}

module.exports = {
  getAllFruits,
}
