'use strict';
module.exports = (sequelize, DataTypes) => {
  var StopTime = sequelize.define('stopTime', {
    arrivalHour: DataTypes.SMALLINT,
    arrivalMinute: DataTypes.SMALLINT,
    arrivalSecond: DataTypes.SMALLINT,
    delayToDeparture: DataTypes.INTEGER,
    sequence: DataTypes.SMALLINT
  }, {});
  StopTime.associate = function(models) {
    StopTime.belongsTo(models.trip);
    StopTime.belongsTo(models.stop);
  };
  return StopTime;
};