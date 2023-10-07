const express = require("express");
const superagent = require("superagent");
const TestDB = require("../models/TestDb");
const api = "https://api.postalpincode.in/pincode/302019";

const router = express.Router();

// router.get("/api", async (req, res, next) => {
//   try {
//     const response = await superagent.get(api);
//     const responseData = JSON.parse(response.text);
//     //send API data to web as a response
//     res.send(responseData);
//   } catch (error) {
//     console.log("Error fethching data from API : ", error);
//     res.status(500).send("Internal server error");
//   }
// });

// router.post("/api", async (req, res, next) => {
//   try {
//     if (req.body.code != "") {
//       const response = await superagent.get(
//         `https://api.postalpincode.in/pincode/${req.body.code}`
//       );
//       const responseData = JSON.parse(response.text);
//       //send to web
//       res.send(responseData);
//     }
//   } catch (error) {
//     console.log("Internal Server Error", error);
//   }
// });

router.post("/testdb", async (req, res, next) => {
  try {
    if (req.body.user != "") {
      const NewUser = new TestDB(req.body);
      await NewUser.save();
      //   const { user } = req.body;
      //   await TestDB.create({ user });
      return res.send("User Created");
    } else {
      return res.send("This is not correct ");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error: " + error);
  }
});

module.exports = router;
