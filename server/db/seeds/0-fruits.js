/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('fruits').del()
  await knex('fruits').insert([
    { id: 1, name: 'apple', color: 'red' },
    { id: 2, name: 'banana', color: 'yellow' },
    { id: 3, name: 'peach', color: 'orange' },
  ])
}
