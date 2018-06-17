'use strict';
module.exports = (sequelize, DataTypes) => {
  var Route = sequelize.define('route', {
    shortName: DataTypes.STRING,
    longName: DataTypes.STRING,
    type: DataTypes.SMALLINT
  }, {});
  Route.associate = function(models) {
    Route.hasMany(models.trip);
    Route.belongsTo(models.company, {
      as: "company",
      foreignKey: "companyId"
    });
    Route.belongsToMany(models.driver, {
      through: "route_drivers",
      as: "driver"
    });
  };
  return Route;
};