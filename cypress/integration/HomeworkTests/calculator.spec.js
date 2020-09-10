/// <reference types="cypress" />
import Calculator from '../../page_objects/calculator_main/Calculator.js';

let first_numbers = [3, 0.4, -2, 4];
let second_numbers = [1, 0.6, -0.5, 5];
let build_modes = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operation_choices = ["Add", "Subtract", "Multiply", "Divide", "Concatenate"];
let is_integer_modes = [true, false];

// One of the points. Prototype build does not trigger any test failures
const test_I_Prototype = [ build_modes[0], first_numbers[1], second_numbers[3], operation_choices[1], is_integer_modes[0] ];
// Prototype build does not trigger any test failures
// Second build. Concatenate and add functions are mixed up
const test_I_2 = [ build_modes[2], first_numbers[0], second_numbers[3], operation_choices[4], is_integer_modes[1] ];
//  Second build. Concatenate and add functions are mixed up instead of "35" it gives us "8"

// Fourth build. Substraction and addition with FLOAT numbers gets you bad results
const test_I_4 = [ build_modes[4], first_numbers[0], second_numbers[1], operation_choices[1], is_integer_modes[1] ];
// Fourth build. Substraction gets you a value of "2" instead of "2.4"

// Third build. Multiplication with gives you bad results if you uncheck integer only
const test_I_3 = [ build_modes[3], first_numbers[0], second_numbers[1], operation_choices[2], is_integer_modes[1] ];


// Seventh build. Addition gives you a bad result. (Other operations gives a bad result as well)
const test_I_77 = [ build_modes[7], first_numbers[0], second_numbers[1], operation_choices[1], is_integer_modes[1] ];
// Seventh build. Addition gets you a value

// Eight build. Concatenate gives you bad result
const test_I_8 = [ build_modes[8], first_numbers[0], second_numbers[1], operation_choices[4], is_integer_modes[1] ];
// Eight build. Concatenate gets you a value of "0.63" instead of "3.6"


// const test_I_7 = [ build_modes[7], first_numbers[0], second_numbers[0], operation_choices[1], is_integer_modes[0] ];
// const test_I_17 = [ build_modes[2], first_numbers[0], second_numbers[3], operation_choices[4], is_integer_modes[1] ];
// const test_I_27 = [ build_modes[9], first_numbers[0], second_numbers[0], operation_choices[0], is_integer_modes[1] ];
// const test_II_3 = [ build_modes[4], first_numbers[1], second_numbers[1], operation_choices[2], is_integer_modes[0] ];
// const test_II_18 = [ build_modes[8], first_numbers[1], second_numbers[1], operation_choices[3], is_integer_modes[1] ];
// const demo_tests = [ test_I_7, test_I_17, test_I_27, test_II_3, test_II_18 ];
// AKTYVUOTI EASY WAY!! PANAIKINTI KOMENTAVIMA SEKANCIAI EILUTEI
 const demo_tests = [ test_I_Prototype, test_I_2, test_I_4, test_I_3, test_I_77, test_I_8 ];


before("Executes before all tests", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator");

})

it("visits page", () => {
    cy.contains('Basic Calculator');
})

// All-case testing.
for(let l = 0; l < first_numbers.length; l++){

    let calculator = new Calculator(build_modes[0], first_numbers[l], second_numbers[l], operation_choices[0], is_integer_modes[0]);

    for (let k = 0; k < is_integer_modes.length; k++) {
        for (let i = 9; i < build_modes.length; i++) {
            for (let j = 0; j < operation_choices.length; j++){

                // Adjustment of the test name.
                let is_integer_text = "expecting integer result";

                if (is_integer_modes[k] === false) {
                    is_integer_text = "expecting not necessarily integer result";
                }

                if (operation_choices[j] === "Concatenate") {
                    is_integer_text = "";
                    if (is_integer_modes[k] === true) {
                        break;
                    }
                }

                // Test run.
                it("selects build mode \'" + build_modes[i] + "\' and performs two number operation \'" + operation_choices[j] + "\' " + is_integer_text, () => {
                    calculator.getClearButton().click();
                    calculator.getFirstNumberField().clear();
                    calculator.getSecondNumberField().clear();

                    calculator.setBuildMode(build_modes[i]);
                    calculator.setOperationChoice(operation_choices[j]);
                    calculator.setIsResultInteger(is_integer_modes[k]);

                    calculator.getBuildDropdown().select(calculator.getBuilMode());
                    calculator.getFirstNumberField().type(calculator.getFirstNumber());
                    calculator.getSecondNumberField().type(calculator.getSecondNumber());
                    calculator.getOperationDropdown().select(calculator.getOperationChoice());

                    if (is_integer_modes[k] === true) {
                        calculator.getIntegerCheckBox().check();
                    }

                    calculator.getCalculateButton().click();
                    calculator.getAnswerField().should("have.value", calculator.operationOutcome());

                    if (is_integer_modes[k] === true) {
                        calculator.getIntegerCheckBox().uncheck();
                    }
                })
            }
        }
    }
}

// Tests for demonstration.
for(let i = 0; i < demo_tests.length; i++){

    let test_build_mode = demo_tests[i][0];
    let test_first_number = demo_tests[i][1];
    let test_second_number = demo_tests[i][2];
    let test_operation_choice = demo_tests[i][3];
    let test_is_integer_result = demo_tests[i][4];
    
    let calculator = new Calculator(test_build_mode, test_first_number, test_second_number, test_operation_choice, test_is_integer_result);

    // Adjustment of the test name.
    let is_integer_text = "expecting integer result";

    if (test_is_integer_result === false) {
        is_integer_text = "expecting not necessarily integer result";
    }

    if (test_operation_choice === "Concatenate") {
        is_integer_text = "";
        if (test_is_integer_result === true) {
            break;
        }
    }

    it("selects build mode \'" + test_build_mode + "\' and performs two number operation \'"
     + test_operation_choice + "\' " + is_integer_text, () => {
        calculator.getClearButton().click();
        calculator.getFirstNumberField().clear();
        calculator.getSecondNumberField().clear();

        calculator.setBuildMode(test_build_mode);
        calculator.setOperationChoice(test_operation_choice);
        calculator.setIsResultInteger(test_is_integer_result);

        calculator.getBuildDropdown().select(calculator.getBuilMode());
        calculator.getFirstNumberField().type(calculator.getFirstNumber());
        calculator.getSecondNumberField().type(calculator.getSecondNumber());
        calculator.getOperationDropdown().select(calculator.getOperationChoice());

        if (test_is_integer_result === true) {
            calculator.getIntegerCheckBox().check();
        }

        calculator.getCalculateButton().click();
        calculator.getAnswerField().should("have.value", calculator.operationOutcome());

        if (test_is_integer_result === true) {
            calculator.getIntegerCheckBox().uncheck();
        }
    })
}

// My tests
// First test
// it.only('simple addition', () => {
//     calculator.getBuildDropdown().select(build_modes[1]);
//     calculator.getFirstNumberField().type(first_numbers[0]);
//     calculator.getSecondNumberField().type(second_numbers[0]);
//     calculator.getOperationDropdown().select('Add');
//     calculator.getCalculateButton().click();
//     calculator.getSecondNumberField().should('have.value', '4');
    // cy.get('#number1Field').type(first_numbers[0]);
    // cy.get('#number2Field').type(second_numbers[0]);
    // cy.get('#selectOperationDropdown').select('Add');
    // cy.get('#calculateButton').click();
// })