/// <reference types="cypress" />

import Calculator from './calculator'

const builds = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] // page objects
const actions = ['Add', 'Subtract', 'Multiply', 'Divide']
const answers = ['5', '-1', '6', '0.6', '23']
var calculatorPage = new Calculator()
describe('5 tests that check the functionality of the calculator', ()=> { 
    before(() => {     
        cy.visit("https://testsheepnz.github.io/BasicCalculator")
    })
    builds.forEach(number => {
        it('should check if all buttons are visible, enabled and clickable', () =>{
            calculatorPage.selectBuildnNumber(number)
            calculatorPage.selectNumberField1().should('exist').should('be.visible').should('be.enabled')
            calculatorPage.selectNumberField2().should('exist').should('be.visible').should('be.enabled')
            calculatorPage.selectOperationDropdown().should('exist').should('be.visible')
    actions.forEach(calculation => {
            calculatorPage.selectOperationDropdown().select(calculation)
            calculatorPage.selectCalculateButton().should('exist').should('be.visible').should('be.enabled')
            calculatorPage.selectInteger().should('exist').should('be.visible').should('not.be.checked')
            calculatorPage.selectClearButton().should('exist').should('be.visible').should('be.enabled')
    })     
        })
    })
    builds.forEach(number => {
        it('should subtract and get -1', ()=>{
            calculatorPage.selectBuildnNumber(number)
            calculatorPage.selectNumberField1().clear().type('2')
            calculatorPage.selectNumberField2().clear().type('3')
            calculatorPage.selectOperationDropdown().select('Subtract')
            calculatorPage.selectCalculateButton().click()
            calculatorPage.selectAnswerField().should('have.value', '-1')
            calculatorPage.selectClearButton().click()
    })
        })
    builds.forEach(number => {
        it('should add two decimals and get 5.7', ()=>{
            calculatorPage.selectBuildnNumber(number)
            calculatorPage.selectNumberField1().clear().type('2.3')
            calculatorPage.selectNumberField2().clear().type('3.4')
            calculatorPage.selectOperationDropdown().select('Add')
            calculatorPage.selectInteger().should('not.be.checked')
            calculatorPage.selectCalculateButton().click()
            calculatorPage.selectAnswerField().should('have.value', '5.7')
            calculatorPage.selectClearButton().click()
    })
        })
    builds.forEach(number => {
        it('should get 30 after multipling decimal numbers and clicking integer box', ()=>{
            calculatorPage.selectBuildnNumber(number)
            calculatorPage.selectNumberField1().clear().type('5.5')
            calculatorPage.selectNumberField2().clear().type('5.5')
            calculatorPage.selectOperationDropdown().select('Multiply')
            calculatorPage.selectInteger().should('not.be.checked').click()
            calculatorPage.selectCalculateButton().click()
            calculatorPage.selectAnswerField().should('have.value', '30')
            calculatorPage.selectClearButton().click()
    })
        })
    builds.forEach(number => {
        it('should not get any answer when add two letters', ()=>{
            calculatorPage.selectBuildnNumber(number)
            calculatorPage.selectNumberField1().clear().type('m')
            calculatorPage.selectNumberField2().clear().type('n')
    actions.forEach(calculation => {
            calculatorPage.selectOperationDropdown().select(calculation)
            calculatorPage.selectCalculateButton().click()
            calculatorPage.selectAnswerField().should('not.contain.value')
            calculatorPage.selectClearButton().click()
                   
        })
    })   

})
})

/*builds.forEach(number => {
        it.only('should subtract and get -1', ()=>{
            calculatorPage.selectBuildnNumber(number)
            cy.get('#number1Field').clear().type('2') 
            cy.get('#number2Field').clear().type('3')
            cy.get('#selectOperationDropdown').select('Subtract')
            cy.get('#calculateButton').click()
            cy.get('#numberAnswerField').should('have.value', '-1')
            cy.get('#clearButton').click()
     })
    
    })
    builds.forEach(number => {
        it('should subtract and get -1', ()=>{
            calculatorPage.selectBuildnNumber(number)
            calculatorPage.selectNumberField1().clear().type('2')
            calculatorPage.selectNumberField2().clear().type('3')
    actions.forEach(calculation => {
        it('should go through every calculation')
            calculatorPage.selectOperationDropdown().select(calculation)
            calculatorPage.selectCalculateButton().click()    
    answers.forEach(answer => {
        it('should get the right answer')
            cy.get('#numberAnswerField').should('have.value', answer)
            cy.get('#clearButton').click()
            })
        }) 
        })
    })
        })        */