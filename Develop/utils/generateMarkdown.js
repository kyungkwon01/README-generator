function generateMarkdown(questions) {
	return `# ${questions.title}
  ## Description
  ${questions.description}
  ## Table of Contents
  * [Installation](#Installation "Goto Installation")
  * [Usage](#Usage "Goto Usage")
  * [Collaborators](#Collaborators "Goto Collaborators")
  * [Credits](#Credits "Goto Credits")
  * [Tests](#Tests "Goto Tests")
  * [License](#License "Goto License")
  ## Installation
  ${questions.installation}
  ## Usage
  ${questions.usage}
  ## Collaborators
  ${questions.collaborators}
  ## Contributing
  ${questions.contributing}
  ## Tests
  ${questions.tests}
  ## License
  ${badge}<br>
  License: ${questions.license}
  ## Questions
  For additional questions you can reach me by<br>
  Email: ${questions.email} or <br>
  GitHub: <a href="https://github.com/${questions.username}">https://github.com/${questions.username}</a><br>
  
`;
}

module.exports = generateMarkdown;
