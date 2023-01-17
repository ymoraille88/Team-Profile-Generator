const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, github) {
        this.github = github;
    }
    getgithub(){
        return this.github;
    }
}

module.exports = Engineer;
