import { mainPageSelectors } from '../../page_objects/homework-page-values/main-page';
import values from '../../page_objects/homework-page-values/number-values';

/// <reference types="cypress" />

beforeEach("Test execution", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
});

const calculateNumberValuesByBuild = (numberValue, buildVersion, mathOperation) => {
    mainPageSelectors.buildVersion().select(buildVersion),
    mainPageSelectors.firstNumberInput().clear(),
    mainPageSelectors.firstNumberInput().type(numberValue.firstNumber),
    mainPageSelectors.secondNumberInput().clear(),
    mainPageSelectors.secondNumberInput().type(numberValue.secondNumber),
    mainPageSelectors.operationDropdown().select(mathOperation),
    mainPageSelectors.calculateButton().click(),
    mainPageSelectors.answerFieldInput().should('have.value', numberValue.expectedResult)
};

describe('Sum tests', () => {

    values.buildVersions.forEach((buildVersion) => {

        context('#1: adding whole numbers', () => {
            values.sumWholeNumberValues.forEach((wholeValue) => {
                it.only(`Checks ${wholeValue.firstNumber} and ${wholeValue.secondNumber} sum to be ${wholeValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    calculateNumberValuesByBuild(wholeValue, buildVersion, 'Add')
                })
            })
        })

        context('#2: adding fraction numbers', () => {
            values.sumFractionNumberValues.forEach((fractionValue) => {
                it(`Checks ${fractionValue.firstNumber} and ${fractionValue.secondNumber} sum to be ${fractionValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    calculateNumberValuesByBuild(fractionValue, buildVersion, 'Add')
                })
            })
        })
    })
});