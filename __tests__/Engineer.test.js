const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should have a GitHub UserName", () => {
        const gitHub = "ZarahM"

        const engineer = new Engineer("Zarah", 26, "zarahm@gmail.com", gitHub );
        
       
        expect(engineer.gitHub).toEqual(gitHub);
    });
});
      

