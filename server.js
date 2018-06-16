"use strict"
const express        = require("express"),
      app            = express(),
      http           = require("http").Server(app),
      io             = require("socket.io")(http),
      expressLayouts = require("express-ejs-layouts"),
      flash          = require("connect-flash"),
      cookieParser   = require("cookie-parser"),
      bodyParser     = require("body-parser");

// Get port from environment variables or use 3000 as default
app.set("port", process.env.PORT || 3001);

// Request parsing middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up asset/view serving and view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: "layout.ejs" });
app.use('/', express.static(__dirname + "/assets"));
app.use(expressLayouts);

// Set up flash package
app.use(flash());

// Routing initialisation
require("./app/routes")(app);

// Server-side websocket initialisation
require("./app/sockets")(io);

// Start the server and listen on the given port
http.listen(app.get("port"), (err) => {
  if(err) {
    console.err(err);
  }
  console.log(`App is listening on port ${app.get("port")}`);
});
