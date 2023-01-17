const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should have a name", () => {
        const name = "Henry";
        const employee = new Employee(name);
       
        expect(employee.name).toEqual();
      });
      it("should have an id", () => {
        const employee = new Employee(name);
       
        expect(employee.id).toEqual(2425);
    });
    it("should have an email", () => {
        const employee = new Employee(name);
       
        expect(employee.email).toEqual("pinmpin40@hotmail.com");
    });
});
