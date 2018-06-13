"use strict"
const db = require("./database/models");

module.exports = (io) => {

  io.on("connection", socket => {

    socket.on("set id", jsonId => {
      let id = JSON.parse(jsonId);
      socket.driverId = id.driverId;
      socket.routeId = id.routeId;
      initTrip(socket);
    });

    socket.on("location change", jsonCoordinates => {
      let coordinates = JSON.parse(jsonCoordinates);
      db.sequelize.sync().then(() => {
        return db.Coordinate.create({
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          time: Date.now(),
          tripId: socket.tripId
        });
      });
    });

    socket.on("disconnect", () => {
      console.log(`Client with id ${socket.driverId} has disconnected`);
    });
  });
};

let initTrip = (socket) => {
  db.sequelize.sync().then(() => {
    return db.Driver.findById(socket.driverId);
  }).then(driver => {
    if(driver == null) {
      socket.emit("set id response", false);
    } else {
      db.sequelize.sync().then(() => {
        return db.Trip.create({
          driverId: socket.driverId,
          routeId: socket.routeId
        });
      }).then(trip => {
        if(trip == null) {
          console.log(`Connection failed for ${socket.driverId}`);
          socket.emit("set id response", false);
        } else {
          console.log(`Successful connection for ${socket.driverId}`);
          socket.tripId = trip.id;
          socket.emit("set id response", true);
        }
      });
    }
  });
};