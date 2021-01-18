const express = require("express");
const users = require("./users");
const todos = require("./todos");
const app = express.Router();

app.get("/",(req,res) => {
  if (req.headers["user-agent"].toLowerCase().indexOf("postman")>-1) {
    res.json("Hey, there Developer.")
  }else{
  res.json("Welcome to API.");
}
});
app.use("/users/",users);
app.use("/todos/",todos);

module.exports = app;