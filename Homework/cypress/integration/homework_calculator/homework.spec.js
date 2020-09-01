import Homepage from '../../page_objects/homepage/homepage'
/// <reference types="cypress" />

var homepage = new Homepage()

beforeEach("Visits page and checks if 'integer' checkbox is not disabled", () => {
    cy.visit("BasicCalculator")
})

// TESTS FOR SUM OPERATION (6 tests included)

describe("Checks if first field is visible", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
        it.only("Runs tests with built:" + buildNumber, () => {
            homepage.getbuild().select(buildNumber) 
            homepage.getfirstField().should("be.visible")
        })
    })
})

describe("Checks if second field is visible", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
        it.only("Runs tests with built:" + buildNumber, () => {
            homepage.getbuild().select(buildNumber) 
            homepage.getsecondField().should("be.visible")
        })
    })
})

describe("Checks if Integer Mode checkbox is not disabled", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
        it.only("Runs tests with built:" + buildNumber, () => {
            homepage.getbuild().select(buildNumber) 
            homepage.getintegerCheckBox().should("not.be.disabled")
        })
    })
})

describe("Checks if calculate button is visible", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
        it.only("Runs tests with built:" + buildNumber, () => {
            homepage.getbuild().select(buildNumber) 
            homepage.getcalculateButton().should("be.visible")
        })
    })
})

describe("Executes SUM operation testing for each build with integer mode OFF", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
        it.only("Runs tests with built:" + buildNumber, () => {
            homepage.getbuild().select(buildNumber) 
            homepage.getintegerCheckBox().should("not.be.checked")
            homepage.getfirstField().type("18{enter}")
            homepage.getsecondField().type("17.5{enter}")
            homepage.getcalculateButton().click()
            homepage.getanswerField().should("have.value", "35.5")
        })
    })
})

describe("Executes SUM operation testing for each build with integer mode ON", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
        it.only("Runs tests with built:" + buildNumber, () => {
            homepage.getintegerCheckBox().check()
            homepage.getintegerselect().should("be.checked")
            homepage.getfirstField().type("18{enter}")
            homepage.getsecondField().type("17.5{enter}")
            homepage.getcalculateButton().click()
            homepage.getanswerField().should("have.value", "35")
        })
    })
})
  

//BELOW THERE ARE ALL OPERATIONS THAT CAN BE TESTED BUT MAIN IDEA WOULD BE THE SAME 
describe("Executes SUBTRACT operation testing for each build with integer mode OFF", () => {
      
     ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
        it("Runs tests with built:" + buildNumber, () => {
            homepage.getbuild().select(buildNumber) 
            homepage.getfirstField().should("be.visible")
            homepage.getsecondField().should("be.visible")
            homepage.getintegerCheckBox().should("not.be.disabled")
            homepage.getcalculateButton().should("be.visible")
            homepage.getfirstField().type("354.2{enter}")
            homepage.getsecondField().type("52.5{enter}")
            homepage.getoperationDropdown().select("Subtract")
            homepage.getcalculateButton().click()
            homepage.getanswerField().should("have.value", "301.7")
            
        })
    })
})

describe("Executes MULTIPLY operation testing for each build with integer mode OFF", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
       it("Runs tests with built:" + buildNumber, () => {
        homepage.getbuild().select(buildNumber) 
        homepage.getfirstField().should("be.visible")
        homepage.getsecondField().should("be.visible")
        homepage.getintegerCheckBox().should("not.be.disabled")
        homepage.getcalculateButton().should("be.visible")
        homepage.getintegerCheckBox().should("not.be.checked")
        homepage.getfirstField().type("2.4{enter}")
        homepage.getsecondField().type("2.3{enter}")
        homepage.getoperationDropdown().select("Multiply")
        homepage.getcalculateButton().click()
        homepage.getanswerField().should("have.value", "5.52")
           
       })
   })
})

describe("Executes DIVIDE operation testing for each build with integer mode OFF", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
       it("Runs tests with built:" + buildNumber, () => {
        homepage.getbuild().select(buildNumber) 
        homepage.getfirstField().should("be.visible")
        homepage.getsecondField().should("be.visible")
        homepage.getintegerCheckBox().should("not.be.disabled")
        homepage.getcalculateButton().should("be.visible")
        homepage.getintegerCheckBox().should("not.be.checked")
        homepage.getfirstField().type("64.2{enter}")
        homepage.getsecondField().type("2{enter}")
        homepage.getoperationDropdown().select("Divide")
        homepage.getcalculateButton().click()
        homepage.getanswerField().should("have.value", "32.1")
           
       })
   })
})

