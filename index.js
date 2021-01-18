//You need to type "npm run rishav" not "npm rishav"
const express = require("express");
const morgan = require("morgan");
const root = require("./routes/root");
const app = express();
const port = 5000;
const todos = ["Milk","Curd","Sugar"];

app.use((req,res,next) => {               //Custom Middleware.
  console.log("First middleware");
  next();
});
app.use(morgan("dev"));
app.use("/",root);

app.listen(port,() => {
  console.log(`Server started at port ${port}.`);
});