const express = require('express');
const UserController = require('../controller/UserController');
const TaskController = require('../controller/TaskController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');

const router = new express.Router();

// User Registration
router.post("/registration", UserController.registration);
// router.post("/createUser", AuthVerifyMiddleware, UserController.createUser);
router.post("/login", UserController.login);
router.put("/updateUser/:email", AuthVerifyMiddleware, UserController.updateUser);
router.get("/getUser", AuthVerifyMiddleware, UserController.getUser);


// Task API
router.post("/createTask", AuthVerifyMiddleware, TaskController.createTask);
router.put("/updateTask/:taskId", AuthVerifyMiddleware, TaskController.updateTask);
router.get("/getAllTask", AuthVerifyMiddleware, TaskController.getAllTask);
router.delete("/deleteTask/:taskId", AuthVerifyMiddleware, TaskController.deleteTask);
router.get("/getTaskByStatus/:status", AuthVerifyMiddleware, TaskController.getTaskByStatus);



module.exports = router;