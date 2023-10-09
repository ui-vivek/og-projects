const express = require("express");
const chalk = require("chalk");
const app = express();
const dotenv = require("dotenv").config();
const port = 4000;
const mongoose = require("mongoose");
const superagent = require("superagent");
const cors = require("cors");
const bodyParser = require("body-parser");

const apiResponse = require("./routes/testRout.js");
const createUser = require("./routes/UserRout.js");

app.use(cors());

//request the body in JSON fromat
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routs

// app.use("/get", apiResponse); //for testing
app.use("/user", createUser);

// DB connection
const ConnectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(chalk.inverse.green("DataBase Connected"));
  } catch (error) {
    console.log(chalk.inverse.red("Can NOt Connect To DataBase", error));
  }
};

app.listen(port, () => {
  ConnectDataBase();
  console.log(chalk.inverse.blue(`server is running at port ${port}`));
});
