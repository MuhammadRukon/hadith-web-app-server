const express = require("express");
const app = express();
const applyMiddleware = require("./middlewares/applyMiddleware");
const handleNotFound = require("./middlewares/handleNotFound");
const handleError = require("./middlewares/handleError");

applyMiddleware(express, app);


app.get("/", (req, res) => {
  res.send("root route");
});

app.get("/health", (req, res) => {
    res.send("HadithKhujo server running");
  });

app.all("*", handleNotFound);
app.use(handleError);


module.exports = app;
