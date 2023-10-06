const express = require("express");
const chalk = require("chalk");
const app = express();
const port = 4000;
const api = "https://api.postalpincode.in/pincode/302019";
const superagent = require("superagent");
const cors = require("cors");

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
  console.log(chalk.inverse.blue(`server is running at port ${port}`));
});
