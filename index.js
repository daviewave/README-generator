// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    info: "Enter the title of the project you would like to generate a README file for: ",
  },
  {
    type: "input",
    name: "projectDescription",
    info: "Enter a description of the project you would like to add to the README file: ",
  },
  {
    type: "input",
    name: "projectInstallation",
    info: "Enter the way in which the project was installed: ",
  },
  {
    type: "input",
    name: "projectUsage",
    info: "Enter how a user will use the project: ",
  },
  {
    type: "input",
    name: "projectLicense",
    info: "Enter the license this project used: ",
  },
  {
    type: "input",
    name: "projectContribution",
    info: "Enter they ways in which users could contribute to the project: ",
  },
  {
    type: "input",
    name: "projectTesting",
    info: "Enter directions that will allow the user to test the project: ",
  },
  {
    type: "input",
    name: "projectEmail",
    info: "Enter the email address associated with the creator of the project: ",
  },
  {
    type: "input",
    name: "projectGithub",
    info: "Enter the Github account associated with the creator of the project: ",
  },
];
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
