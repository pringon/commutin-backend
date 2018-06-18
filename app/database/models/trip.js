'use strict';
module.exports = (sequelize, DataTypes) => {
  var Trip = sequelize.define('trip', {
    wheelchairAccessible: DataTypes.BOOLEAN
  }, {});
  Trip.associate = function(models) {
    Trip.hasMany(models.stopTime);
    Trip.belongsTo(models.route);
    Trip.belongsTo(models.calendar, {
      foreignKey: "serviceId"
    });
  };
  return Trip;
};