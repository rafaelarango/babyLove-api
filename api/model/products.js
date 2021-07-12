module.exports = (sequelize, Sequelize) => {
    return sequelize.define("products", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_category: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allownNull: false,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        discount: {
            type: Sequelize.INTEGER,
            allownNull: false,
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
};


