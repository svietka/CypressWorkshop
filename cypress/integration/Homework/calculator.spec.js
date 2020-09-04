/// <reference types="cypress" />

import Calculator from '../../page_objects/calculator.js'
import testData from './testData.js'

var calculator = new Calculator

var buildVersions = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var divideByZeroError = 'Divide by zero error!';

testData.forEach((numberArray) => {

    buildVersions.forEach((buildVersion) => {

        var errorMessage = defineErrorMessageBasedOnSymbols(numberArray)

        describe(formDescribeSentence("1", buildVersion, "Calculator functionality testing with numbers"), () => {

            before("Selects the 'Integers only' marker based on the integersOnly value and visits the initial page", () => {
                visitPageSelectBuildIntegersOnly(testData.integersOnly, true, buildVersion)
            })

            beforeEach("Clears the first and the second input fields", () => {
                clearBothInputFields()
            })

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
                checkDivisionAnswerOrError(numberArray, true, buildVersion, divideByZeroError, false)
            })

            it.only(formItSentence("1", "5", "Concatenate", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and returns the answer " + numberArray.concatenateOperationResult), () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Concatenate')
                calculator.answerField().should('have.value', numberArray.concatenateOperationResult)
            })
        })

        describe(formDescribeSentence("2", buildVersion, "Calculator error checking with numbers and symbols"), () => {

            before("Selects the 'Integers only' marker based on the integersOnly value and visits the initial page", () => {
                visitPageSelectBuildIntegersOnly(testData.integersOnly, true, buildVersion)
            })

            beforeEach("Clears the first and the second input fields", () => {
                clearBothInputFields()
            })

            it.only(formItSentence("2", "1", "Add", "symbols", numberArray.firstSymbol, numberArray.secondSymbol, numberArray.integersOnly, "and returns the following error message - " + errorMessage), () => {
                performCalculatorOperation(numberArray.firstSymbol, numberArray.secondSymbol, 'Add')
                checkIfErrorFieldContainsMessage(errorMessage)
            })

            it(formItSentence("2", "2", "Subtract", "symbols", numberArray.firstSymbol, numberArray.secondSymbol, numberArray.integersOnly, "and returns the following error message - " + errorMessage), () => {
                performCalculatorOperation(numberArray.firstSymbol, numberArray.secondSymbol, 'Subtract')
                checkIfErrorFieldContainsMessage(errorMessage)
            })

            it(formItSentence("2", "3", "Multiply", "symbols", numberArray.firstSymbol, numberArray.secondSymbol, numberArray.integersOnly, "and returns the following error message - " + errorMessage), () => {
                performCalculatorOperation(numberArray.firstSymbol, numberArray.secondSymbol, 'Multiply')
                checkIfErrorFieldContainsMessage(errorMessage)
            })

            it(formItSentence("2", "4", "Divide", "symbols", numberArray.firstSymbol, numberArray.secondSymbol, numberArray.integersOnly, "and returns the following error message - " + errorMessage), () => {
                performCalculatorOperation(numberArray.firstSymbol, numberArray.secondSymbol, 'Divide')
                checkIfErrorFieldContainsMessage(errorMessage)
            })
        })

        describe(formDescribeSentence("3", buildVersion, "Calculator 'Clear' button functionality testing with numbers"), () => {

            before("Selects the 'Integers only' marker based on the integersOnly value and visits the initial page", () => {
                visitPageSelectBuildIntegersOnly(integersOnly, integerValidation, buildVersion)
            })

            beforeEach("Selects the 'Integers only' marker based on the integersOnly value", () => {

                clearBothInputFields()

                if (numberArray.integersOnly) {
                    calculator.integerSelection().click()
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
                checkDivisionAnswerOrError(numberArray, false, buildVersion, divideByZeroError, true)
            })

            it(formItSentence("3", "5", "Concatenate", "numbers", numberArray.firstNumber, numberArray.secondNumber, numberArray.integersOnly, "and clears the answer field"), () => {
                performCalculatorOperation(numberArray.firstNumber, numberArray.secondNumber, 'Concatenate')
                clearAndCheckAnswerField(true)
            })
        })
    })
})

function selectIntegersIfRequired(integersOnly, integerValidation) {
    if (integersOnly && integerValidation) {
        calculator.integerSelection().click()
    }
}

function visitPageSelectBuildIntegersOnly(integersOnly, integerValidation, buildVersion) {
    calculator.visitInitialPage()
    calculator.buildDropDownList().select(buildVersion)

    selectIntegersIfRequired(integersOnly, integerValidation)
}

function clearBothInputFields() {
    calculator.firstNumberField().clear()
    calculator.secondNumberField().clear()
}

function performCalculatorOperation(firstNumber, secondNumber, operationName) {
    calculator.firstNumberField().type(firstNumber)
    calculator.secondNumberField().type(secondNumber)
    calculator.operationDropDownList().select(operationName)
    calculator.calculateButton().click()
}

function checkIfErrorFieldContainsMessage(errorMessage) {
    calculator.errorField().contains(errorMessage)
    calculator.answerField().should('be.empty')
}

function checkDivisionAnswerOrError(numberArray, integerValidation, buildVersion, divideByZeroError, isClearTest) {

    if (numberArray.secondNumber === 0 || +numberArray.secondNumber + 0 === 0) {
        calculator.errorField().contains(divideByZeroError)
        visitPageSelectBuildIntegersOnly(numberArray.integersOnly, integerValidation, buildVersion)
    } else {

        if (isClearTest) {
            clearAndCheckAnswerField(false)
        }
        else {
            calculator.answerField().should('have.value', numberArray.divideOperationResult)
        }
    }
}

function clearAndCheckAnswerField(concatenateOperation) {

    calculator.clearButton().click()
    calculator.answerField().should('be.empty')
    
    if (!concatenateOperation) {
        calculator.integerSelection().should('not.be.checked')
    }
}

function defineErrorMessageBasedOnSymbols(numberArray) {
    var errorMessage = "";

    if (typeof numberArray.firstSymbol === "string" && numberArray.firstSymbol != ' ') {
        errorMessage = 'Number 1 is not a number';
    } else if (typeof numberArray.secondSymbol === "string") {
        errorMessage = 'Number 2 is not a number';
    }

    return errorMessage;
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