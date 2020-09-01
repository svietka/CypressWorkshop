import Homepage from '../../page_objects/homepage/homepage.js'
/// <reference types="cypress" />


var homepage = new Homepage

beforeEach("Executes before each test", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
})


it("Loads the calculator page", ()=>{
    cy.contains("Instructions")
})


it("Tests for Prototype build", ()=>{
    //tests for simple arithmetic operations
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
    

    // check if calculator works with negative numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("-6")
    cy.get('#number2Field').type("-3")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-9')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-3')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '18')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-6-3')
    cy.get('#clearButton').click()


    // check if calculator works correctly with large scale numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("123456789")
    cy.get('#number2Field').type("123456789")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '246913578')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15241578750190520')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '123456789123456789')
    cy.get('#clearButton').click()

    //check if works with fractions, and also check how operations work when "integers only" checkbox is checked
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("1.1")
    cy.get('#number2Field').type("1.1")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2.2')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.2100000000000002')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.11.1')
    cy.get('#clearButton').click()


     // check if succesfully divides by 0
     cy.get('#number1Field').clear()
     cy.get('#number2Field').clear()
     cy.get('#number1Field').type("5")
     cy.get('#number2Field').type("0")
     cy.get('#selectOperationDropdown').select("Divide")
     cy.get('#calculateButton').click()
     cy.get('#errorMsgField').contains("Divide by zero error!")


})

//tests for build 1
it("Tests for build 1", ()=>{
    //tests for simple arithmetic operations
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
    

    // check if calculator works with negative numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("-6")
    cy.get('#number2Field').type("-3")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-9')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-3')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '18')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-6-3')
    cy.get('#clearButton').click()


    // check if calculator works correctly with large scale numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("123456789")
    cy.get('#number2Field').type("123456789")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '246913578')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15241578750190520')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '123456789123456789')
    cy.get('#clearButton').click()

    //check if works with fractions, and also check how operations work when "integers only" checkbox is checked
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("1.1")
    cy.get('#number2Field').type("1.1")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2.2')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.2100000000000002')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.11.1')
    cy.get('#clearButton').click()


     // check if succesfully divides by 0
     cy.get('#number1Field').clear()
     cy.get('#number2Field').clear()
     cy.get('#number1Field').type("5")
     cy.get('#number2Field').type("0")
     cy.get('#selectOperationDropdown').select("Divide")
     cy.get('#calculateButton').click()
     cy.get('#errorMsgField').contains("Divide by zero error!")


})

//tests for build 2
it.only("Tests for build 2", ()=>{
    //tests for simple arithmetic operations
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
    

    // check if calculator works with negative numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("-6")
    cy.get('#number2Field').type("-3")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-9')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-3')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '18')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-6-3')
    cy.get('#clearButton').click()


    // check if calculator works correctly with large scale numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("123456789")
    cy.get('#number2Field').type("123456789")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '246913578')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15241578750190520')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '123456789123456789')
    cy.get('#clearButton').click()

    //check if works with fractions, and also check how operations work when "integers only" checkbox is checked
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("1.1")
    cy.get('#number2Field').type("1.1")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2.2')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.2100000000000002')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.11.1')
    cy.get('#clearButton').click()


     // check if succesfully divides by 0
     cy.get('#number1Field').clear()
     cy.get('#number2Field').clear()
     cy.get('#number1Field').type("5")
     cy.get('#number2Field').type("0")
     cy.get('#selectOperationDropdown').select("Divide")
     cy.get('#calculateButton').click()
     cy.get('#errorMsgField').contains("Divide by zero error!")


})

//tests for build 3
it.only("Tests for build 3", ()=>{
    //tests for simple arithmetic operations
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
    

    // check if calculator works with negative numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("-6")
    cy.get('#number2Field').type("-3")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-9')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-3')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '18')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-6-3')
    cy.get('#clearButton').click()


    // check if calculator works correctly with large scale numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("123456789")
    cy.get('#number2Field').type("123456789")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '246913578')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15241578750190520')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '123456789123456789')
    cy.get('#clearButton').click()

    //check if works with fractions, and also check how operations work when "integers only" checkbox is checked
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("1.1")
    cy.get('#number2Field').type("1.1")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2.2')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.2100000000000002')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.11.1')
    cy.get('#clearButton').click()


     // check if succesfully divides by 0
     cy.get('#number1Field').clear()
     cy.get('#number2Field').clear()
     cy.get('#number1Field').type("5")
     cy.get('#number2Field').type("0")
     cy.get('#selectOperationDropdown').select("Divide")
     cy.get('#calculateButton').click()
     cy.get('#errorMsgField').contains("Divide by zero error!")


})

//tests for build 4
it.only("Tests for build 4", ()=>{
    //tests for simple arithmetic operations
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
    

    // check if calculator works with negative numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("-6")
    cy.get('#number2Field').type("-3")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-9')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-3')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '18')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-6-3')
    cy.get('#clearButton').click()


    // check if calculator works correctly with large scale numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("123456789")
    cy.get('#number2Field').type("123456789")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '246913578')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15241578750190520')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '123456789123456789')
    cy.get('#clearButton').click()

    //check if works with fractions, and also check how operations work when "integers only" checkbox is checked
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("1.1")
    cy.get('#number2Field').type("1.1")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2.2')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.2100000000000002')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.11.1')
    cy.get('#clearButton').click()


     // check if succesfully divides by 0
     cy.get('#number1Field').clear()
     cy.get('#number2Field').clear()
     cy.get('#number1Field').type("5")
     cy.get('#number2Field').type("0")
     cy.get('#selectOperationDropdown').select("Divide")
     cy.get('#calculateButton').click()
     cy.get('#errorMsgField').contains("Divide by zero error!")


})

