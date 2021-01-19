const express = require("express");
const users = require("../constants/users");
const app = express.Router();
let Authentacation = true;

app.use(express.json());

app.get("/",(req,res) => {
  res.json(users.map((n,userID) => {
    const a = {userID,...n};
    delete a.Password;
    return a;
  }));
});
app.get("/login",(req,res) => {
  console.log("get");
  res.json({Authentacation});
});
app.post("/login",(req,res) => {
  const {Username,Password} = req.body;
  console.log("post");
  if (!Username || !Password) {
    //res.json({Username,Password});
    res.status(400).json("Please enter both.");
  }else{
    const matched = users.filter(u => u.Username.toLowerCase() === Username.toLowerCase() && u.Password === Password);
    if (matched.length === 1) {
      Authentacation = true;
      res.json({Success : true});
    }else if (matched.length === 0) {
      Authentacation = false;
      res.status(401).json("Oops Bad Credentials");
    }
  }
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