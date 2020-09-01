import calculator from "../../PageObjects/Calculator/CalculatorPlugin.js"
/// <reference types="cypress" />

beforeEach("Executes before each test",()=>{
    cy.visit("/BasicCalculator")
})

var calc = new calculator()
var Nr1 = 6.6;
var Nr2 = 3.33;
var letter='a';
var operationchoices = ["Add", "Subtract", "Multiply", "Divide", "Concatenate"];
var errorMessage =['Number 1 is not a number','Number 2 is not a number'] 
var divideByZeroerrorMessage = 'Divide by zero error!';
var Builds = ['Prototype', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var outcomes = [Nr1+Nr2, Nr1-Nr2, Nr1*Nr2, Nr1/Nr2, Nr1.toString()+Nr2.toString(), Nr1+letter]

describe('Check if all the fields ar present and interactive', () => {
    Builds.forEach((Builds) => {
        operationchoices.forEach((operationchoices) =>{
    it.only('Checks if all the fields ar present and interactive in build ' + Builds + ' with function ' +operationchoices, () => {
    calc.getBuild().select(Builds);
    calc.getNr1().should('exist').type(Nr1);
    calc.getNr2().should('exist').type(Nr2);
    calc.getOperation().select(operationchoices);
    calc.getCalculate().should('exist').click();
    calc.getAnswer().should('not.contain', ' ');
    calc.getClear().should('exist').click();
    calc.getAnswer().should('be.empty');
    })
    })
    })       
    })

// CONCATENATE
describe('Should concatenate a number and a letter', () => {
    Builds.forEach((Builds) => {
    it.only('Concatenates a number and a letter in build ' + Builds, () => {
    calc.getBuild().select(Builds);
    calc.getNr1().type(Nr1);
    calc.getNr2().type(letter);
    calc.getOperation().select(operationchoices[4]);
    calc.getCalculate().click();
    calc.getAnswer().should('have.value', outcomes[5]);
    })
    })
    })       

describe('Should concatenate two number in the right order', () => {
    Builds.forEach((Builds) => {
    it('Concatenates two numbers in the right order in build ' + Builds, () => {
    calc.getBuild().select(Builds);
    calc.getNr1().type(Nr1);
    calc.getNr2().type(Nr2);
    calc.getOperation().select(operationchoices[4]);
    calc.getCalculate().click();
    calc.getAnswer().should('have.value', outcomes[4]);
    })
    })
    })         

// ADD
describe('Should add two numbers correctly', () => {
    Builds.forEach((Builds) => {
    it('Adds two numbers in build ' + Builds, () => {
    calc.getBuild().select(Builds);
    calc.getNr1().type(Nr1);
    calc.getNr2().type(Nr2);
    calc.getOperation().select(operationchoices[0]);
    calc.getCalculate().click();
    calc.getAnswer().should('have.value', outcomes[0]);
    })
    })
    })         

describe('Should add a number and a letter', () => {
    Builds.forEach((Builds) => {
    it.only('Adds a number and a letter in build ' + Builds, () => {
    calc.getBuild().select(Builds);
    calc.getNr1().type(Nr1);
    calc.getNr2().type(letter);
    calc.getOperation().select(operationchoices[0]);
    calc.getCalculate().click();
    calc.getErrorMsg().contains(errorMessage[2], errorMessage[1])
    calc.getAnswer().should('be.empty');
    })
    })   
    }) 


describe('Should add two numbers correctly when integers only is selected and then clear answer field', () => {
     Builds.forEach((Builds) => {
    it.only('Adds two numbers in build ' + Builds, () => {
    calc.getBuild().select(Builds);
    calc.getNr1().type(Nr1);
    calc.getNr2().type(Nr2);
    calc.getOperation().select(operationchoices[0]);
    calc.getCalculate().click();
    calc.getAnswer().should('have.value', (outcomes[0]));
    calc.getIntegers().click();
    calc.getAnswer().should('have.value', parseInt(outcomes[0]));
    calc.getClear().click();
    calc.getAnswer().should('be.empty');
    calc.getIntegers().should('not.be.checked');
    })
    })
    }) 


// SUBTRACT
describe('Should subtract numbers correctly', () => {
    Builds.forEach((Builds) => {
    it('Subtracts two numbers in build ' + Builds, () => {
    calc.getBuild().select(Builds);
    calc.getNr1().type(Nr1);
    calc.getNr2().type(Nr2);
    calc.getOperation().select(operationchoices[1]);
    calc.getCalculate().click();
    calc.getAnswer().should('have.value', outcomes[1]);
    })
    })
    })

// MULTIPLY
describe('Should multiply numbers correctly', () => {
    Builds.forEach((Builds) => {
    it('Multiplies two numbers in build ' + Builds, () => {
    calc.getBuild().select(Builds);
    calc.getNr1().type(Nr1);
    calc.getNr2().type(0);
    calc.getOperation().select(operationchoices[2]);
    calc.getCalculate().click();
    calc.getAnswer().should('have.value', 0);
    calc.getNr2().clear().type(Nr2);
    calc.getCalculate().click();
    calc.getIntegers().click();
    calc.getAnswer().should('have.value', parseInt(outcomes[2]));
    })
    })
    })

// DIVIDE
describe('Should divide numbers correctly', () => {
    Builds.forEach((Builds) => {
    it('Divides two numbers in build ' + Builds, () => {
    calc.getBuild().select(Builds);
    calc.getNr1().type(Nr1);
    calc.getNr2().type(Nr2);
    calc.getOperation().select(operationchoices[3]);
    calc.getCalculate().click();
    calc.getAnswer().should('have.value', outcomes[3]);
    })
    })
    })
   
describe('Check division by zero', () => {
    Builds.forEach((Builds) => {
    it.only('Checks division by zero in build ' + Builds, () => {
    calc.getBuild().select(Builds);
    calc.getNr1().type(Nr1);
    calc.getNr2().type(0);
    calc.getOperation().select(operationchoices[3]);
    calc.getCalculate().click();
    calc.getErrorMsg().should('contain', divideByZeroerrorMessage)
    })
    })
    })