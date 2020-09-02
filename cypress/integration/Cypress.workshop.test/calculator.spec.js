/// <reference types="cypress" />

// variables
const Builds = ['0','1','2','3','4','5','6','7','8','9']
const Operations = ['Add','Subtract','Multiply','Divide','Concatenate']
let Number1 = 2
let Number2 = 2

// Visits the webiste
beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
  })
Builds.forEach((Build) => {
    // Test Add functionality 
    it.only("Test Add functionality", () => {
        cy.get('#selectBuild').select(Build)
        cy.get('#number1Field').type(Number1)
        cy.get('#number2Field').type(Number2)
        cy.get('#selectOperationDropdown').select('Add')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '4')  
    })
    // Test Subtract functionality 
    it.only("Test Subtract functionality", () => {
        cy.get('#selectBuild').select(Build)
        cy.get('#number1Field').type(Number1)
        cy.get('#number2Field').type(Number2)
        cy.get('#selectOperationDropdown').select('Subtract')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '0')  
    })
    // Test Multiply functionality 
    it.only("Test Multiply functionality", () => {
        cy.get('#selectBuild').select(Build)
        cy.get('#number1Field').type(Number1)
        cy.get('#number2Field').type(Number2)
        cy.get('#selectOperationDropdown').select('Multiply')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '4')  
    })
    // Test Divide functionality
    it.only("Test Divide functionality", () => {
        cy.get('#selectBuild').select(Build)
        cy.get('#number1Field').type(Number1)
        cy.get('#number2Field').type(Number2)
        cy.get('#selectOperationDropdown').select('Divide')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '1')  
    })
    // Test Concatenate functionality
    it.only("Test Concatenate functionality", () => {
        cy.get('#selectBuild').select(Build)
        cy.get('#number1Field').type(Number1)
        cy.get('#number2Field').type(Number2)
        cy.get('#selectOperationDropdown').select('Concatenate')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '22')  
    })
})



/*

Attempt to make everything in one test, but could not add if statment
Builds.forEach((Build) => {
    Operations.forEach((Operation) => {

    it("Adds number together", () => {
        cy.get('#selectBuild').select(Build)
        cy.get('#number1Field').type(Number1)
        cy.get('#number2Field').type(Number2)
        cy.get('#selectOperationDropdown').select(Operation)
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '4')  
    })
})
})
*/