const express = require("express");
const User = require("../models/User");
const {
  userController,
  userSignInController,
} = require("../controllers/userController");
const router = express.Router();

router.post("/sign-up", userController);
router.post("/sign-in", userSignInController);

module.exports = router;
