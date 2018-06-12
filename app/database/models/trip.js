'use strict';
module.exports = (sequelize, DataTypes) => {
  var Trip = sequelize.define('Trip', {
    driverId: DataTypes.INTEGER,
    routeId: DataTypes.INTEGER
  }, {});
  Trip.associate = function(models) {
    Trip.hasMany(models.Coordinate, {
      foreignKey: "tripId",
    });
  };
  return Trip;
};