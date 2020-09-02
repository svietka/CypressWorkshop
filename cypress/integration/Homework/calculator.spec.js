/// <reference types="cypress" />

import Calculator from '../../page_objects/calculator.js'
import numberAnswerArray from '../Homework/numbers.js'

var calculator = new Calculator

// Build version names for the forEach cycle.
var buildVersions = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Variables for error messages.
var divideByZeroError = 'Divide by zero error!';

numberAnswerArray.forEach((numberArray) => {

    buildVersions.forEach((buildVersion) => {

        // Defining the error message based on the selected symbols.
        if (typeof numberArray.firstSymbol === "string" && numberArray.firstSymbol != ' ') {
            var errorMessage = 'Number 1 is not a number';
        } else if (typeof numberArray.secondSymbol === "string") {
            var errorMessage = 'Number 2 is not a number';
        }

        describe(formDescribeSentence("1", buildVersion, "Calculator functionality testing with numbers"), () => {

            beforeSectionForPageAndIntegers(numberArray.integersOnly, true, buildVersion);
            beforeEachClearBothInputFields();

            it.only(formItSentence("1", "1", "Add", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and returns the answer " + numberArray.addOperationResult), () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Add')
                calculator.answerField().should('have.value', numberArray.addOperationResult)
            })

            it.only(formItSentence("1", "2", "Subtract", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and returns the answer " + numberArray.subtractOperationResult), () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Subtract')
                calculator.answerField().should('have.value', numberArray.subtractOperationResult)
            })

            it(formItSentence("1", "3", "Multiply", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and returns the answer " + numberArray.multiplyOperationResult), () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Multiply')
                calculator.answerField().should('have.value', numberArray.multiplyOperationResult)
            })

            it.only(formItSentence("1", "4", "Divide", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and returns the answer " + numberArray.divideOperationResult) + " or gets the '" + divideByZeroError + "' error", () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Divide')

                if (numberArray.secondNumber === 0 || +numberArray.secondNumber + 0 === 0) {
                    calculator.errorField().contains(divideByZeroError)
                    calculator.visitInitialPage()
                    calculator.buildDropDownList().select(buildVersion)

                    if (numberArray.integersOnly) {
                        calculator.integerSelection().click();
                    }
                } else {
                    calculator.answerField().should('have.value', numberArray.divideOperationResult)
                }
            })

            it.only(formItSentence("1", "5", "Concatenate", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and returns the answer " + numberArray.concatenateOperationResult), () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Concatenate')
                calculator.answerField().should('have.value', numberArray.concatenateOperationResult)
            })
        })

        describe(formDescribeSentence("2", buildVersion, "Calculator error checking with numbers and symbols"), () => {

            beforeSectionForPageAndIntegers(numberArray.integersOnly, true, buildVersion);
            beforeEachClearBothInputFields();

            it.only(formItSentence("2", "1", "Add", "symbols", numberArray.firstSymbol, numberArray.secondSymbol, numberArray.integersOnly, "and returns the following error message - " + errorMessage), () => {
                performCalculatorOperation(numberArray.firstSymbol, numberArray.secondSymbol, 'Add')
                checkErrorField(errorMessage)
            })

            it(formItSentence("2", "2", "Subtract", "symbols", numberArray.firstSymbol, numberArray.secondSymbol, numberArray.integersOnly, "and returns the following error message - " + errorMessage), () => {
                performCalculatorOperation(numberArray.firstSymbol, numberArray.secondSymbol, 'Subtract')
                checkErrorField(errorMessage)
            })

            it(formItSentence("2", "3", "Multiply", "symbols", numberArray.firstSymbol, numberArray.secondSymbol, numberArray.integersOnly, "and returns the following error message - " + errorMessage), () => {
                performCalculatorOperation(numberArray.firstSymbol, numberArray.secondSymbol, 'Multiply')
                checkErrorField(errorMessage)
            })

            it(formItSentence("2", "4", "Divide", "symbols", numberArray.firstSymbol, numberArray.secondSymbol, numberArray.integersOnly, "and returns the following error message - " + errorMessage), () => {
                performCalculatorOperation(numberArray.firstSymbol, numberArray.secondSymbol, 'Divide')
                checkErrorField(errorMessage)
            })
        })

        describe.only(formDescribeSentence("3", buildVersion, "Calculator 'Clear' button functionality testing with numbers"), () => {

            beforeSectionForPageAndIntegers(numberArray.integersOnly, false, buildVersion);
            beforeEachClearBothInputFields();

            beforeEach("Selects the 'Integers only' marker based on the integersOnly value", () => {
                if (numberArray.integersOnly) {
                    calculator.integerSelection().click();
                }
            })

            it(formItSentence("3", "1", "Add", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and clears the answer field"), () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Add')
                clearAndCheckAnswerField(false)
            })

            it(formItSentence("3", "2", "Subtract", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and clears the answer field"), () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Subtract')
                clearAndCheckAnswerField(false)
            })

            it(formItSentence("3", "3", "Multiply", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and clears the answer field"), () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Multiply')
                clearAndCheckAnswerField(false)
            })

            it(formItSentence("3", "4", "Divide", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and clears the answer field or gets the '" + divideByZeroError + "' error"), () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Divide')

                if (numberArray.secondNumber === 0 || +numberArray.secondNumber + 0 === 0) {
                    calculator.errorField().contains(divideByZeroError)
                    calculator.visitInitialPage()
                    calculator.buildDropDownList().select(buildVersion)

                    if (numberArray.integersOnly) {
                        calculator.integerSelection().click();
                    }
                } else {
                    clearAndCheckAnswerField(false)
                }
            })

            it(formItSentence("3", "5", "Concatenate", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and clears the answer field"), () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Concatenate')
                clearAndCheckAnswerField(true)
            })
        })
    })
})

