// Dependencies and variables required for this application
const utils = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme");
const fs = require("fs");
const writeFileAsync = utils.promisify(fs.writeFile);

// Prompt the user to answer questions from the array object that will populate into README.md
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Please enter your Github Username: ",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: ",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? ",
    },
    {
      type: "input",
      name: "credits",
      message: "Who else is credited with the development of this application?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a brief description of your project: ",
    },
    {
      type: "input",
      name: "installation",
      message: "Please write instructions on how to install your application: ",
    },
    {
      type: "input",
      name: "usage",
      message: "Please write instructions on how to use your application: ",
    },
    {
      type: "list",
      name: "license",
      message: "Choose the appropriate license for this project: ",
      choices: ["MIT", "Apache 2.0", "Mozilla", "none"],
    },
    {
      type: "input",
      name: "contribute",
      message: "How can others contribute to your application? ",
    },
  ]);
}

async function init() {
  try {
    // Ask user questions and generate responses
    const answers = await promptUser();
    const generateContent = generateReadme(answers);
    //Write new README.md file to dist. directory
    await writeFileAsync("./dist/README.md", generateContent);
    console.log("✔️  Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
