const express = require("express");
const users = require("../constants/users");
const app = express.Router();

app.get("/",(req,res) => {
  let {Authentacation} = req.session;
  if (Authentacation) {
  res.json(users.map((n,userID) => {
    const a = {userID,...n};
    delete a.Password;
    return a;
  }));
  }else{
    res.status(403).json("Please login to see.");
  }
});
app.get("/login",(req,res) => {
  let {Authentacation} = req.session;
  console.log("get");
  res.json({Authentacation});
});
app.post("/login",(req,res) => {
  let {Authentacation} = req.session;
  const {Username,Password} = req.body;
  console.log("post");
  if (!Username || !Password) {
    //res.json({Username,Password});
    res.status(400).json("Please enter both.");
  }else{
    const matched = users.filter(u => u.Username.toLowerCase() === Username.toLowerCase() && u.Password === Password);
    if (matched.length === 1) {
      const user = {...matched[0]};
      delete user.Password;
      req.session.Authentacation = user;
      res.json({Success : true});
    }else if (matched.length === 0) {
      req.session.destroy(() => {
      res.status(401).json("Oops Bad Credentials");
      });
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