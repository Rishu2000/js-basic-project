const express = require("express");
const users = require("../constants/users");
const app = express.Router();

app.get("/",(req,res) => {
  res.json(users.map((n,userID) => {
    const a = {userID,...n};
    delete a.Password;
    return a;
  }));
});
app.get("/:id",(req,res) => {
  const userID = +req.params.id;
  if (users[userID]) {
    const a = {userID,...users[userID]};
    delete a.Password;
    res.json(a);
  }else{
    res.status(404).json("Error, Can not find User.")
  }
});

module.exports = app;