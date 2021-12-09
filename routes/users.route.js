const usersController = require("../controllers/users.controller");

const express = require("express");

const router = express.Router();

// router.post("/login", usersController.login);

router.post("/register", usersController.register);

module.exports = router;
