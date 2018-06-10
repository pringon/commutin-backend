"use strict"

module.exports = (io) => {

  io.on("connection", socket => {

    socket.on("set id", id => {
      socket.id = id;
      console.log(`Client with id ${id} has connected.`);
    });
  });
};
