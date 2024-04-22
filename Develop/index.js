// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors');
const svgGenerator = require('./utils/svgGenerator');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter the text you want on your logo (3)',
    name:'svgText',
    default: 'SVG',
    validate: ((answer)=>{
      if( answer.length > 3 ){
        return console.log(' Please select text not more than 3 characters!! ')
      }
      return true;
    })
  },
  {
    type: 'list',
    message: 'which color would you like the text to be?',
    name:'textColor',
    choices: ["red", "blue", "green", "yellow", "cyan", "magenta"]
  },
  {
    type: 'list',
    message: 'Which shape would you like your logo to be??',
    name:'logoShape',
    choices: ['circle', 'square', 'triangle']
  },
  {
    type: 'list',
    message: 'Which color would you like the shape to be??',
    name:'shapeColor',
    choices: ["red", "blue", "green", "yellow", "cyan", "magenta"]
  },
  
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) =>{
    err ? console.error(err) : console.log('Generated logo.svg')
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log('Initialization of the application....');

    inquirer.prompt(questions).then((response) =>{
      console.log(response)
      writeToFile('logo.svg', svgGenerator({...response}))

  })
  
}

// Function call to initialize app
init();
