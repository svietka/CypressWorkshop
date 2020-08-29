import { mainPage } from '../../page_objects/homework-page-values/main-page';
import { sumWholeNumberValues } from '../../page_objects/homework-page-values/number-values';
import { sumFractionNumberValues } from '../../page_objects/homework-page-values/number-values';
import { sumFractionNumberValuesIntegerAnswer } from '../../page_objects/homework-page-values/number-values';
import { multiplyWholeNumberValues } from '../../page_objects/homework-page-values/number-values';
import { symbolValues } from '../../page_objects/homework-page-values/number-values';

/// <reference types="cypress" />

beforeEach("Test execution", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
});

const addNumberValues = (numberValue) => {
    mainPage.firstNumberInput().type(numberValue.firstNumber),
    mainPage.secondNumberInput().type(numberValue.secondNumber),
    mainPage.operationDropdown().select('Add'),
    mainPage.calculateButtonSelection().click(),
    mainPage.answerFieldSelection().should('have.value', numberValue.expectedResult)
};

describe('Sum tests', () => {

    context('#1: adding whole numbers', () => {

        ["Prototype", "2","7", "9"].forEach((calculatorVersion) => {
            sumWholeNumberValues.forEach((wholeValue) => {
                it(`Checks ${wholeValue.firstNumber} and ${wholeValue.secondNumber} sum to be ${wholeValue.expectedResult} with calculator version: ${calculatorVersion}`, () => {
                    mainPage.buildVersion().select(calculatorVersion),
                    addNumberValues(wholeValue)
                })
            })
        })
    });

    context('#2: adding fraction numbers', () => {
        ["Prototype", "4"].forEach((calculatorVersion) => {
            sumFractionNumberValues.forEach((fractionValue) => {
                it(`Checks ${fractionValue.firstNumber} and ${fractionValue.secondNumber} sum to be ${fractionValue.expectedResult} with calculator version: ${calculatorVersion}`, () => {
                    mainPage.buildVersion().select(calculatorVersion),
                    addNumberValues(fractionValue)
                })
            })
        })
    })
});

// ["Prototype", "2","7", "9"].forEach((calculatorVersion) => {
//         it.only(`Checks whole number sum function to be correct with calculator version: ${calculatorVersion}`, () => {
//              mainPage.buildVersion().select(calculatorVersion),
//              mainPage.firstNumberInput().type(2),
//              mainPage.secondNumberInput().type(2),
//              mainPage.operationDropdown().select('Add'),
//              mainPage.calculateButtonSelection().click(),
//              mainPage.answerFieldSelection().should('have.value', 4)
//     })
// });