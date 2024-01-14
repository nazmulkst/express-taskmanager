const express = require('express');
const UserController = require('../controller/UserController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');

const router = new express.Router();

// User Registration
router.post("/registration", UserController.registration);
// router.post("/createUser", AuthVerifyMiddleware, UserController.createUser);
router.post("/login", UserController.login);
router.put("/updateUser/:email", AuthVerifyMiddleware, UserController.updateUser);
router.get("/getUser/:email", AuthVerifyMiddleware, UserController.getUser);

module.exports = router;