require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: "postgres",
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("../model/users")(sequelize, Sequelize);
db.Products = require("../model/products")(sequelize, Sequelize);
db.Roles = require("../model/roles")(sequelize, Sequelize);
db.Patment_methods = require("../model/payment_methods")(sequelize, Sequelize);
db.Orders = require("../model/orders")(sequelize, Sequelize);
db.Orders_products = require("../model/orders_products")(sequelize, Sequelize);
db.Status = require("../model/status")(sequelize, Sequelize);
db.Categories = require("../model/categories")(sequelize, Sequelize);

module.exports = db;
