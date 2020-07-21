const knex = require('knex')
const path = require('path');
// const { useNullAsDefault } = require('../../knexfile');


const conn = knex({
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
  });

  module.exports = conn