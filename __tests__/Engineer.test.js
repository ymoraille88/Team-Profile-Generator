const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should have a GitHub UserName", () => {
        const gitHub = "Sclervil86";

        const engineer = new Engineer("Stanley", 26, "sclervil@gmail.com", gitHub );
        
       
        expect(engineer.getGitHub()).toEqual(gitHub);
    });
});
      

