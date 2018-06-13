'use strict';
module.exports = (sequelize, DataTypes) => {
  var Trip = sequelize.define('Trip', {
    driverId: DataTypes.INTEGER,
    routeId: DataTypes.INTEGER
  }, {});
  return Trip;
};