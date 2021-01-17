const express = require("express");
const todos = require("../constants/todos")
const app = express.Router();

app.get("/",(req,res) => {
  res.json(todos);
});

module.exports = app;