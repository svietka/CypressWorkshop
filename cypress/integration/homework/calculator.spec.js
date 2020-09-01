/// <reference types="cypress" />

import CalculatorPage from "../../pageObjects/calculatorPage/CalculatorPage.js"

var calculator = new CalculatorPage();
var numberOfBuilds = 10; // prototype + builds

const functions = ['Add', 'Subtract', 'Divide', 'Multiply', 'Concatenate'];

beforeEach("Executes before each test", () => {
    cy.visit('/BasicCalculator');
})

it("Loads calculator page", () => {
    cy.get('.intro-heading').should('contain.text','Basic Calculator');
})

it("Add two float numbers", () => {
    var number1 = (Math.random() * 100).toPrecision(5);
    var number2 = (Math.random() * 100).toPrecision(5);
    var answer = (parseFloat(number2) + parseFloat(number1));

    calculator.get1InputField().type(number1);
    calculator.get2InputField().type(number2);
    calculator.getSelectOperationDropdown().select('Add');
    calculator.getCalculateButton().click();
    calculator.getAnswerField().should('contain.value', answer);
})

describe('Should calculate with two float numbers', () => {
    var number1 = (Math.random() * 100).toPrecision(5);
    var number2 = (Math.random() * 100).toPrecision(5);
    var answers = [(parseFloat(number1) + parseFloat(number2)).toString(), (parseFloat(number1) - parseFloat(number2)).toString(),
         (parseFloat(number1) / parseFloat(number2)).toString(), (parseFloat(number1) * parseFloat(number2)).toString(), (number1 + number2).toString()];

    for (let index1 = 1; index1 < numberOfBuilds; index1++) { // builds
        for (let index = 0; index < functions.length; index++) { // functions
        it.only(`${functions[index]} two float numbers in the build ${index1}`, () => { 
                calculator.getBuild().select(index1.toString());
                calculator.get1InputField().type(number1, {force: true});
                calculator.get2InputField().type(number2, {force: true});  
                calculator.getSelectOperationDropdown().select(functions[index]);
                calculator.getCalculateButton().click({force: true});
                calculator.getAnswerField().should('have.value', answers[index]);     
        })
    }
}
})

describe('Adding one number and one string line in each build', () => {
    var number1 = Math.random().toString(36).substring(5) + 'a';
    var number2 = (Math.random() * 100).toPrecision(5);

    for (let index1 = 0; index1 < numberOfBuilds; index1++) { // builds
        it(`Testing function Add in build number ${index1}`, () => {
            calculator.getBuild().select(index1.toString());
            calculator.get1InputField().type(number1);
            calculator.get2InputField().type(number2);  
            calculator.getSelectOperationDropdown().select('Add');
            calculator.getCalculateButton().click();
            calculator.getErrorMessage().should('contain.text', 'Number 1 is not a number');
        })
    }
})


describe('Subtracting one number and one string line in each build', () => {
    var number1 = Math.random().toString(36).substring(5) + 'a';
    var number2 = (Math.random() * 100).toPrecision(5);

    for (let index1 = 0; index1 < numberOfBuilds; index1++) { // builds
        it(`Testing function Subtract in build number ${index1}`, () => {
            calculator.getBuild().select(index1.toString());
            calculator.get1InputField().type(number1);
            calculator.get2InputField().type(number2);  
            calculator.getSelectOperationDropdown().select('Subtract');
            calculator.getCalculateButton().click({force: true});
            calculator.getErrorMessage().should('contain.text', 'Number 1 is not a number');
        })
    }
})

describe('After multiplying one number and one string line, a correct error message shows up in each build', () => {
    var number1 = Math.random().toString(36).substring(5) + 'a';
    var number2 = (Math.random() * 100).toPrecision(5);

    for (let index1 = 1; index1 < numberOfBuilds; index1++) { // builds
        it.only(`Testing function Multiply in build number ${index1}`, () => {
            calculator.getBuild().select(index1.toString());
            calculator.get1InputField().type(number1, {force: true});
            calculator.get2InputField().type(number2, {force: true});  
            calculator.getSelectOperationDropdown().select('Multiply');
            calculator.getCalculateButton().click({force: true});
            calculator.getErrorMessage().should('contain.text', 'Number 1 is not a number');
        })
    }
})  

describe('Dividing one number and one string line in each build', () => {
    var number1 = Math.random().toString(36).substring(5) + 'a';
    var number2 = (Math.random() * 100).toPrecision(5);

    for (let index1 = 1; index1 < numberOfBuilds; index1++) { // builds
        it(`Testing function Divide in build number ${index1}`, () => { 
            calculator.getBuild().select(index1.toString());
            calculator.get1InputField().type(number1,{force: true});
            calculator.get2InputField().type(number2,{force: true});  
            calculator.getSelectOperationDropdown().select('Divide');
            calculator.getCalculateButton().click({force: true});
            calculator.getErrorMessage().should('contain.text', 'Number 1 is not a number');
        })
    }
})  

describe('Checking if devision by 0 is hadled with error message in each build', () => {
    var number1 = (Math.random() * 100).toPrecision(5);
    var number2 = 0;

    for (let index = 1; index < numberOfBuilds; index++) {
        it.only(`Build number ${index}`, () => {
            calculator.getBuild().select(index.toString());
            calculator.get1InputField().type(number1, {force: true});
            calculator.get2InputField().type(number2, {force: true});
            calculator.getSelectOperationDropdown().select('Divide');  
            calculator.getCalculateButton().click({force: true});
            calculator.getErrorMessage().should('contain.text', 'Divide by zero error!');     
        })
    }
})

describe('Checks the Integers only checkbox and verifies that the answer is an integer', () => {
    var number1 = (Math.random() * 100).toPrecision(5);
    var number2 = (Math.random() * 100).toPrecision(5);

    for (let index = 1; index < numberOfBuilds; index++) {
        it.only(`Build number ${index}`, () => { 
            calculator.getBuild().select(index.toString());
            calculator.get1InputField().type(number1, {force: true});
            calculator.get2InputField().type(number2, {force: true});
            calculator.getSelectOperationDropdown().select('Add');  
            calculator.getCalculateButton().click({force: true});
            calculator.getAnswerField().invoke('val').then(($answer) => {
                var ans = Math.floor(parseFloat($answer));
                calculator.getIntegerSelectButton().click({force: true});
                calculator.getAnswerField().invoke('val').then(($roundedAnswer) => {
                    expect(ans.toString()).eq($roundedAnswer);
                })
            })
        })
    }
})

describe('After a click of Clear button, Answer field should be cleared in each build', () => {
    var number1 = (Math.random() * 100).toPrecision(5);
    var number2 = (Math.random() * 100).toPrecision(3);

    for (let index = 1; index < numberOfBuilds; index++) {
        it.only(`Build number ${index}`, () => { 
            calculator.getBuild().select(index.toString());
            calculator.get1InputField().type(number1, {force: true});
            calculator.get2InputField().type(number2, {force: true});
            calculator.getSelectOperationDropdown().select('Add');  
            calculator.getCalculateButton().click({force: true});
            calculator.getClearButton().click();
            calculator.getAnswerField().should('contain', '');
        })
    }
})