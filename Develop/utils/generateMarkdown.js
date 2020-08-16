// function to generate markdown for README

function generateMarkdown(data) {
  return `
  
  # ${data.projectName}

  ${data.badge}

## Table of Contents
- [Description of Project](#description-of-project)  
- [Installation](#installation) 
- [Usage](#usage) 
- [License](#license) 
- [Contribute to this repository](#contribute-to-this-repository)
- [How to run tests](#how-to-run-tests) 
- [Questions/Contact the Author](#questions/contact-the-author) 



## Description of Project


    ${data.desc}


## Installation


    ${data.dependencies}



## Usage


    ${data.usage}



## License


    ${data.license}



## Contribute to this repository


    ${data.contrib}

Want to contribute to this repo?
    Github:  [${data.user}](https://github.com/${data.user})


${data.repo}




## How to run tests


    ${data.tests}



## Questions/Contact the Author

If you would like to contact me directly I can be reached here

Email:


${data.email}

To see more of my work on GitHub:

[${data.user}
](https://github.com/${data.user})


`;
}

module.exports = generateMarkdown;
