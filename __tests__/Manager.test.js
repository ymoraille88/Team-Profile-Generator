const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should have an office number", () => {
        const officeNumber = 2425;

        const manager = new Manager("Henry", 2425 ,"pinmpin40@hotmail.com",officeNumber);
        
           
            expect(manager.officeNumber).toEqual(officeNumber);
    });
});

