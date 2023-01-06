const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require ('fs');
const generateTeam = require ('./template')
      
const writeFile = data => {
    fs.writeFile('team.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
};
const html = generateTeam ('hello');
writeFile(html)