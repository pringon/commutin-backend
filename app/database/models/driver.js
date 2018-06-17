'use strict';
module.exports = (sequelize, DataTypes) => {
  var Driver = sequelize.define('driver', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    gender: DataTypes.SMALLINT
  }, {});
  Driver.associate = function(models) {
    Driver.belongsTo(models.company);
    Driver.belongsToMany(models.route, {
      through: "route_drivers",
      as: "route"
    });
  };
  return Driver;
};