/// <reference types="cypress" />

let first_numbers = [8, -3, 8.8];
let second_numbers = [2, -4, 2.5];
let first_letter = "a";
let second_letter = "b";
let build_modes = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operation_choices = ["Add", "Subtract", "Multiply", "Divide", "Concatenate"];

before("Executes before all tests", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator");

})

it("visits page", () => {
    cy.contains('Basic Calculator');
})



// Tests 
// 1

it.only('Should add positive and negative numbers correctly', () => {
    for(let i = 0; i <= 9; i++){
        for(let j = 0; j < first_numbers.length; j++){
        cy.get("#selectBuild").select(build_modes[i]);
        cy.get("#number1Field").clear();
        cy.get("#number1Field").type(first_numbers[j]);
        cy.get("#number2Field").clear();
        cy.get("#number2Field").type(second_numbers[j]);
        cy.wait(100);
        cy.get("#integerSelect").uncheck();
        cy.get("#selectOperationDropdown").select(operation_choices[0]);
        cy.get("#calculateButton").click();
        cy.get("#numberAnswerField").should('have.value', first_numbers[j] + second_numbers[j]);
            }
        }
    })
// 2
it('Should subtract positive and negative numbers correctly', () => {
    for(let i = 0; i <= 9; i++){
        for(let j = 0; j < first_numbers.length; j++){
        cy.get("#selectBuild").select(build_modes[i]);
        cy.get("#number1Field").clear();
        cy.get("#number1Field").type(first_numbers[j]);
        cy.get("#number2Field").clear();
        cy.get("#number2Field").type(second_numbers[j]);
        cy.wait(100);
        cy.get("#integerSelect").uncheck();
        cy.get("#selectOperationDropdown").select(operation_choices[1]);
        cy.get("#calculateButton").click();
        cy.get("#numberAnswerField").should('have.value', first_numbers[j] - second_numbers[j]);
            }        
        }
    })

// 3
it('Should multiply positive and negative numbers correctly', () => {
for(let i = 0; i <= 9; i++){
    for(let j = 0; j < first_numbers.length; j++){
        cy.get("#selectBuild").select(build_modes[i]);
        cy.get("#number1Field").clear();
        cy.get("#number1Field").type(first_numbers[j]);
        cy.get("#number2Field").clear();
        cy.get("#number2Field").type(second_numbers[j]);
        cy.wait(100);
        cy.get("#integerSelect").uncheck();
        cy.get("#selectOperationDropdown").select(operation_choices[2]);
        cy.get("#calculateButton").click();
        cy.get("#numberAnswerField").should('have.value', first_numbers[j] * second_numbers[j]);
        }
    }
})
// 4
it.only('Should divide positive and negative numbers correctly', () => {
    for(let i = 0; i <= 9; i++){
        for(let j = 0; j < first_numbers.length; j++){
        cy.get("#selectBuild").select(build_modes[i]);
        cy.get("#number1Field").clear();
        cy.get("#number1Field").type(first_numbers[j]);
        cy.get("#number2Field").clear();
        cy.get("#number2Field").type(second_numbers[j]);
        cy.wait(100);
        if(cy.get("#integerSelect").should('be.enabled') == true){
        cy.get("#integerSelect").uncheck();}
        cy.get("#selectOperationDropdown").select(operation_choices[3]);
        cy.get("#calculateButton").click();
        cy.get("#numberAnswerField").should('have.value', first_numbers[j] / second_numbers[j]);
            }
        }
    })
// 5
    it.only('Should concatenate positive and negative numbers correctly', () => {
        for(let i = 0; i <= 9; i++){
            for(let j = 0; j < first_numbers.length; j++){
        cy.get("#selectBuild").select(build_modes[i]);
        cy.get("#number1Field").clear();
        cy.get("#number1Field").type(first_numbers[j]);
        cy.get("#number2Field").clear();
        cy.get("#number2Field").type(second_numbers[j]);
        cy.wait(100);
        cy.get("#integerSelect").uncheck();
        cy.get("#selectOperationDropdown").select(operation_choices[4]);
        cy.get("#calculateButton").click();
        cy.get("#numberAnswerField").should('have.value', "" + first_numbers[j] + second_numbers[j]);
            }
        }
    })
    
// 6
    it.only('Should display "Number 1 is not a number" error', () => {
        for(let i = 0; i <= 9; i++){
        cy.get("#selectBuild").select(build_modes[i]);
        cy.get("#number1Field").clear();
        cy.get("#number1Field").type(first_letter);
        cy.get("#number2Field").clear();
        cy.get("#number2Field").type(second_letter);
        cy.wait(100);
        cy.get("#integerSelect").uncheck();
        cy.get("#selectOperationDropdown").select(operation_choices[0]);
        cy.get("#calculateButton").click();
        cy.get("#errorMsgField").should('to.contain','Number 1 is not a number');
    
    }
    })
// 7
    it.only('Should add non integer numbers as integers', () => {
        for(let i = 0; i <= 9; i++){
        cy.get("#selectBuild").select(build_modes[i]);
        cy.get("#number1Field").clear();
        cy.get("#number1Field").type(first_numbers[2]);
        cy.get("#number2Field").clear();
        cy.get("#number2Field").type(second_numbers[2]);
        cy.wait(100);
        cy.get("#integerSelect").check();
        cy.get("#selectOperationDropdown").select(operation_choices[0]);
        cy.get("#calculateButton").click();
        cy.get("#numberAnswerField").should('have.value',  parseInt(first_numbers[2] + second_numbers[2]));
    
    }
    })