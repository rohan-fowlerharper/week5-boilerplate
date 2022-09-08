/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => {
  return knex.schema.createTable('fruits', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('color').notNullable()
    table.timestamps(true, true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
  return knex.schema.dropTable('fruits')
}
