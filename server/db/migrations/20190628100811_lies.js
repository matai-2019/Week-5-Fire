
exports.up = function (knex) {
  return knex.schema.createTable('lies', (table) => {
    table.increments('id').primary()
    table.string('lie')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('lies')
}