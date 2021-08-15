"use strict";

const express = require("express");
const app = express();
const notFoundHandler = require("./handlers/404.js");
const serverErrorHandler = require("./handlers/500.js");

app.get("/", (req, res) => {
  res.status(200).send("All Good :)");
});

app.get("/data", (req, res) => {
  let dataObject = {
    name: "khaled",
    age: 24,
    date: new Date().toString(),
  };
  res.status(200).json(dataObject);
});

app.get("/bad", (req, res, next) => {
  next("error from bad end point");
});

app.use("*", notFoundHandler);
app.use(serverErrorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Listining On Port ${port}...`);
  });
}

module.exports = {
  start,
  app
};
