"use strict"

module.exports = (io) => {

  io.on("connection", socket => {

    socket.on("set id", id => {
      socket.id = id;
    })

    socket.on("send data", data => {
      console.log(`User with id ${socket.id} send message ${data}`);
      let reversedData = data.split('').reverse().join('');
      socket.emit("response", reversedData);
    });
  });
};
