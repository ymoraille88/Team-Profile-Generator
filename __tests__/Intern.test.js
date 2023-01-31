const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should have a school name", () => {
        const schoolName = "NYU"
       
        const intern = new Intern ("Zarah", 23, "Zarah@gmail.com", schoolName);


            expect(intern.schoolName).toEqual(schoolName);
    });

});
