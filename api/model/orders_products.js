module.exports = (sequelize, Sequelize) => {
  return sequelize.define("orders_products", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_order: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_product: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_status: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
};
