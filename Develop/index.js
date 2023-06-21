// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import util from "util";

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
	{
		type: "input",
		message: "What is the project title?",
		name: "Title",
	},
	{
		type: "input",
		message: "What is the description of the project?",
		name: "Description",
	},
	{
		type: "input",
		message: "How do we install the project?",
		name: "Installation",
	},
	{
		type: "input",
		message: "What is the usage of the project?",
		name: "Usage",
	},
	{
		type: "input",
		message: "How do we contribute to the project?",
		name: "Contributing",
	},
	{
		type: "list",
		message: "Do you have a liscense?",
		choices: ["Eclipse", "apache-2.0", "GPLv3", "wtfpl", "N/A"],
		name: "liscense",
	},
	{
		type: "input",
		message: "How do we test the project?",
		name: "Test",
	},
	{
		type: "input",
		message: "Add your Github name here.",
		name: "Questions",
	},
	{
		type: "input",
		message: "Add your Email address here.",
		name: "Email",
	},
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, generateMarkdown(data), () => {
		console.log("README.md Generated!");
	});
}

// TODO: Create a function to initialize app
async function init() {
	try {
		const promptData = await inquirer.prompt(questions);
		const readMeData = { ...promptData };
		const { username } = promptData;
		const githubUser = await api.getUser(username);
		const { email, avatar_url } = githubUser.data;
		const newReadMeData = {
			...readMeData,
			email: email,
			avatar: avatar_url,
		};
		writeToFile("README.md", newReadMeData);
	} catch (err) {
		throw err;
	}
}

// Function call to initialize app
init();
