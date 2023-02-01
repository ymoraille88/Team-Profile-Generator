const inquirer = require('inquirer');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const fs = require('fs');
const generateTeam = require('./src/page-template');


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

const team = [];

const createEmployee = (type) => {
  const empQuestions = {
    manager: managerQuestion,
    engineer: engineerQuestion,
    intern: internQuestion,
  }
  inquirer.prompt(baseQuestions.concat(empQuestions[type])).then((answers) => {
    // ADD EMPLOYEE TO EMPLOYEE LIST
    // console.log(answers);
    let holder;
    if (answers.officeNumber) {
      holder = answers.officeNumber;
    } else if (answers.school){
      holder = answers.school
    } else {
      holder = answers.github
    }

    const manager = new Manager(answers.name, answers.id, answers.email, holder);
    team.push(manager);
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
            fs.writeFile(path.join(process.cwd(),"dist/team.html"), generateTeam(team), function(err, result) {
              if(err) console.log('error', err);
            })
            
            console.log("have a good day!");
          } else {
            createEmployee(type);
          }
        });
      } else {
        fs.writeFile(path.join(process.cwd(),"dist/team.html"), generateTeam(team))
      
      }
    });
  });
}

const init = () => {
  createEmployee('manager');
};

init();