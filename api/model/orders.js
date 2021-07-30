module.exports = (sequelize, Sequelize) => {
  return sequelize.define("orders", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_users: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_payment_methods: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
};