// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message:
      "Enter the title of the project you would like to generate a README file for: ",
  },
  {
    type: "input",
    name: "projectDescription",
    message:
      "Enter a description of the project you would like to add to the README file: ",
  },
  {
    type: "input",
    name: "projectInstallation",
    message: "Enter the way in which the project was installed: ",
  },
  {
    type: "input",
    name: "projectUsage",
    message: "Enter how a user will use the project: ",
  },
  {
    type: "input",
    name: "projectLicense",
    message: "Enter the license this project used: ",
  },
  {
    type: "input",
    name: "projectContribution",
    message: "Enter they ways in which users could contribute to the project: ",
  },
  {
    type: "input",
    name: "projectTesting",
    message: "Enter directions that will allow the user to test the project: ",
  },
  {
    type: "input",
    name: "projectEmail",
    message:
      "Enter the email address associated with the creator of the project: ",
  },
  {
    type: "input",
    name: "projectGithub",
    message:
      "Enter the Github account associated with the creator of the project: ",
  },
];
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions);
}

// Function call to initialize app
init();
