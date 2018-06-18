'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stopTimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      arrivalHour: {
        type: Sequelize.SMALLINT
      },
      arrivalMinute: {
        type: Sequelize.SMALLINT
      },
      arrivalSecond: {
        type: Sequelize.SMALLINT
      },
      delayToDeparture: {
        type: Sequelize.INTEGER
      },
      sequence: {
        type: Sequelize.SMALLINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      stopId: {
        type: Sequelize.INTEGER,
        references: {
          model: "stops",
          key: "id"
        }
      },
      tripId: {
        type: Sequelize.INTEGER,
        references: {
          model: "trips",
          key: "id"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stopTimes');
  }
};