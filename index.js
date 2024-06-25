// TODO: Include packages needed for this application
//inquirer and fs
const inquirer=require('inquirer');
const fs=require('fs');

// TODO: Create an array of questions for user input
const questions =  [ //prompt(questions)
    {
        type: "input",
        message: 'What is the title of your ReadMe?',
        name: 'title'
    },
{ 
    type: "input",
    message: 'Prove a description for your project.',
    name: 'description'
  },
  {
    type: "input",
    message: 'Prove the instructions for installing.',
    name: 'installation'
},
 {
    type: "input",
    message: 'Prove usage information.',
    name: 'usage'
 },
 {
    type: "input",
    message: 'Have guidelines for contributions',
    name: 'contributing'
 },
 {
    type: "input",
    message: 'Provide test instructions.',
    name: 'test'
 },
 {
    type: "list",
    message: 'Choose a license for your project',
    name: 'license',
    choices: ['Apache', 'Boost', 'BSD 3', ] //some examples of license
 },
 {
    type: "input",
    message: 'Enter GitHub username',
    name: 'github'
 },
 {
    type: "input",
    message: 'Enter email address',
    name: 'email'
}
]

//add inquirer prompt with input and list
inquirer
.prompt(questions)
// TODO: Create a function to write README file
.then ((response) => {
    console.log('response object', response)
    fs.writeFile('README.md', page = `
# ${response.title}

${renderLicenseBadge(response.license)}

## Description
${response.description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#test)
- [License](#license)
- [GitHub](#github)
- [Email](#email)

       
 ## Installation Instructions 
${response.installation}
 ## Usage Information 
${response.usage}
 ## Guidelines for Contribution 
${response.contributing}
 ## Test Instructions 
${response.test}
 ## License 
${response.license}
 ## GitHub 
Here is the link to my GitHub <https://www.github.com/${response.github}>
 ## Email
Contact Me: <mailto:${response.email}>
`,(error) =>
        error ? console.error(error): console.log('Successfully created a README.md !'))
})
//adding license badge
function renderLicenseBadge(license) {
    let licenseType = license; 
    let yourLicense = ''
    if(licenseType === 'Apache') {
      yourLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (licenseType === 'Boost') {
      yourLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    } else if (licenseType === 'BSD 3') {
      yourLicense = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else {
      license.license = "N/A"
    }
    return yourLicense;
  };
  
  function generateMarkdown(data) {
   
  return `# ${data.title} 
   ## license 
  renderLicenseBadge(license) 
  `
  }
  

// TODO: Create a function to initialize app
function init() {
   
}

// Function call to initialize app
init();
