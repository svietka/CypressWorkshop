/// <reference types="cypress" />

var firstInput = 2.5;
var secondInput =2;

var sumInputs = firstInput + secondInput;
var subInputs = firstInput - secondInput;
var multInputs = firstInput * secondInput;
var divInputs = firstInput / secondInput;
var concatInputs = firstInput.toString() + secondInput.toString();


var buildVers = ['Prototype', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

it("Loads the TestSheepNz Calculator page", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.contains('Calculate')
});


buildVers.forEach((buildVer) => {

it("Checks if it adds two numbers", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get('#selectBuild').select(buildVer)
    cy.get('#number1Field').type(firstInput)
    cy.get('#number2Field').type(secondInput)
    cy.get('#selectOperationDropdown').select('Add')
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', sumInputs)

});

it("Checks if it adds two numbers if integer only marked", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get('#selectBuild').select(buildVer)
    cy.get('#number1Field').type(firstInput)
    cy.get('#number2Field').type(secondInput)
    cy.get('#selectOperationDropdown').select('Add')
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', Math.floor(sumInputs))
});

it("Checks if it subtracts two numbers", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get('#selectBuild').select(buildVer)
    cy.get('#number1Field').type(firstInput)
    cy.get('#number2Field').type(secondInput)
    cy.get('#selectOperationDropdown').select('Subtract')
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', subInputs)
});

it("Checks if it subtracts two numbers if integer only marked", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get('#selectBuild').select(buildVer)
    cy.get('#number1Field').type(firstInput)
    cy.get('#number2Field').type(secondInput)
    cy.get('#selectOperationDropdown').select('Subtract')
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', Math.floor(subInputs))
});

it("Checks if it multiplys two numbers", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get('#selectBuild').select(buildVer)
    cy.get('#number1Field').type(firstInput)
    cy.get('#number2Field').type(secondInput)
    cy.get('#selectOperationDropdown').select('Multiply')
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', multInputs)
});

it("Checks if it multiplys two numbers if integer only marked", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get('#selectBuild').select(buildVer)
    cy.get('#number1Field').type(firstInput)
    cy.get('#number2Field').type(secondInput)
    cy.get('#selectOperationDropdown').select('Multiply')
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', Math.floor(multInputs))
});

it("Checks if it divides two numbers", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get('#selectBuild').select(buildVer)
    cy.get('#number1Field').type(firstInput)
    cy.get('#number2Field').type(secondInput)
    cy.get('#selectOperationDropdown').select('Divide')
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', divInputs)
});

it("Checks if it divides two numbers if integer only marked", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get('#selectBuild').select(buildVer)
    cy.get('#number1Field').type(firstInput)
    cy.get('#number2Field').type(secondInput)
    cy.get('#selectOperationDropdown').select('Divide')
    cy.get('#integerSelect').click()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', Math.floor(divInputs))
});

it("Checks if it concatenates two inputs as strings", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get('#selectBuild').select(buildVer)
    cy.get('#number1Field').type(firstInput)
    cy.get('#number2Field').type(secondInput)
    cy.get('#selectOperationDropdown').select('Concatenate')
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', concatInputs)
});

});