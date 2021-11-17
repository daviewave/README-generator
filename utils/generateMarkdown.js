// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLinks = {
    Apache: `https://opensource.org/licenses/Apache-2.0`,
    Boost: `https://www.boost.org/LICENSE_1_0.txt`,
    BSD: `https://opensource.org/licenses/BSD-3-Clause`,
    "Creative Commons": `http://creativecommons.org/publicdomain/zero/1.0/`,
    Eclipse: `https://opensource.org/licenses/EPL-1.0`,
    GNU: `https://www.gnu.org/licenses/gpl-3.0`,
    MIT: `https://opensource.org/licenses/MIT`,
    Mozilla: `https://opensource.org/licenses/MPL-2.0`,
    None: "",
  };
  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `License for open source use: ${license} 
          For more information, visit: ${renderLicenseLink(license)}        
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ### ${data.projectDescription}


  
  ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  
  ${data.projectInstallation}
  
  ## Usage
  
  ${data.projectUsage}
  
  ## License

  ${renderLicenseSection(data.projectLicense)}

  ## Contributing
  
  ${data.projectContribution}
  
  ## Tests
  
  ${data.projectTesting}
  
  ## Questions
  
  For any more questions, contact at: 
  
  ${data.projectEmail}
  ${data.projectGithub}
`;
}

module.exports = generateMarkdown;
