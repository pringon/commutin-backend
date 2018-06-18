'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wheelchairAccessible: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      routeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "routes",
          key: "id"
        }
      },
      serviceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "calendars",
          key: "id"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trips');
  }
};