"use strict"
const express = require("express"),
      app     = express();

app.set("port", 3000);

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.listen(app.get("port"), (err) => {
  if(err) {
    console.err(err);
  }
  console.log(`App is listening on port ${app.get("port")}`);
});
