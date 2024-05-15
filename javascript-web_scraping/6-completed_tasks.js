#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) => {
	if(error) {
		console.error(`Error: ${error}`);
	} else {
		const tasks = JSON.parse(body);
		const completedTasks = {};

		tasks.forEach((tasks) => {
			if (task.completed) {
				if (completedTasks[task.userId]) {
					completedTasks[task.userId]++;
				} else {
					completedTasks[task.userId] = 1;
				}
			}
		});
		console.log(completedTasks);
	}
});
