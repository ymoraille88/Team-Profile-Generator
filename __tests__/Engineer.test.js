const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should have a GitHub UserName", () => {
        const gitHub = "Sclervil86"

        const engineer = new Engineer ("Stanley", 26, "sclervil@gmial.com", gitHub );
        
       
        expect(engineer.gitHub).toEqual(gitHub);
    });
});
      

