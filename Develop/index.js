const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
    name: "tests",
    message: "What command should be run to perform tests?",
    default: "node index.js",
  },
  {
    type: "input",
    name: "repo",
    message: "What does the user need to know about the repository?",
  },
  {
    type: "input",
    name: "contrib",
    message: "What does contributing to the repository?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
async function init() {
  await inquirer.prompt(questions).then(function (response) {
    console.log("Success!");
    console.log(response.user);
    console.log(response.email);
    console.log(response.projectName);
    console.log(response.desc);
    console.log(response.license);
    console.log(response.dependencies);
    console.log(response.tests);
    console.log(response.repo);
    console.log(response.contrib);
    let markdown = generateMarkdown(response);
    console.log(markdown);
  });
  // console.log("test");
}

// function call to initialize program
init();
