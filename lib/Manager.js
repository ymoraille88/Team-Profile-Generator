const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, officeNumber) {
        super(name, id);
        this.officeNumber = this.officeNumber;
    }
    getRole(){
        return Intern;
    }
    getSchoolName(){
        return this.officeNumber;  
    }
}

module.exports = Manager;
