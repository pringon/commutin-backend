'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("route_drivers", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      routeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "routes",
          key: "id"
        },
        allowNull: false
      },
      driverId: {
        type: Sequelize.INTEGER,
        references: {
          model: "drivers",
          key: "id"
        },
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("routes_drivers");
  }
};
