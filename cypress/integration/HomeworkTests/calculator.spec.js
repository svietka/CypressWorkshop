//----------------------------------------------------------------------------------------
import Calculator from '../../page_objects/calculator_page/calculator_page.js'
/// <reference types='cypress' />
//----------------------------------------------------------------------------------------
var calculator = new Calculator
const buildVersions = ['Prototype',1,2,3,4,5,6,7,8,9]
//----------------------------------------------------------------------------------------
beforeEach('Executes before each test', () => {
    cy.visit("/BasicCalculator")
})
//----------------------------------------------------------------------------------------
describe('Should test division by 0 error message', () => {
    buildVersions.forEach(element => {
        it.only('Divides a number by 0. Build: ' + element, () => {
            calculator.getBuildVersion().select(element.toString())
            calculator.getFirstNumInputField().type('10')
            calculator.getSecondNumInputField().type('0')
            calculator.getOperationDropdown().select('Divide')
            calculator.getCalculateButton().click()
            cy.contains("Divide by zero error!")
            cy.reload() 
        })
    })   
})
//----------------------------------------------------------------------------------------
describe('Should provide decimal numbers sum answer in integer number format', () => {
    buildVersions.forEach(element => {
        it.only('Adds 10.25 and 4.32. Build: ' + element, () => {
            calculator.getBuildVersion().select(element.toString())
            calculator.getFirstNumInputField().type('10.25')
            calculator.getSecondNumInputField().type('4.32')
            calculator.getOperationDropdown().select('Add')
            calculator.getIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getOutputField().should('have.value', 10+4)
            cy.reload()
        })
    })
})
//----------------------------------------------------------------------------------------
describe('Should test a simple concatenation', () => {
    buildVersions.forEach(element => {
        it.only('Concatenates 10 and 10. Build: ' + element, () => {
            calculator.getBuildVersion().select(element.toString())
            calculator.getFirstNumInputField().type('10')
            calculator.getSecondNumInputField().type('10')
            calculator.getOperationDropdown().select('Concatenate')
            calculator.getCalculateButton().click()
            calculator.getOutputField().should('have.value', 1010)
            cy.reload()
        })
    })
})
//----------------------------------------------------------------------------------------
describe('Should test a simple multiplication', () => {
    buildVersions.forEach(element => {
        it.only('Multiplies 2 by 2. Build: ' + element, () => {
            calculator.getBuildVersion().select(element.toString())
            calculator.getFirstNumInputField().type('2')
            calculator.getSecondNumInputField().type('2')
            calculator.getOperationDropdown().select('Multiply')
            calculator.getCalculateButton().click()
            calculator.getOutputField().should('have.value', 4)
            cy.reload()
        })
    })
})
//----------------------------------------------------------------------------------------
describe('Should test a simple subtraction', () => {
    buildVersions.forEach(element => {
        it.only('Subtracts 20 and 40. Build: ' + element, () => {
            calculator.getBuildVersion().select(element.toString())
            calculator.getFirstNumInputField().type('20')
            calculator.getSecondNumInputField().type('40')
            calculator.getOperationDropdown().select('Subtract')
            calculator.getCalculateButton().click()
            calculator.getOutputField().should('have.value', -20)
            cy.reload()
        })
    })
})
//----------------------------------------------------------------------------------------