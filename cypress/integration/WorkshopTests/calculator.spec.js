/// <reference types="cypress" />

beforeEach("Executes before each test",()=>{
    cy.visit("/BasicCalculator")
})

it("Check if first build with operation 'Add' works properly and error message is visible", ()=>{
    cy.get('[name="selectBuild"]').select("1")
        .get('#number1Field').type('1a')
        .get('#number2Field').type(1)
        .get('#selectOperationDropdown').select('0')
        .get('#calculateButton').click()
        .get('#errorMsgField').should('be.visible')
})

it("Check if second build with operation 'Add' works properly", ()=>{
    cy.get('[name="selectBuild"]').select("2")
        .get('#number1Field').type('3x')
        .get('#number2Field').type(3)
        .get('#selectOperationDropdown').select('0')
        .get('#calculateButton').click()
        .get('#numberAnswerField').should('have.value', 'NaN')        
})

it("Check if fourth build with function 'Multiply' works properly and 'Integers only' is not disabled", ()=>{
    cy.get('[name="selectBuild"]').select("4")
        .get('#number1Field').type('2.5')
        .get('#number2Field').type(2.5)
        .get('#selectOperationDropdown').select('2')
        .get('#calculateButton').click()
        .get('#integerSelect').should('not.be.disabled')        
})

it("Check if ninth build has 'Second number' field", ()=>{
    cy.get('[name="selectBuild"]').select("9")
        .get('#number1Field').type('5')
        .get('#number2Field').should('not.be.disabled')
        .get('#number2Field').type(5)
        .get('#selectOperationDropdown').select('1')
        .get('#calculateButton').click()
        
    })

it.only("Check if ninth build has 'Calculate' button", ()=>{
    cy.get('[name="selectBuild"]').select("9")
        .get('#number1Field').type('6')
        //.get('#number2Field').type(6)
        .get('#selectOperationDropdown').select('2')
        .get('#calculateButton').should('not.be.disabled')
        .get('#calculateButton').click()
        })