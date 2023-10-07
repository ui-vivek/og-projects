const express = require("express");
const User = require("../models/User");
const { userController } = require("../controllers/userController");
const router = express.Router();

router.post("/sign-up", userController);

module.exports = router;