describe("Executes DIVIDE operation testing for each build with integer mode OFF", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
       it("Runs tests with built:" + buildNumber, () => {
        homepage.getbuild().select(buildNumber) 
        homepage.getfirstField().should("be.visible")
        homepage.getsecondField().should("be.visible")
        homepage.getintegerCheckBox().should("not.be.disabled")
        homepage.getcalculateButton().should("be.visible")
        homepage.getintegerCheckBox().should("not.be.checked")
        homepage.getfirstField().type("64.2{enter}")
        homepage.getsecondField().type("2{enter}")
        homepage.getoperationDropdown().select("Divide")
        homepage.getcalculateButton().click()
        homepage.getanswerField().should("have.value", "32.1")
           
       })
   })
})

describe("Executes CONCATENATE operation testing for each build and checks that integer mode would not be visible", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
       it("Runs tests with built:" + buildNumber, () => {
        homepage.getbuild().select(buildNumber) 
        homepage.getfirstField().should("be.visible")
        homepage.getsecondField().should("be.visible")
        homepage.getintegerCheckBox().should("not.be.disabled")
        homepage.getcalculateButton().should("be.visible")
        homepage.getfirstField().type("64.1{enter}")
        homepage.getsecondField().type("2{enter}")
        homepage.getoperationDropdown().select("Concatenate")
        homepage.getintegerselect().should("not.be.visible")
        homepage.getcalculateButton().click()
        homepage.getanswerField().should("have.value", "64.12")
           
       })
   })
})

// TESTS WITH INTEGER MODE ON


describe("Executes SUBTRACT operation testing for each build with integer mode ON", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
        it("Runs tests with built:" + buildNumber, () => {
            homepage.getbuild().select(buildNumber) 
            homepage.getfirstField().should("be.visible")
            homepage.getsecondField().should("be.visible")
            homepage.getintegerCheckBox().should("not.be.disabled")
            homepage.getcalculateButton().should("be.visible")
            homepage.getintegerCheckBox().check()
            homepage.getintegerselect().should("be.checked")
            homepage.getfirstField().type("354.2{enter}")
            homepage.getsecondField().type("52.5{enter}")
            homepage.getoperationDropdown().select("Subtract")
            homepage.getcalculateButton().click()
            homepage.getanswerField().should("have.value", "301")
        })
    })
})

describe("Executes MULTIPLY operation testing for each build with integer mode ON", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
        it("Runs tests with built:" + buildNumber, () => {
            homepage.getbuild().select(buildNumber) 
            homepage.getfirstField().should("be.visible")
            homepage.getsecondField().should("be.visible")
            homepage.getintegerCheckBox().should("not.be.disabled")
            homepage.getcalculateButton().should("be.visible")
            homepage.getintegerCheckBox().check()
            homepage.getintegerselect().should("be.checked")
            homepage.getfirstField().type("2.4{enter}")
            homepage.getsecondField().type("2.3{enter}")
            homepage.getoperationDropdown().select("Multiply")
            homepage.getcalculateButton().click()
            homepage.getanswerField().should("have.value", "5")
        })
    })
})

describe("Executes DIVIDE operation testing for each build with integer mode ON", () => {
      
    ["Prototype", "1","2","3", "4", "5", "6", "7", "8", "9"].forEach((buildNumber) => {
        it("Runs tests with built:" + buildNumber, () => {
            homepage.getbuild().select(buildNumber) 
            homepage.getfirstField().should("be.visible")
            homepage.getsecondField().should("be.visible")
            homepage.getintegerCheckBox().should("not.be.disabled")
            homepage.getcalculateButton().should("be.visible")
            homepage.getintegerCheckBox().check()
            homepage.getintegerselect().should("be.checked")
            homepage.getfirstField().type("64.2{enter}")
            homepage.getsecondField().type("2{enter}")
            homepage.getoperationDropdown().select("Divide")
            homepage.getcalculateButton().click()
            homepage.getanswerField().should("have.value", "32")
        })
    })
})

