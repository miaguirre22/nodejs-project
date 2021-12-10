const usersController = require("../controllers/users.controller");

const express = require("express");

const router = express.Router();

router.post("/login", usersController.login);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
router.post("/register", usersController.register);

module.exports = router;
