'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shortName: {
        type: Sequelize.STRING
      },
      longName: {
        type: Sequelize.STRING
      },
      type: {
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
      companyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "companies",
          key: "id"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('routes');
  }
};