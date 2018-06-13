'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coordinate = sequelize.define('Coordinate', {
    time: DataTypes.DATE,
    latitude: DataTypes.DOUBLE,
    longitutde: DataTypes.DOUBLE
  }, {});
  Coordinate.associate = (models) => {
    Coordinate.belongsTo(models.Trip, {
      foreignKey: "tripId"
    });
  };
  return Coordinate;
};