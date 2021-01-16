//You need to type "npm run rishav" not "npm rishav"
const express = require("express");
const root = require("./routes/root");
const app = express();
const port = 5000;
const todos = ["Milk","Curd","Sugar"];

app.use("/",root);

app.listen(port,() => {
  console.log(`Server started at port ${port}.`);
});