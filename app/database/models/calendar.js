'use strict';
module.exports = (sequelize, DataTypes) => {
  var Calendar = sequelize.define('calendar', {
    monday: DataTypes.BOOLEAN,
    tuesday: DataTypes.BOOLEAN,
    wednesday: DataTypes.BOOLEAN,
    thursday: DataTypes.BOOLEAN,
    friday: DataTypes.BOOLEAN,
    saturday: DataTypes.BOOLEAN,
    sunday: DataTypes.BOOLEAN,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Calendar.associate = function(models) {
    Calendar.hasMany(models.trip);
  };
  return Calendar;
};