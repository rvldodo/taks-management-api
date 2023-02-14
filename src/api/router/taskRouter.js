const router = require("express").Router();
const TaskController = require("../controller/taskController");

router.get("/tasks", TaskController.getAllTasks);

router.get("/tasks/:id", TaskController.getTaskById);

router.post("/tasks", TaskController.createTask);

router.patch("/tasks/:id", TaskController.updateTask);

router.delete("/tasks/:id", TaskController.deleteTaskById);

module.exports = router;
