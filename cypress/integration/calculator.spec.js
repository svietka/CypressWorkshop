import Calculator from "../page_objects/homepage/calculator"
/// <reference types="cypress" />
var calculator = new Calculator()
var firstInput = 1;
var secondInput = 5;
var sumInputs = 6;
var subInputs = -4;
var multInputs = 5;
var divInputs = 0.2;
var concatInputs = 15;
var buildVers = ['Prototype', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
beforeEach("Executes before each test",()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
})



it("Loads Calculator page", ()=>{
   cy.contains('Basic Calculator')
});

buildVers.forEach((buildVer) => {
    it("Checks if two input forms exists", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.firstNumberField().should('exist')
    calculator.secondNumberField().should('exist')
   
});

it("Checks functionality of 'Add' with two provided inputs", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.firstNumberField().type(firstInput)
    calculator.secondNumberField().type(secondInput)
    calculator.selectDropDown().select('Add')
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', sumInputs)
});
it("Checks functionality of 'Add' with two provided inputs when 'Integers only' is selected", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.firstNumberField().type(firstInput)
    calculator.secondNumberField().type(secondInput)
    calculator.selectDropDown().select('Add')
    calculator.onlyIntegers().click()
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', Math.floor(sumInputs))
});
it("Checks functionality of 'Subtract' with two provided inputs", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.firstNumberField().type(firstInput)
    calculator.secondNumberField().type(secondInput)
    calculator.selectDropDown().select('Subtract')
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', subInputs)
});
it("Checks functionality of 'Subtract' with two provided inputs when 'Integers only' is selected", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.firstNumberField().type(firstInput)
    calculator.secondNumberField().type(secondInput)
    calculator.selectDropDown().select('Subtract')
    calculator.onlyIntegers().click()
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', Math.floor(subInputs))
});
it.only("Checks functionality of 'Multiply' with two provided inputs", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.firstNumberField().type(firstInput)
    calculator.secondNumberField().type(secondInput)
    calculator.selectDropDown().select('Multiply')
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', multInputs)
});
it.only("Checks functionality of 'Multiply' when 'Integers only' is turned on", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.firstNumberField().type(firstInput)
    calculator.secondNumberField().type(secondInput)
    calculator.selectDropDown().select('Multiply')
    calculator.onlyIntegers().click()
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', Math.floor(multInputs))
});
it.only("Checks functionality of 'Divide' with two inputs", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.firstNumberField().type(firstInput)
    calculator.secondNumberField().type(secondInput)
    calculator.selectDropDown().select('Divide')
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', divInputs)
});
it.only("Checks functionality of 'Divide' when 'Integers only' is turned on", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.firstNumberField().type(firstInput)
    calculator.secondNumberField().type(secondInput)
    calculator.selectDropDown().select('Divide')
    calculator.onlyIntegers().click()
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', Math.floor(divInputs))
});
it.only("Checks functionality of 'Concatenate'", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.firstNumberField().type(firstInput)
    calculator.secondNumberField().type(secondInput)
    calculator.selectDropDown().select('Concatenate')
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', concatInputs)
});
});