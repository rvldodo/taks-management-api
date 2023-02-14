const { Tasks } = require("../models");

class TaskService {
	static async findAllTasks() {
		return Tasks.findAll({
			attributes: {
				exclude: ["createdAt", "updatedAt"],
			},
		});
	}

	static async findTaskById(id) {
		return Tasks.findOne({
			where: { id },
			attributes: {
				exclude: ["createdAt", "updatedAt"],
			},
		});
	}

	static async createTask(judul, deskripsi) {
		return Tasks.create({
			judul,
			deskripsi,
		});
	}

	static async deleteTask(id) {
		return Tasks.destroy({ where: { id } });
	}
}

module.exports = TaskService;
