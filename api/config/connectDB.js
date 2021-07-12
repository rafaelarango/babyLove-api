require('dotenv').config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: "postgres",
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  dialect: "postgres"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../model/users')(sequelize, Sequelize);
db.products = require('../model/products')(sequelize, Sequelize);
db.roles = require('../model/roles')(sequelize, Sequelize);
db.patment_methods = require('../model/payment_methods')(sequelize, Sequelize);

module.exports = db;
