const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "user",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "desc",
    message: "Please write a short description of your project:",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license should your project have?",
    choices: ["MIT", "Mozilla", "GNU LGPLv3"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "Suggested usage of this application:",
    default: "Create a professional looking README quickly!",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to perform tests?",
    default: "npm start",
  },
  {
    type: "input",
    name: "repo",
    message: "What does the user need to know about the repository?",
  },
  {
    type: "input",
    name: "contrib",
    message: "Important info for contributing to this repo?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function setLicense(chosen) {
  let badge = "";
  switch (chosen) {
    case "MIT":
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Mozilla":
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "GNU LGPLv3":
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
  }
  return badge;
  //"MIT", "Mozilla", "GNU LGPLv3"
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    console.log("Success!");
    console.log(response.user);
    console.log(response.email);
    console.log(response.projectName);
    console.log(response.desc);
    console.log(response.license);
    console.log(response.dependencies);
    console.log(response.usage);
    console.log(response.tests);
    console.log(response.repo);
    console.log(response.contrib);
    response.badge = setLicense(response.license);
    writeToFile("README.md", generateMarkdown({ ...response }));
  });
  // console.log("test");
}

// function call to initialize program
init();
