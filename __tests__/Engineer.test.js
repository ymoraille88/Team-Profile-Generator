const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should have a GitHub UserName", () => {
        it("should have an email", () => {
            const github = "Zarah"
            const engineer = new Engineer("Zarah M.");
           
            expect(engineer.github).toEqual("ZarahM2013");
        });
    });

});
