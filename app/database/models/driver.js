'use strict';
module.exports = (sequelize, DataTypes) => {
  var Driver = sequelize.define('Driver', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  Driver.associate = (models) => {
    // associations can be defined here
  };
  return Driver;
};