function beforeSectionForPageAndIntegers(integersOnly, integerValidation, buildVersion) {
    before("Selects the 'Integers only' marker based on the integersOnly value and visits the initial page", () => {
        calculator.visitInitialPage()
        calculator.buildDropDownList().select(buildVersion)

        if (integersOnly && integerValidation) {
            calculator.integerSelection().click()
        }
    })
}

function beforeEachClearBothInputFields() {
    beforeEach("Clears the first and the second input fields", () => {
        calculator.firstNumberField().clear()
        calculator.secondNumberField().clear()
    })
}

function performCalculatorOperation(firstNumber, secondNumber, operationName) {
    calculator.firstNumberField().type(firstNumber)
    calculator.secondNumberField().type(secondNumber)
    calculator.operationDropDownList().select(operationName)
    calculator.calculateButton().click()
}

function checkErrorField(errorMessage) {
    calculator.errorField().contains(errorMessage)
    calculator.answerField().should('be.empty')
}

function clearAndCheckAnswerField(concatenateOperation) {

    calculator.clearButton().click()
    calculator.answerField().should('be.empty')
    
    if (!concatenateOperation) {
        calculator.integerSelection().should('not.be.checked')
    }
}

function formDescribeSentence(describeNumber, buildVersion, sideNote) {
    return "TS" + describeNumber + " (Build - " + buildVersion + "): " + sideNote;
}

function formItSentence(describeNumber, testNumber, operationName, valueName, firstNumber, secondNumber, integersOnly, answer) {
    if (operationName === 'Concatenate') {
        return "TS" + describeNumber + "." + testNumber + ": Performs the operation '" + operationName + "' with " + valueName + " " + firstNumber + " and " + secondNumber + " " + answer;
    }
    else {
        return "TS" + describeNumber + "." + testNumber + ": Performs the operation '" + operationName + "' with " + valueName + " " + firstNumber + " and " + secondNumber + " (Integers only set to - " + integersOnly + ") " + answer;
    }
}