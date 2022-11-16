//Function returns a license badge based on which license is passed in if there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "none":
      return ``;
  }
}

//Function renders license link in the README Folder.
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
    case "Apache":
      return `https://opensource.org/licenses/Apache-2.0`;
    case "Mozilla":
      return `https://opensource.org/licenses/MPL-2.0`;
    case "none":
      return ``;
  }
}

// Function renders license type and returns and empty string if none is provided.
let renderLicenseSection = (license) =>
  license !== "none" ? `This project uses the ${license} license` : ``;

function generateReadme(answers) {
  return `
<h1 align="center">${answers.title}</h1>

${renderLicenseBadge(answers.license)} 

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Description
${answers.description}
<br />

## Installation
${answers.installation}
<br />

## Usage
${answers.usage}
<br />

## Credits
${answers.credits}
<br />

## License
${renderLicenseSection(answers.license)}
${renderLicenseLink(answers.license)}
</br>

## Questions
If you have any questions, please email the developer at ${answers.email}
GitHub: https://www.github.com/${data.username}
<br />

<br />
`;
}
module.exports = generateReadme;
