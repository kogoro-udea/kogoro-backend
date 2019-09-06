const Sequelize = require('sequelize');

const database = 'integrador';
const username = process.env.DEV ? 'root' : 'root';
const password = process.env.DEV ? 'root' : '12345678';
const host = process.env.DEV ? 'localhost' : 'kogoro.crj2su2zgzdr.us-east-2.rds.amazonaws.com';
const dialect = 'mysql';

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;