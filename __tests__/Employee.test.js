const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should have a name", () => {
        const name = "Henry";
        const employee = new Employee(name);
       
        expect(employee.name).toEqual(name);
      });
      it("should have an id", () => {
        const id = 2425;
        const employee = new Employee(name);
       
        expect(employee.id).toEqual(id);
    });
    it("should have an email", () => {
        const email = "pinmpin40@gmail.com";
        const employee = new Employee(name);
       
        expect(employee.email).toEqual(email);
    });
});
