// Update with your config settings.
require('dotenv').config();

module.exports = {
  developmentbkp: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

  testsql: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,

    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,

    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
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
    },
  },

  productionorigin: {
    client: 'postgresql',
    connection: {
      database: 'helprdb',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
