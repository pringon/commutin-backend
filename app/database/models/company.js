'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('company', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    timezone: DataTypes.SMALLINT,
    lang: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    Company.hasMany(models.driver);
    Company.hasMany(models.route);
  };
  return Company;
};