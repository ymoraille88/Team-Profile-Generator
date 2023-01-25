const inquirer = require('inquirer');



const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const fs = require('fs');
const generateTeam = require('./template');



inquirer
    .prompt([

        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please provide your name');
                    return false;

                }
            }
        },
        {
            type: 'input',
            message: 'What is your ID Number?',
            name: 'id',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please provide your Id Number');
                    return false;

                }
            }
        },
        {
            type: 'input',
            message: 'What is your Email?',
            name: 'email',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please provide your Email');
                    return false;

                }
            }
        },
        {
            type: 'input',
            message: 'What is your GitHub?',
            name: 'email',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please provide your GitHub');
                    return false;

                }
            }
        },
        {
            type: 'List',
            message: 'What is your title?',
            list: ['Engineer', 'Intern', 'Manager',],
            name: title,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please provide your title');
                    return false;

                }
            }
        }
    ]);

const createEmployee = () => {
    const prompt = inquirer.createPromptModule();
    prompt([
        {
            message: 'Input Employee Name',
            name: 'name',
        },
        {
            message: 'Input Employee id',
            name: 'id',
        },
        {
            message: 'Input Employee email',
            name: 'name',
        }

    ])
        .then((response) => {
            const employee = new Employee(response.name, response.id, response.email)

            fs.appendFile('./dist/team.html', employee.employeeHtml(response.name, response.id, response.email)),
                function (error) {
                    if (response.name === '' || typeof response.name !== 'string') {
                        console.log('input a valid name');
                        throw error;
                    }
                    if (response.id === '' || typeof Number(response.id) !== 'number') {
                        console.log('input a valid id');
                        throw error;
                    }
                    if (response.email === '' || typeof response.email !== 'string') {
                        console.log('input a valid email');
                        throw error;
                    }
                }
            const engineer = new Engineer(response.name, response.id, response.email, response.gitHub)

            fs.appendFile('./dist/team.html', engineer.engineerHtml(response.name, response.id, response.email, response.gitHub)),
                function (error) {
                    if (response.name === '' || typeof response.name !== 'string') {
                        console.log('input a valid name');
                        throw error;
                    }
                    if (response.id === '' || typeof Number(response.id) !== 'number') {
                        console.log('input a valid id');
                        throw error;
                    }
                    if (response.email === '' || typeof response.email !== 'string') {
                        console.log('input a valid email');
                        throw error;
                    }
                    if (response.github === '' || typeof response.github !== 'string') {
                        console.log('input a valid GitHub');
                        throw error;
                    }
                }
            const intern = new Intern(response.name, response.id, response.email, reponse.schoolName)

            fs.appendFile('./dist/team.html', intern.internHtml(response.name, response.id, response.email, reponse.schoolName)),
                function (error) {
                    if (response.name === '' || typeof response.name !== 'string') {
                        console.log('input a valid name');
                        throw error;
                    }
                    if (response.id === '' || typeof Number(response.id) !== 'number') {
                        console.log('input a valid id');
                        throw error;
                    }
                    if (response.email === '' || typeof response.email !== 'string') {
                        console.log('input a valid email');
                        throw error;
                    }
                    if (response.schoolName === '' || typeof response.schoolName !== 'string') {
                        console.log('input a valid school Name');
                        throw error;
                    }
                }
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber)

            fs.appendFile('./dist/team.html', manager.managerHtml(response.name, response.id, response.email, response.officeNumber)),
                function (error) {
                    if (response.name === '' || typeof response.name !== 'string') {
                        console.log('input a valid name');
                        throw error;
                    }
                    if (response.id === '' || typeof Number(response.id) !== 'number') {
                        console.log('input a valid id');
                        throw error;
                    }
                    if (response.email === '' || typeof response.email !== 'string') {
                        console.log('input a valid email');
                        throw error;
                    }
                    if (response.officeNumber === '' || typeof response.officeNumber !== 'string') {
                        console.log('input a valid office number');
                        throw error;
                    }
                }
        })
    {
        const createNewEmployee = () => {
            const prompt = inquirer.createPromptModule();
            prompt([
                {
                    type: 'List',
                    message: 'Do you want to add an Employee?',
                    choices: ['yes', 'no'],
                    name: 'select'
                }
            ])
            .then((response) => {
                if (response.select === 'yes') {
                    
                }
                 else { (response.select === 'no')
                    if (error) throw error;
                }
            }
            )
        }
    }

    init();



















    const writeFile = data => {
        fs.writeFile('team.html', data, err => {
            if (err) {
                console.log(err);
                return;
            }
        })
    };
    const html = generateTeam('hello');
    writeFile(html)
}