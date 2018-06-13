'use strict';
module.exports = (sequelize, DataTypes) => {
  var Trip = sequelize.define('Trip', {
    routeId: DataTypes.INTEGER
  }, {});
  Trip.associate = (models) => {
    Trip.belongsTo(models.Driver, {
      foreignKey: "driverId"
    });
  };
  return Trip;
};