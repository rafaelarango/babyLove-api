module.exports = (sequelize, Sequelize) => {
  return sequelize.define("status", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
};