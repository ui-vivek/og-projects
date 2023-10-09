const User = require("../models/User");

//Register user
exports.userController = async (req, res, next) => {
  try {
    if (req.body && req.body != "") {
      const { userName, email, phoneNumber, password } = req.body;
      const newUser = User({ userName, email, phoneNumber, password });

      //check if user/email is already registered
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.send("User is already registered");
      }
      await newUser.save();
      return res.status(200).send("User Created");
    }
  } catch (error) {
    console.log("Internal Server Error", error);
    return res.status(500).send("Internal server error");
  }
};
