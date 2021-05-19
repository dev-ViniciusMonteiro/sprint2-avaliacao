const config = require('config');
const mysql = require('mysql2');

const conexao = mysql.createConnection({

  host: config.get("db.host"),
  port: config.get("db.port"),
  user: config.get("db.user"),
  password: config.get("db.password"),
  database: config.get("db.banco"),
});

module.exports = conexao;