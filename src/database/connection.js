const knex = require('knex');
require('dotenv').config();
const configuration = require('../../knexfile');

const config =
  process.env.NODE_ENV === 'test'
    ? configuration.test
    : configuration.development;

const connection = knex(config);

module.exports = connection;
