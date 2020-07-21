
exports.up = function(knex) {
  return knex.schema.createTable('users',(table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('email')
        table.string('pass')
        table.string('wpp')
        table.string('img')
        table.string('defic')
        table.string('problems')
        table.string('city')
        table.string('uf', 2)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};

exports.config = { transaction: false };
