const express = require("express");
const chalk =require('chalk')
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(chalk.inverse.blue(`server is running at port ${port}`));
});
