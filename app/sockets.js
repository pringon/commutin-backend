"use strict"

module.exports = (io) => {

  io.on("connection", socket => {

    socket.on("set id", id => {
      socket.id = id;
      console.log(`Client with id ${id} has connected.`);
    });

    socket.on("location change", jsonCoordinates => {
      let coordinates = JSON.parse(jsonCoordinates);
      console.log(`Client's latitude is ${coordinates.latitude} and longitude is ${coordinates.longitude}`);
    });

    socket.on("disconnect", () => {
      console.log(`Client with id ${socket.id} has disconnected`);
    });
  });
};