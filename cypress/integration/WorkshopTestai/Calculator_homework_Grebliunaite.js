
/// <reference types="cypress" />

beforeEach("Executes before each test",()=>{
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
})

it.only('build Prototype calculates numbers correctly', ()=>{
cy.get('#selectBuild')
cy.get('#number1Field').type("5")
cy.get('#number2Field').type("6")
cy.get('#selectOperationDropdown').get('.col-sm-7')
cy.get('#calculateButton').click()
cy.get('#numberAnswerField').should('have.value', '11')
})


it.only('Checking Build Nr.1 Substract calculation with wrong syntax', ()=>{
cy.get('#selectBuild').select("1")
cy.get('#number1Field').type("10,6")
cy.get('#number2Field').type("5")
cy.get('#selectOperationDropdown').select('Subtract')
cy.get('#calculateButton').click()
cy.get('#numberAnswerField').should('have.value', 'error message: Number 1 is not a number')

})

it.only('On Build Nr.2 Concatenate function works as Add function', ()=>{
cy.get('#selectBuild').select("2")
cy.get('#number1Field').type("3")
cy.get('#number2Field').type("7")
cy.get('#selectOperationDropdown').select('Concatenate')
cy.get('#calculateButton').click()
cy.get('#numberAnswerField').should('have.value', '37')
   
})

it('Checking Build Nr.3 Integers only function', ()=>{
cy.get('#selectBuild').select("3")
cy.get('#number1Field').type("-4.77")
cy.get('#number2Field').type("9.34")
cy.get('#selectOperationDropdown').select('Multiply')
cy.get('#integerSelect').click()
cy.get('#calculateButton').click()
cy.get('#numberAnswerField').should('have.value', '-44')
})

it.only('Disabled Integers only function on Build Nr.4', ()=>{
cy.get('#selectBuild').select("4")
cy.get('#number1Field').type("17.555")
cy.get('#number2Field').type("10.222")
cy.get('#selectOperationDropdown').select('Add')
cy.get('#integerSelect').click()
cy.get('#calculateButton').click()
cy.get('#numberAnswerField').should('have.value', '27')
})

it('Checking Build Nr.5 Concatenation with strings', ()=>{
cy.get('#selectBuild').select("5")
cy.get('#number1Field').type("y.8")
cy.get('#number2Field').type("u--p")
cy.get('#selectOperationDropdown').select('Concatenate')
cy.get('#calculateButton').click()
cy.get('#numberAnswerField').should('have.value', 'y.8u--p')
cy.get('#clearButton').click()
})

it('Checking Build Nr.6 Subtract calculation', ()=>{
cy.get('#selectBuild').select("6")
cy.get('#number1Field').type("-1.9999999")
cy.get('#number2Field').type("-9.9999999")
cy.get('#selectOperationDropdown').select('Subtract')
cy.get('#calculateButton').click()
cy.get('#numberAnswerField').should('have.value', '8')
})

it('Build Nr.7 has too many errors, disabled First number Field', ()=>{
cy.get('#selectBuild').select("7")
cy.get('#number1Field').type("A")
cy.get('#number2Field').type("16")
cy.get('#selectOperationDropdown').select('Add')
cy.get('#calculateButton').click()
cy.get('#numberAnswerField').should('have.value', 'Error message: Number 1 is not a number')
})

it.only('Build Nr.7, checking calculation by pressing Calculate button multiple times', ()=>{
cy.get('#selectBuild').select("7")
cy.get('#number1Field').type("6")
cy.get('#number2Field').type("16")
cy.get('#selectOperationDropdown').select('Add')
cy.get('#calculateButton').click()
cy.get('#calculateButton').click()
cy.get('#calculateButton').click()
cy.get('#numberAnswerField').should('have.value', '22')
})

it.only('Build Nr.8, the order of Numbers Fields is shuffled', ()=>{
    cy.get('#selectBuild').select("8")
    cy.get('#number1Field').type("8")
    cy.get('#number2Field').type("2")
    cy.get('#selectOperationDropdown').select('Divide')
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '4')
    })

it('Build Nr.9, Second number field and Calculate button are missing', ()=>{
cy.get('#selectBuild').select("9")
cy.get('#number1Field').type('77')
cy.get('#number2Field').type("3")
cy.get('#selectOperationDropdown').select('Add')
cy.get('#calculateButton').click()
cy.get('#numberAnswerField').should('have.value', '80')
})   