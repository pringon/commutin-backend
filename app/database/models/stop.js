'use strict';
module.exports = (sequelize, DataTypes) => {
  var Stop = sequelize.define('stop', {
    name: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {});
  Stop.associate = function(models) {
    Stop.hasMany(models.stopTime);
  };
  return Stop;
};