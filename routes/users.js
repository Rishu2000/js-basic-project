const express = require("express");
const users = require("../constants/users");
const app = express.Router();

app.get("/",(req,res) => {
  res.json(users);
  //res.json(users);
});

module.exports = app;