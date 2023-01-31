const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should have a name", () => {
        const name = "Henry";
        const employee = new Employee(name, 24, "email@email.com");
       
        expect(employee.name).toEqual(name);
      });
      it("should have an id", () => {
        const id = 24;
        const employee = new Employee("Henry", id, "email@email.com");
       
        expect(employee.id).toEqual(id);
        
    });
    it("should have an email", () => {
        const email = "pinmpin40@gmail.com";
        const employee = new Employee("Henry", 24, email);
       
        expect(employee.email).toEqual(email);
    });
    
});
