// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message:
      "Enter the title of the project you would like to generate a README file for: ",
    validate: (response) => {
      if (!response) {
        return console.log("This response is required.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "projectDescription",
    message:
      "Enter a description of the project you would like to add to the README file: ",
    validate: (response) => {
      if (!response) {
        return console.log("This response is required.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "projectInstallation",
    message: "Enter the way in which the project was installed: ",
    validate: (response) => {
      if (!response) {
        return console.log("This response is required.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "projectUsage",
    message: "Enter how a user will use the project: ",
    validate: (response) => {
      if (!response) {
        return console.log("This response is required.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "projectLicense",
    message: "Enter the license this project used: ",
    validate: (response) => {
      if (!response) {
        return console.log("This response is required.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "projectContribution",
    message: "Enter they ways in which users could contribute to the project: ",
    validate: (response) => {
      if (!response) {
        return console.log("This response is required.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "projectTesting",
    message: "Enter directions that will allow the user to test the project: ",
    validate: (response) => {
      if (!response) {
        return console.log("This response is required.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "projectEmail",
    message:
      "Enter the email address associated with the creator of the project: ",
    validate: (response) => {
      if (!response) {
        return console.log("This response is required.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "projectGithub",
    message:
      "Enter the Github account associated with the creator of the project: ",
    validate: (response) => {
      if (!response) {
        return console.log("This response is required.");
      } else {
        return true;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}`, data, (err) => {
    if (err) {
      console.error("ERROR: " + err);
    } else {
      console.log("SUCCESS: A UNIQUE README FILE HAS BEEN GENERATED");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile("tester.md", generateMarkdown(data)));
}

// Function call to initialize app
init();
