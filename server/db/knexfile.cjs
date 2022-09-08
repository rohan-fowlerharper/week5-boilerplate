const path = require('path')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: path.resolve(__dirname, './dev.sqlite3'),
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, './migrations'),
      loadExtensions: ['.mjs'],
    },
    seeds: {
      directory: path.resolve(__dirname, './seeds'),
      loadExtensions: ['.mjs'],
    },
  },
  staging: {
    client: 'better-sqlite3',
    connection: {
      filename: path.resolve(__dirname, './dev.sqlite3'),
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, './migrations'),
      loadExtensions: ['.mjs'],
    },
    seeds: {
      directory: path.resolve(__dirname, './seeds'),
      loadExtensions: ['.mjs'],
    },
  },
  test: {
    client: 'better-sqlite3',
    connection: {
      filename: ':memory:',
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, './migrations'),
      loadExtensions: ['.mjs'],
    },
    seeds: {
      directory: path.resolve(__dirname, './seeds'),
      loadExtensions: ['.mjs'],
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      // TODO: configure these before deploying
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      loadExtensions: ['.mjs'],
    },
  },
}
