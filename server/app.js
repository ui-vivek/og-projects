const express = require("express");
const chalk = require("chalk");
const app = express();
const dotenv = require("dotenv").config();
const port = 4000;
const mongoose = require("mongoose");
const api = "https://api.postalpincode.in/pincode/302019";
const superagent = require("superagent");
const cors = require("cors");

// DB connection
const ConnectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(chalk.inverse.green("DataBase Connected"));
  } catch (error) {
    console.log(chalk.inverse.red("Can NOt Connect To DataBase", error));
  }
};

app.use(cors());

app.get("/", async (req, res) => {
  try {
    console.log("server is running");

    const response = await superagent.get(api);
    const responseData = JSON.parse(response.text);

    // Send the API data as a response to the web browser.
    res.json(responseData);
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  ConnectDataBase();
  console.log(chalk.inverse.blue(`server is running at port ${port}`));
});
