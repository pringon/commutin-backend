'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Drivers", [{
      firstName: "Dan",
      lastName: "Goje",
      createdAt: Sequelize.fn("now"),
      updatedAt: Sequelize.fn("now")
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Drivers", null, {});
  }
};
