/// <reference types="cypress" />

import Calculator from "../../page_objects/calculator/calculator.js";

var calculator = new Calculator()
const builds = Cypress._.range(1, 10).map(String);
builds.unshift('Prototype');

beforeEach('Visit site before each test', () => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator');
})


describe('Number addition', () => {
    builds.forEach((build) => {
        it(`can add -1.5 + 2.6 with build ${build}`, () => {
            calculator.selectBuild(build);
            calculator.add(-1.5, 2.6);
        });
    });
})


describe('Number subtraction', () => {
    builds.forEach((build) => {
        it.only(`can subtract 2.5 - 5 with build ${build}`, () => {
            calculator.selectBuild(build);
            calculator.subtract(2.5, 5);
        });
    });
})


describe('Number multiplication', () => {
    builds.forEach((build) => {
        it(`can multiply 2.5 * 5 with build ${build}`, () => {
            calculator.selectBuild(build);
            calculator.multiply(2.5, 5);
        });
    });
})


describe('Number division', () => {
    builds.forEach((build) => {
        it(`can divide 2.5 / 5 with build ${build}`, () => {
            calculator.selectBuild(build);
            calculator.divide(2.5, 5);
        });
    });
})


describe('Input validation', () => {
    builds.forEach((build) => {
        it.only(`validates first input with build ${build}`, () => {
            calculator.selectBuild(build);
            calculator.validateInput('asd', 2);
        });

        it.only(`validates second input with build ${build}`, () => {
            calculator.selectBuild(build);
            calculator.validateInput(2, 'asd');
        });
    });
})


describe('Clear button', () => {
    builds.forEach((build) => {
        it.only(`clears answer with build ${build}`, () => {
            calculator.selectBuild(build);
            calculator.getClearButton().should('not.be.disabled');

            calculator.getAnswer(1, 1);
            calculator.getAnswerField().invoke('val').should('not.be.empty');
            calculator.getClearButton().click();
            calculator.getAnswerField().invoke('val').should('be.empty');
        });
    });
})


describe('Integers only option', () => {
    builds.forEach((build) => {
        it(`respects integers only option with build ${build}`, () => {
            calculator.selectBuild(build);
            calculator.add(1.2, 5.7, true);
        });
    });
})


describe('String concatenation', () => {
    builds.forEach((build) => {
        it.only(`can concatenate strings 'qwe' and 'asd' with build ${build}`, () => {
            calculator.selectBuild(build);
            calculator.concatenate('qwe', 'asd');
        });
    });
})


describe('Division by zero', () => {
    builds.forEach((build) => {
        it.only(`can handle division by zero error with build ${build}`, () => {
            calculator.selectBuild(build);
            calculator.selectOperation(Calculator.OPERATIONS.DIVIDE);

            calculator.getAnswer(0, 0);
            calculator.getErrorField().should('be.visible').contains('Divide by zero error!');
        });
    });
})
