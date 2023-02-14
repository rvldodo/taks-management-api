const TaskService = require("../service/taskService");

class TaskController {
	static async getAllTasks(req, res, next) {
		try {
			const tasks = await TaskService.findAllTasks();

			if (!tasks) {
				return res.json({ message: "Tasks not found" }).status(404);
			}

			return res.json(tasks);
		} catch (err) {
			console.log(err);
			next(err);
		}
	}

	static async getTaskById(req, res, next) {
		try {
			const { id } = req.params;

			const task = await TaskService.findTaskById(id);

			if (!task) {
				return res.json({ message: "Task with this id not found" }).status(404);
			}

			return res.json(task);
		} catch (err) {
			console.log(err);
			next(err);
		}
	}

	static async createTask(req, res, next) {
		try {
			const { judul, deskripsi } = req.body;

			if (!judul || !deskripsi) {
				return res.json({ message: "Fill all the fields " }).status(400);
			}

			const task = await TaskService.createTask(judul, deskripsi);

			return res.json({ message: "Successfully created task", task });
		} catch (err) {
			console.log(err);
			next(err);
		}
	}

	static async updateTask(req, res, next) {
		try {
			const { id } = req.params;
			const { judul, deskripsi, selesai } = req.body;

			const oldTask = await TaskService.findTaskById(id);

			if (!oldTask) {
				return res.json({ message: "Task with this id not found" });
			}

			oldTask.judul = judul;
			oldTask.deskripsi = deskripsi;
			oldTask.selesai = selesai;

			const newTask = await oldTask.save();

			return res.json({ message: "Successfully updated task", task: newTask });
		} catch (err) {
			console.log(err);
			next(err);
		}
	}

	static async deleteTaskById(req, res, next) {
		try {
			const { id } = req.params;

			const deleted = await TaskService.deleteTask(id);

			if (!deleted) {
				return res.json({ message: "Cannot deleted task" });
			}

			return res.json({ message: "Task deleted" });
		} catch (err) {
			console.log(err);
			next(err);
		}
	}
}

module.exports = TaskController;
