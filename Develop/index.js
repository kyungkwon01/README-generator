// import required modules

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// init() function including the questions for the inquirer prompt and writeToFile function

function init() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "title",
				message: "Project Title:",
			},

			{
				type: "input",
				name: "description",
				message: "Description:",
			},

			{
				type: "input",
				name: "installation",
				message: "Installation:",
			},

			{
				type: "input",
				name: "usage",
				message: "Usage:",
			},

			{
				type: "input",
				name: "collaborators",
				message: "Collaborators:",
			},

			{
				type: "input",
				name: "contributing",
				message: "Contribute:",
			},

			{
				type: "input",
				name: "tests",
				message: "Test:",
			},

			{
				type: "input",
				name: "username",
				message: "GitHub UserName:",
			},

			{
				type: "input",
				name: "email",
				message: "Email:",
			},

			{
				type: "list",
				message: "Please choose a corresponding license from list below:",
				name: "license",
				choices: [
					"Apache 2.0 License",
					"BSD 3-Clause License",
					"ISC License (ISC)",
					"The MIT License",
					"The Unlicense",
				],
			},
		])
		.then(function (response) {
			if (response.license == "The MIT License") {
				badge =
					"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
			} else if (response.license == "Apache 2.0 License") {
				badge =
					"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
			} else if (response.license == "BSD 3-Clause License") {
				badge =
					"[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
			} else if (response.license == "ISC License (ISC)") {
				badge =
					"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
			} else if (response.license == "The Unlicense") {
				badge =
					"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
			}

			writeToFile(response);
		});
}

// writeToFile(response) function utilizing fs module to write a new file

function writeToFile(response) {
	fs.writeFile("README.md", generateMarkdown(response), (err) => {
		if (err) {
			console.log(err);
			return console.log(err);
		}
		console.log("Success creating README");
	});
}

// initiating init() function

init();
