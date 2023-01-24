const Employee = require("./Employee");


class Employee extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email );
        this.role = employee;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return Employee;
    }


}

module.exports = Employee;
