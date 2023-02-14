"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.bulkInsert("Tasks", [
			{
				id: 0,
				judul: "Tasks 1",
				deskripsi:
					"Ea cupidatat do ea dolor ullamco veniam culpa deserunt sit exercitation enim esse minim. Dolor ipsum ullamco anim elit qui nostrud. Esse irure voluptate cillum magna minim consequat ex proident elit cupidatat laboris. Excepteur amet consectetur nostrud consequat duis dolor quis. Duis minim nostrud sunt commodo Lorem minim. Sunt Lorem non irure eu labore.",
				selesai: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete("Tasks", null, {});
	},
};
