import { mainPage } from '../../page_objects/homework-page-values/main-page';
import { wholeNumberValues } from '../../page_objects/homework-page-values/number-values';
import { fractionNumberValues } from '../../page_objects/homework-page-values/number-values';
import { fractionNumberValuesIntegerAnswer } from '../../page_objects/homework-page-values/number-values';
import { buildValues } from '../../page_objects/homework-page-values/main-page';

/// <reference types="cypress" />

beforeEach("Test execution", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
});

const sameValues = (buildValue, numberValue) => {
    mainPage.getBuild().select(buildValue),
    mainPage.getNumberStField().type(numberValue.firstNumber)
    mainPage.getNumberNdField().type(numberValue.secondNumber),
    mainPage.getOperationDropdown().select('Add'),
    mainPage.getCalculateButton().click(),
    mainPage.getAnswerField().should('have.value', numberValue.expectedResult)
};

describe('Sum tests', () => {

    context('#1: adding whole numbers', () => {

        buildValues.forEach((buildValue) => {
        
            context(`${buildValue} build`, () => {

                wholeNumberValues.forEach((wholeNumber) => {
                    it(`The answer of adding ${wholeNumber.firstNumber} and ${wholeNumber.secondNumber} is ${wholeNumber.expectedResult}`, () => {
                        sameValues(`${buildValue}` ,wholeNumber);
                    });
                });
            });
        });
    });

    context('#2: adding fraction numbers', () => {

        buildValues.forEach((buildValue) => {

            context(`${buildValue} build`, () => {

                fractionNumberValues.forEach((fractionNumber) => {
                    it(`The answer of adding ${fractionNumber.firstNumber} and ${fractionNumber.secondNumber} is ${fractionNumber.expectedResult}`, () => {
                        sameValues(`${buildValue}` ,fractionNumber);
                    });
                });
            });
        });
    });

    context('#3: adding fraction numbers, but answer is integers only', () => {

        buildValues.forEach((buildValue) => {

            context(`${buildValue} build`, () => {

                fractionNumberValuesIntegerAnswer.forEach((fractionNumberInteger) => {
                    it.only(`The answer of adding ${fractionNumberInteger.firstNumber} and ${fractionNumberInteger.secondNumber} is ${fractionNumberInteger.expectedResult}`, () => {
                        mainPage.getIntegersOnly().check(),
                        sameValues(`${buildValue}` ,fractionNumberInteger);
                    });
                });
            });
        });
    });
});
