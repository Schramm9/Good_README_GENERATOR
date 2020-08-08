// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
   ${data.projectName}

`;
}

module.exports = generateMarkdown;
