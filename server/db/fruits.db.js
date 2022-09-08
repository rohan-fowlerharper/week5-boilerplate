import connection from './connection.js'

export function getAllFruits(db = connection) {
  return db('fruits').select()
}
