const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should have an office number", () => {
        const officeNumber = 2122;
        
        const manager = new Manager("Stanley", 36, officeNumber);
           
            expect(manager.OfficeNumber).toEqual(OfficeNumber);
    });
});

