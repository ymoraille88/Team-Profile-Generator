const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const fs = require('fs');
const generateTeam = require('./template');
const { inherits } = require('util');

const baseQuestions = [
  {
    type: 'input',
    message: 'What is the employee\'s name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the employee\'s ID Number?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is the employee\'s Email?',
    name: 'email',
  },
];

const managerQuestion = {
  type: 'input',
  message: 'Please provide the officeNumber.',
  name: 'officeNumber',
};

const engineerQuestion = {
  type: 'input',
  message: 'Please provide the gitHub login name.',
  name: 'gitHub',
};

const internQuestion = {
  type: 'input',
  message: 'Please provide the school name.',
  name: 'schoolName',
};

const createEmployee = (type) => {
  const empQuestions = { 
    manager: managerQuestion,
    engineer: engineerQuestion,
    intern: internQuestion,
  }
  inquirer.prompt(baseQuestions.concat(empQuestions[type])).then((answers) => {
    // ADD EMPLOYEE TO EMPLOYEE LIST
    // console.log(answers);
    inquirer.prompt({
      name: 'addAnother',
      type: 'confirm',
      message: 'would you like to add another employee',
    }).then(({ addAnother }) => {
      if (addAnother) {
        inquirer.prompt({
          type: 'rawlist',
          name: 'type',
          message: 'What kind of employee would you like to add?',
          choices: [
            { name: 'Engineer', value: 'engineer' },
            { name: 'Intern', value: 'intern' },
            { name: 'Exit', value: 'exit' },
          ]
        }).then(({ type }) => {
          if (type === 'exit') {
            // WRITE TO FILE
          } else {
            createEmployee(type);
          }
        });
      } else {
        // WRITE TO FILE
      }
    });
  });
}

const init = () => {
  createEmployee('manager');
};

init();