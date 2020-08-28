import Homepage from '../../page_objects/homepage/homepage.js'
/// <reference types="cypress" />


var homepage = new Homepage

beforeEach("Executes before each test", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
})


it("Loads the calculator page", ()=>{
    cy.contains("Instructions")
})


it("Tests for build prototype ", ()=>{
    cy.get('#selectBuild').select("Prototype")
    cy.get('#number1Field').type("10")
    cy.get('#number2Field').type("5")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '5')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '50')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '105')
    cy.get('#clearButton').click()
    

})

it("Tests for build 1 ", ()=>{
    cy.get('#selectBuild').select("1")
    cy.get('#number1Field').type("10")
    cy.get('#number2Field').type("5")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '5')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '50')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '105')
    cy.get('#clearButton').click()
    

})

it("Tests for build 2 ", ()=>{
    cy.get('#selectBuild').select("2")
    cy.get('#number1Field').type("10")
    cy.get('#number2Field').type("5")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '5')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '50')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '105')
    cy.get('#clearButton').click()
    

})

it("Tests for build 3 ", ()=>{
    cy.get('#selectBuild').select("3")
    cy.get('#number1Field').type("10")
    cy.get('#number2Field').type("5")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '5')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '50')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '105')
    cy.get('#clearButton').click()
    

})

it("Tests for build 4 ", ()=>{
    cy.get('#selectBuild').select("4")
    cy.get('#number1Field').type("10")
    cy.get('#number2Field').type("5")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '5')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '50')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '105')
    cy.get('#clearButton').click()
    

})

it("Tests for build 5 ", ()=>{
    cy.get('#selectBuild').select("5")
    cy.get('#number1Field').type("10")
    cy.get('#number2Field').type("5")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '5')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '50')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '105')
    cy.get('#clearButton').click()
    

})

it("Tests for build 6 ", ()=>{
    cy.get('#selectBuild').select("6")
    cy.get('#number1Field').type("10")
    cy.get('#number2Field').type("5")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '5')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '50')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '105')
    cy.get('#clearButton').click()
    

})

it("Tests for build 7 ", ()=>{
    cy.get('#selectBuild').select("7")
    cy.get('#number1Field').type("10")
    cy.get('#number2Field').type("5")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '5')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '50')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '105')
    cy.get('#clearButton').click()
    

})

it("Tests for build 8 ", ()=>{
    cy.get('#selectBuild').select("8")
    cy.get('#number1Field').type("10")
    cy.get('#number2Field').type("5")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '5')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '50')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '105')
    cy.get('#clearButton').click()
    

})
it("Tests for build 9 ", ()=>{
    cy.get('#selectBuild').select("9")
    cy.get('#number1Field').type("10")
    cy.get('#number2Field').type("5")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '5')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '50')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '105')
    cy.get('#clearButton').click()
    

})