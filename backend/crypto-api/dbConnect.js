const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "sudipta1234",
  host: "localhost",
  port: "5432",
  database: "postgres",
});

module.exports = client;
