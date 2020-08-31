import Calculator from "../../page_objects/homepage/calculator.js";
/// <reference types="cypress" />

var calculator = new Calculator()

var firstInput = 2.5;
var secondInput =2;

var sumInputs = firstInput + secondInput;
var subInputs = firstInput - secondInput;
var multInputs = firstInput * secondInput;
var divInputs = firstInput / secondInput;
var concatInputs = firstInput.toString() + secondInput.toString();


var buildVers = ['Prototype', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

beforeEach("Executes before each test",()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
})

it("1. Loads the TestSheepNz Calculator page", ()=>{
   cy.contains('Calculate')
});


buildVers.forEach((buildVer) => {

it("1.2 Checks if two input forms exists", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.getInputFieldFirst().should('exist')
    calculator.getInputFieldSecond().should('exist')
   // calculator.getInputFieldFirst().should('have.value', '')
   // calculator.getInputFieldFirst().should('have.value', '')
});


it("2.1 Checks functionality of 'Add' with two provided inputs", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.getInputFieldFirst().type(firstInput)
    calculator.getInputFieldSecond().type(secondInput)
    calculator.selectDropDown().select('Add')
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', sumInputs)

});

it("2.2 Checks functionality of 'Add' with two provided inputs when 'Integers only' is selected", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.getInputFieldFirst().type(firstInput)
    calculator.getInputFieldSecond().type(secondInput)
    calculator.selectDropDown().select('Add')
    calculator.onlyIntegers().click()
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', Math.floor(sumInputs))
});

it("3.1 Checks functionality of 'Subtract' with two provided inputs", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.getInputFieldFirst().type(firstInput)
    calculator.getInputFieldSecond().type(secondInput)
    calculator.selectDropDown().select('Subtract')
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', subInputs)
});

it.only("3.2 Checks functionality of 'Subtract' with two provided inputs when 'Integers only' is selected", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.getInputFieldFirst().type(firstInput)
    calculator.getInputFieldSecond().type(secondInput)
    calculator.selectDropDown().select('Subtract')
    calculator.onlyIntegers().click()
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', Math.floor(subInputs))
});

it("4.1 Checks functionality of 'Multiply' with two provided inputs", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.getInputFieldFirst().type(firstInput)
    calculator.getInputFieldSecond().type(secondInput)
    calculator.selectDropDown().select('Multiply')
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', multInputs)
});

it.only("4.2 Checks functionality of 'Multiply' with two provided inputs when 'Integers only' is selected", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.getInputFieldFirst().type(firstInput)
    calculator.getInputFieldSecond().type(secondInput)
    calculator.selectDropDown().select('Multiply')
    calculator.onlyIntegers().click()
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', Math.floor(multInputs))
});

it.only("5.1 Checks functionality of 'Divide' with two provided inputs", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.getInputFieldFirst().type(firstInput)
    calculator.getInputFieldSecond().type(secondInput)
    calculator.selectDropDown().select('Divide')
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', divInputs)
});

it.only("5.2 Checks functionality of 'Divide' with two provided inputs when 'Integers only' is selected", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.getInputFieldFirst().type(firstInput)
    calculator.getInputFieldSecond().type(secondInput)
    calculator.selectDropDown().select('Divide')
    calculator.onlyIntegers().click()
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', Math.floor(divInputs))
});

it.only("6.1 Checks functionality of 'Concatenate' with two provided inputs", ()=>{
    calculator.getbuildVersion().select(buildVer)
    calculator.getInputFieldFirst().type(firstInput)
    calculator.getInputFieldSecond().type(secondInput)
    calculator.selectDropDown().select('Concatenate')
    calculator.calculateButton().click()
    calculator.getAnswerField().should('have.value', concatInputs)
});

});