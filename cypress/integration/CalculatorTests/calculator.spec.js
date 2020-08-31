import Calcelements from "../../page_objects/Calculator_page/calcobjects.js"
/// <reference types="cypress" />

var calcelements = new Calcelements()

const builds = ['Prototype', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operations = ['Add', 'Subtract','Multiply', 'Divide', 'Concatenate']
const elements = ['#number1Field', '#number2Field', '#selectOperationDropdown', '#calculateButton', '#numberAnswerField', '#integerSelect', '#clearButton']

beforeEach("Executes before each test", () => {
    cy.visit ('/BasicCalculator')
})

// Test_No.1. To check if calculator app website opens
it('Calculator website is available', () => {
    cy.contains('Calculate')
})

// Test_No.2. To check if calculators operation list contains all math operations options
describe('Should select math operation from list', () => {
    ['Add', 'Subtract', 'Multiply', 'Divide', 'Concatenate'].forEach((action) => {
        it(`Triggers ${action} operation from a list`, () => {
            calcelements.getOperationList().select(action) 
            calcelements.getOperationList().contains(action)
        })
    })  
})

//Test_No.3. To check if calculators operation list contains all math operations options in all builds
describe('Should select each math operation from a list in each build', () => {
    builds.forEach((build) => {
        operations.forEach((operation) => {
            it.only(`Triggers ${operation} operation from alist in ${build} build`, () => {
                calcelements.getBuildList().select(build)
                calcelements.getBuildList().contains(build)
                calcelements.getOperationList().select(operation) 
                calcelements.getOperationList().contains(operation)
            })
        })
    })  
})

//Test_No.4. To check if the calculator has all elements in all builds
describe('Each calculator element should be visible in each build', () => {
    builds.forEach((build) => {
        elements.forEach((element) => {
            it.only(`Looks for ${element} element in ${build} build`, () =>{
                calcelements.getBuildList().select(build)
                cy.get(element).should('be.visible')
            })
        })
    })
})

//Test_No.5. To check if "Integers only" checkbox is not disabled in all builds
describe('Integers only checkbox should be enabled in each build', () => {
    builds.forEach((build) => {
        it(`Checks "Integers only" checkbox in ${build} build`, () => {
            calcelements.getBuildList().select(build)
            calcelements.getIntegerCheckBox().should('be.enabled')
        })
    })
})

//Test_No.6. To check if addition operation works correctly in all builds
describe('"Add" operation works correctly in each build', () => {
    builds.forEach((build) => {
        it(`Triggers "Add" operation in ${build} build`, () => {
            calcelements.getBuildList().select(build)
            calcelements.getNumber1Field().type('2')
            calcelements.getNumber2Field().type('4')
            calcelements.getOperationList().select('Add')
            calcelements.getCalculateButton().click()
            calcelements.getAnswerField().should('have.value', '6')
        })
    })
})

//Test_No.7. To check if each calculation operation gives a correct answer in each build
describe('Each math operation calculates correctly in each build', () => {
    builds.forEach((build) => {
        operations.forEach((operation) => {
            it.only(`Triggers ${operation} operation in ${build} build`, () => {
                calcelements.getBuildList().select(build)
                calcelements.getNumber1Field().type('4')
                calcelements.getNumber2Field().type('2')
                calcelements.getOperationList().select(operation)
                calcelements.getCalculateButton().click()
                if(operation === 'Add') {
                    calcelements.getAnswerField().should('have.value', '6')
                }
                else if (operation === 'Subtract') {
                    calcelements.getAnswerField().should('have.value', '2')
                }
                else if (operation === 'Subtract') {
                    calcelements.getAnswerField().should('have.value', '2')
                }
                else if (operation === 'Multiply') {
                    calcelements.getAnswerField().should('have.value', '8')
                }
                else if (operation === 'Divide') {
                    calcelements.getAnswerField().should('have.value', '2')
                }
                else if (operation === 'Concatanate') {
                    calcelements.getAnswerField().should('have.value', '42')
                }
            })
        })
    })
})
  
//Test_No.8. To check if button "Clear" clears all required fields in all builds
describe('Clear button clears required fields in each build', () => {
    builds.forEach((build) => {
        it(`Triggers Clear button in ${build} build`, () => {
            calcelements.getBuildList().select(build)
            calcelements.getNumber1Field().type('4')
            calcelements.getOperationList().select('Add') 
            calcelements.getIntegerCheckBox().check()
            calcelements.getCalculateButton().click()
            calcelements.getClearButton().click()
            calcelements.getAnswerField().should('be.empty')
            calcelements.getIntegerCheckBox().should('be.not.checked')
        })
    })
})

//Test_No.9. To check if "Integers only" checkbox functionality works properly in all builds
describe('"Integers only" checkbox triggers integer answer in each build', () => {
    builds.forEach((build) => {
        it.only(`Triggers integer answer in ${build} build`, () => {
            calcelements.getBuildList().select(build)
            calcelements.getNumber1Field().type('6.5')
            calcelements.getOperationList().select('Add')
            calcelements.getIntegerCheckBox().check()
            calcelements.getCalculateButton().click()
            calcelements.getAnswerField().should('have.value', '6')
        })
    })
})

//Test_No.10. To check if division by zero is not allowed in all builds
describe('Division by zero is not allowed in each build', () => {
    builds.forEach((build) => {
        it.only(`Triggers division by zero in ${build} build`, () => {
            calcelements.getBuildList().select(build)
            calcelements.getNumber1Field().type('2')
            calcelements.getNumber2Field().type('0')
            calcelements.getOperationList().select('Divide')
            calcelements.getCalculateButton().click()
            calcelements.getErrorMessageField().contains('Divide by zero error!')
        })
    }) 
})


