const User = require("../models/User");

exports.userController = async (req, res, next) => {
  try {
    if (req.body && req.body != "") {
      const { userName, email, phoneNumber, password } = req.body;
      const newUser = User({ userName, email, phoneNumber, password });
      await newUser.save();
      return res.status(200).send("User Created");
    }
  } catch (error) {
    console.log("Internal Server Error", error);
    return res.status(500).send("Internal server error");
  }
};
