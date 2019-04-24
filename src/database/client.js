const { Client } = require('pg');

const config = {
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  database: 'postgres',
};

const client = new Client(config);

client.connect()
  .catch((err) => {
    console.error(err);
  });

module.exports = client;
