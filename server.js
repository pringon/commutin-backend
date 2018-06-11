"use strict"
const express    = require("express"),
      app        = express(),
      http       = require("http").Server(app),
      io         = require("socket.io")(http),
      bodyParser = require("body-parser");

// Get port from environment variables or use 3000 as default
app.set("port", process.env.PORT || 3001);

// Request parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing initialisation
//require("./app/routes")(app);

// Server-side websocket initialisation
require("./app/sockets")(io);

// Start the server and listen on the given port
http.listen(app.get("port"), (err) => {
  if(err) {
    console.err(err);
  }
  console.log(`App is listening on port ${app.get("port")}`);
});
