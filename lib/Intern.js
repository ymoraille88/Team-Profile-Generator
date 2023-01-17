const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        super(name, id);
        this.schoolName = schoolName;
    }
    getRole(){
        return Intern;
    
    }
    getSchoolName(){
        return this.schoolName;
    }
}

module.exports = Intern;
