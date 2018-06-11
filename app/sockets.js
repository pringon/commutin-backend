"use strict"

module.exports = (io) => {

  io.on("connection", socket => {

    socket.on("set id", id => {
      socket.id = id;
      console.log(`Client with id ${id} has connected.`);
    });

    socket.on("location change", coordinates => {
      coordinates = JSON.parse(coordinates);
      console.log(`Client's latitude is ${coordinates[0]} and longitude is ${coordinates[1]}`);
    });

    socket.on("disconnect", () => {
      console.log(`Client with id ${socket.id} has disconnected`);
    });
  });
};