//tests for build 5
it("Tests for build 5", ()=>{
    //tests for simple arithmetic operations
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
    

    // check if calculator works with negative numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("-6")
    cy.get('#number2Field').type("-3")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-9')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-3')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '18')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-6-3')
    cy.get('#clearButton').click()


    // check if calculator works correctly with large scale numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("123456789")
    cy.get('#number2Field').type("123456789")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '246913578')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15241578750190520')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '123456789123456789')
    cy.get('#clearButton').click()

    //check if works with fractions, and also check how operations work when "integers only" checkbox is checked
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("1.1")
    cy.get('#number2Field').type("1.1")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2.2')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.2100000000000002')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.11.1')
    cy.get('#clearButton').click()


     // check if succesfully divides by 0
     cy.get('#number1Field').clear()
     cy.get('#number2Field').clear()
     cy.get('#number1Field').type("5")
     cy.get('#number2Field').type("0")
     cy.get('#selectOperationDropdown').select("Divide")
     cy.get('#calculateButton').click()
     cy.get('#errorMsgField').contains("Divide by zero error!")


})

//tests for build 6
it("Tests for build 6", ()=>{
    //tests for simple arithmetic operations
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
    

    // check if calculator works with negative numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("-6")
    cy.get('#number2Field').type("-3")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-9')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-3')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '18')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-6-3')
    cy.get('#clearButton').click()


    // check if calculator works correctly with large scale numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("123456789")
    cy.get('#number2Field').type("123456789")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '246913578')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15241578750190520')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '123456789123456789')
    cy.get('#clearButton').click()

    //check if works with fractions, and also check how operations work when "integers only" checkbox is checked
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("1.1")
    cy.get('#number2Field').type("1.1")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2.2')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.2100000000000002')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.11.1')
    cy.get('#clearButton').click()


     // check if succesfully divides by 0
     cy.get('#number1Field').clear()
     cy.get('#number2Field').clear()
     cy.get('#number1Field').type("5")
     cy.get('#number2Field').type("0")
     cy.get('#selectOperationDropdown').select("Divide")
     cy.get('#calculateButton').click()
     cy.get('#errorMsgField').contains("Divide by zero error!")


})

//tests for build 7
it.only("Tests for build 7", ()=>{
    //tests for simple arithmetic operations
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
    

    // check if calculator works with negative numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("-6")
    cy.get('#number2Field').type("-3")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-9')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-3')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '18')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-6-3')
    cy.get('#clearButton').click()


    // check if calculator works correctly with large scale numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("123456789")
    cy.get('#number2Field').type("123456789")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '246913578')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15241578750190520')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '123456789123456789')
    cy.get('#clearButton').click()

    //check if works with fractions, and also check how operations work when "integers only" checkbox is checked
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("1.1")
    cy.get('#number2Field').type("1.1")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2.2')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.2100000000000002')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.11.1')
    cy.get('#clearButton').click()


     // check if succesfully divides by 0
     cy.get('#number1Field').clear()
     cy.get('#number2Field').clear()
     cy.get('#number1Field').type("5")
     cy.get('#number2Field').type("0")
     cy.get('#selectOperationDropdown').select("Divide")
     cy.get('#calculateButton').click()
     cy.get('#errorMsgField').contains("Divide by zero error!")


})

//tests for build 8
it.only("Tests for build 8", ()=>{
    //tests for simple arithmetic operations
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
    

    // check if calculator works with negative numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("-6")
    cy.get('#number2Field').type("-3")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-9')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-3')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '18')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-6-3')
    cy.get('#clearButton').click()


    // check if calculator works correctly with large scale numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("123456789")
    cy.get('#number2Field').type("123456789")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '246913578')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15241578750190520')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '123456789123456789')
    cy.get('#clearButton').click()

    //check if works with fractions, and also check how operations work when "integers only" checkbox is checked
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("1.1")
    cy.get('#number2Field').type("1.1")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2.2')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.2100000000000002')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.11.1')
    cy.get('#clearButton').click()


     // check if succesfully divides by 0
     cy.get('#number1Field').clear()
     cy.get('#number2Field').clear()
     cy.get('#number1Field').type("5")
     cy.get('#number2Field').type("0")
     cy.get('#selectOperationDropdown').select("Divide")
     cy.get('#calculateButton').click()
     cy.get('#errorMsgField').contains("Divide by zero error!")


})

//tests for build 9
it("Tests for build 9", ()=>{
    //tests for simple arithmetic operations
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
    

    // check if calculator works with negative numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("-6")
    cy.get('#number2Field').type("-3")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-9')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-3')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '18')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '-6-3')
    cy.get('#clearButton').click()


    // check if calculator works correctly with large scale numbers
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("123456789")
    cy.get('#number2Field').type("123456789")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '246913578')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '15241578750190520')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '123456789123456789')
    cy.get('#clearButton').click()

    //check if works with fractions, and also check how operations work when "integers only" checkbox is checked
    cy.get('#number1Field').clear()
    cy.get('#number2Field').clear()
    cy.get('#number1Field').type("1.1")
    cy.get('#number2Field').type("1.1")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2.2')

    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '0')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.2100000000000002')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Divide")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1')
    cy.get('#clearButton').click()

    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '2')

    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', '1.11.1')
    cy.get('#clearButton').click()


     // check if succesfully divides by 0
     cy.get('#number1Field').clear()
     cy.get('#number2Field').clear()
     cy.get('#number1Field').type("5")
     cy.get('#number2Field').type("0")
     cy.get('#selectOperationDropdown').select("Divide")
     cy.get('#calculateButton').click()
     cy.get('#errorMsgField').contains("Divide by zero error!")


})