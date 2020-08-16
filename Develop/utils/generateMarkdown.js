// function to generate markdown for README

function generateMarkdown(data) {
  return `
  
  # ${data.projectName}

  ${data.badge}

## Table of Contents
- [Description of Project](#desc)  
- [Installation](#dependencies) 
- [Usage](#usage) 
- [License](#license) 
- [Contribute to this repository](#contrib)
- [How to test](#tests) 
- [Usage/Purpose](#usage) 
- [Questions/Contact the Author](#email) 


## Description of Project


${data.desc}

<a name="desc"></a>


## Installaton dependencies
 

${data.dependencies}

<a name="dependencies"></a>

## Usage

<a name="usage"></a>

## License

${data.license}

<a name="license"></a>

## Contribute to this repository

${data.contrib}

<a name="contrib"></a>

## How to run tests

${data.tests}

<a name="tests"></a>

## About the Author/Any Questions?:

Github:

<a name="user"></a>


[${data.user}
](https://github.com/${data.user})


Email:


${data.email}


Want to contribute to this repo?


${data.repo}
<a name="repo"></a>


`;
}

module.exports = generateMarkdown;
