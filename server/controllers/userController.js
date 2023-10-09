const User = require("../models/User");
const bcryptjs = require("bcryptjs");

//Sign-Up user
exports.userController = async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.body && req.body != "") {
      let { name, email, phoneNumber, password } = req.body;
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(password, salt);
      console.log(password);
      console.log(hashPassword);
      password = hashPassword;
      const newUser = User({ name, email, phoneNumber, password });

      // Check if user/email is already registered
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User is already registered" });
      }

      // If new user, then save to the database
      // localStorage.setItem("isLogedIn", "true");
      await newUser.save();
      return res.status(201).json({ message: "User Created" });
    }
  } catch (error) {
    console.log("Internal Server Error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//Sign-In user
exports.userSignInController = async (req, res, next) => {
  try {
    if (req.body && req.body != "") {
      const { email, password } = req.body;
      console.log(email, password);

      // Check user exits
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "User not fond" });
      }
      // check password
      const conformPassword = await bcryptjs.compare(password, user.password);
      if (!conformPassword) {
        return res.status(400).json({ error: "Password Not Match" });
      }

      // return res.status(201).send("Login Successful");
      return res.status(201).json({ message: "User SignIn" });
    }
  } catch (error) {
    console.log("Error While Sign-in");
    return res.status(500).send("Can Not Sign-in" + error);
  }
};
