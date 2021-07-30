require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.DB_HOST,
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const Users = require("../model/users")(sequelize, Sequelize);
const Roles = require("../model/roles")(sequelize, Sequelize);

db.Products = require("../model/products")(sequelize, Sequelize);
db.Patment_methods = require("../model/payment_methods")(sequelize, Sequelize);
db.Orders = require("../model/orders")(sequelize, Sequelize);
db.Orders_products = require("../model/orders_products")(sequelize, Sequelize);
db.Status = require("../model/status")(sequelize, Sequelize);
db.Categories = require("../model/categories")(sequelize, Sequelize);

Roles.hasMany(Users);
Users.belongsTo(Roles);

db.Users = Users;
db.Roles = Roles;

module.exports = db;
