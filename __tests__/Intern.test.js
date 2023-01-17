const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should have a school name", () => {
        const schoolName = "NYU"
       
        const engineer = new Intern ("sarah", 23, "sarah@gmail.com", schoolName);


            expect(engineer.schoolName).toEqual(schoolName);
    });

});
