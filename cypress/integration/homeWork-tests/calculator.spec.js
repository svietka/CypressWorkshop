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

describe('Calculator math operations test', () => {

    // The build versions I used to test were those who did have bugs + Prototype version as a control build.
    // NOTE: 9 build fails everytime, because it does have a disabled second input!

    values.buildVersions.forEach((buildVersion) => {

        //The following test leads build 2 to concatenate numbers.
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

        context('#3: adding fraction numbers, but answer is integers only', () => {
            values.sumFractionNumberValuesIntegerAnswer.forEach((fractionValue) => {
                it(`Checks ${fractionValue.firstNumber} and ${fractionValue.secondNumber} sum to be ${fractionValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    mainPageSelectors.integersOnlyCheckbox().check(),
                    calculateNumberValuesByBuild(fractionValue, buildVersion, 'Add')
                })
            })
        })

        context('#4: subtracting whole numbers', () => {
            values.subtractWholeNumberValues.forEach((wholeValue) => {
                it(`Checks ${wholeValue.firstNumber} and ${wholeValue.secondNumber} subtraction to be ${wholeValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    calculateNumberValuesByBuild(wholeValue, buildVersion, 'Subtract')
                })
            })
        })

        //The following test leads build 4 to convert fraction number answers to whole numbers.
        context('#5: subtracting fraction numbers', () => {
            values.subtractFractionNumberValues.forEach((fractionValue) => {
                it.only(`Checks ${fractionValue.firstNumber} and ${fractionValue.secondNumber} subtraction to be ${fractionValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    calculateNumberValuesByBuild(fractionValue, buildVersion, 'Subtract')
                })
            })
        })

        context('#6: subtracting fraction numbers, but answer is integers only', () => {
            values.subtractFractionNumberValuesIntegerAnswer.forEach((fractionValue) => {
                it(`Checks ${fractionValue.firstNumber} and ${fractionValue.secondNumber} subtraction to be ${fractionValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    mainPageSelectors.integersOnlyCheckbox().check(),
                    calculateNumberValuesByBuild(fractionValue, buildVersion, 'Subtract')
                })
            })
        })

        context('#7: multiplying whole numbers', () => {
            values.multiplyWholeNumberValues.forEach((wholeValue) => {
                it(`Checks ${wholeValue.firstNumber} and ${wholeValue.secondNumber} multiply to be ${wholeValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    calculateNumberValuesByBuild(wholeValue, buildVersion, 'Multiply')
                })
            })
        })

        //The following test fails in the Prototype and other builds, because of the known JavaScript flaw.
        context('#8: multiplying fraction numbers', () => {
            values.multiplyFractionNumberValues.forEach((fractionValue) => {
                it.only(`Checks ${fractionValue.firstNumber} and ${fractionValue.secondNumber} multiply to be ${fractionValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    calculateNumberValuesByBuild(fractionValue, buildVersion, 'Multiply')
                })
            })
        })

        context('#9: multiplying fraction numbers, but answer is integers only', () => {
            values.multiplyFractionNumberValuesIntegerAnswer.forEach((fractionValue) => {
                it(`Checks ${fractionValue.firstNumber} and ${fractionValue.secondNumber} multiply to be ${fractionValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    mainPageSelectors.integersOnlyCheckbox().check(),
                    calculateNumberValuesByBuild(fractionValue, buildVersion, 'Multiply')
                })
            })
        })

        //The following test fails in the build 6, as the answers in this build are 'NaN' when dividing by zero, while Prototype answers an empty string.
        context('#10: dividing whole numbers', () => {
            values.divideWholeNumberValues.forEach((wholeValue) => {
                it.only(`Checks ${wholeValue.firstNumber} and ${wholeValue.secondNumber} divide to be ${wholeValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    calculateNumberValuesByBuild(wholeValue, buildVersion, 'Divide')
                })
            })
        })

        context('#11: dividing fraction numbers', () => {
            values.divideFractionNumberValues.forEach((fractionValue) => {
                it(`Checks ${fractionValue.firstNumber} and ${fractionValue.secondNumber} divide to be ${fractionValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    calculateNumberValuesByBuild(fractionValue, buildVersion, 'Divide')
                })
            })
        })

        //The following test fails in the build 8, as the inputs are switched when presenting the answer.
        context('#12: concatenating numbers', () => {
            values.concatenateNumbers.forEach((wholeValue) => {
                it.only(`Checks ${wholeValue.firstNumber} and ${wholeValue.secondNumber} concatenation to be ${wholeValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    calculateNumberValuesByBuild(wholeValue, buildVersion, 'Concatenate')
                })
            })
        })

        context('#13: adding symbols as inputs', () => {
            values.symbolValues.forEach((wholeValue) => {
                it(`Checks ${wholeValue.firstNumber} and ${wholeValue.secondNumber} sum to be ${wholeValue.expectedResult} with calculator version: ${buildVersion}`, () => {
                    calculateNumberValuesByBuild(wholeValue, buildVersion, 'Add')
                })
            })
        })
    })
});