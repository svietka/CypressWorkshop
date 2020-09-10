/// <reference types="cypress" />
import Calculator from '../../page_objects/calculator_main/Calculator.js';


let first_numbers = [3, 0.4, -2, 4];
let second_numbers = [1, 0.6, -0.5, 5];
let build_modes = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operation_choices = ["Add", "Subtract", "Multiply", "Divide", "Concatenate"];
let is_integer_modes = [true, false];


// const test_I_7 = [ build_modes[7], first_numbers[0], second_numbers[0], operation_choices[1], is_integer_modes[0] ];
// const test_I_17 = [ build_modes[2], first_numbers[0], second_numbers[3], operation_choices[4], is_integer_modes[1] ];
// const test_I_27 = [ build_modes[9], first_numbers[0], second_numbers[0], operation_choices[0], is_integer_modes[1] ];
// const test_II_3 = [ build_modes[4], first_numbers[1], second_numbers[1], operation_choices[2], is_integer_modes[0] ];
// const test_II_18 = [ build_modes[8], first_numbers[1], second_numbers[1], operation_choices[3], is_integer_modes[1] ];
// const demo_tests = [ test_I_7, test_I_17, test_I_27, test_II_3, test_II_18 ];





before("Executes before all tests", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator");

})

it("visits page", () => {
    cy.contains('Basic Calculator');
})


   

 it('simple addition', () => {
    // cy.get('#number1Field').type(first_numbers[0]);
    // cy.get('#number2Field').type(second_numbers[0]);
    // cy.get('#selectOperationDropdown').select('Add');
    // cy.get('#calculateButton').click();

  
Calculator.getBuildDropdown().select(build_modes[1]);
Calculator.getFirstNumberField().type(first_numbers[1]);
Calculator.getSecondNumberField().type(second_numbers[0]);
Calculator.getOperationDropdown().select(operation_choices[0]);
Calculator.getCalculateButton().click();
 })

