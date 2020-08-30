/// <reference types="cypress" />

import Calculator from '../../page_objects/calculator.js'

var calculator = new Calculator

// Build version names for the forEach cycle.
var buildVersions = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Numbers for the TS1, TS2, TS4 and TS6 phases. Can be a ' ', but no symbols.
var firstNumber = 8.5;
var secondNumber = 2.2;

// Symbols for the TS5 phase. One of them must be a symbol, not a ' '.
var firstSymbol = ' ';
var secondSymbol = 'P';

// Variables for error messages.
var errorMessage;
var divideByZeroError = 'Divide by zero error!';

// Defining the error message based on the selected symbols.
if (typeof firstSymbol === "string" && firstSymbol != ' ') {
    errorMessage = 'Number 1 is not a number';
} else if (typeof secondSymbol === "string") {
    errorMessage = 'Number 2 is not a number';
}

buildVersions.forEach((buildVersion) => {

    [true, false].forEach((integersOnly) => {

        // Operations for answer checking.
        var addOperationResult = +firstNumber + +secondNumber;
        var subtractOperationResult = firstNumber - secondNumber;
        var multiplyOperationResult = firstNumber * secondNumber;
        var divideOperationResult = firstNumber / secondNumber;
        var concatenateOperationResult = firstNumber.toString() + secondNumber.toString();

        // If the Integers only checkbox is checked then it makes alterations for the following answers.
        if (integersOnly) {
            addOperationResult = addOperationResult | 0;
            subtractOperationResult = subtractOperationResult | 0;
            multiplyOperationResult = multiplyOperationResult | 0;
            divideOperationResult = divideOperationResult | 0;
        }
        
        describe(formDescribeSentence("1", buildVersion, "Calculator functionality testing with numbers"), () => {

            beforeSectionForPageAndIntegers(integersOnly, true, buildVersion);
        
            it.only(formItSentence("1", "1", "Add", "numbers", firstNumber, secondNumber, integersOnly, "and returns the answer " + addOperationResult), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Add')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', addOperationResult)
            })
            
            it.only(formItSentence("1", "2", "Subtract", "numbers", firstNumber, secondNumber, integersOnly, "and returns the answer " + subtractOperationResult), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Subtract')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', subtractOperationResult)
            })
            
            it(formItSentence("1", "3", "Multiply", "numbers", firstNumber, secondNumber, integersOnly, "and returns the answer " + multiplyOperationResult), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Multiply')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', multiplyOperationResult)
            })
            
            it.only(formItSentence("1", "4", "Divide", "numbers", firstNumber, secondNumber, integersOnly, "and returns the answer " + divideOperationResult) + " or gets the '" + divideByZeroError + "' error", () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Divide')
                calculator.getCalculateButton().click()
                
                if (secondNumber === 0 || +secondNumber + 0 === 0) {
                    calculator.getErrorField().contains(divideByZeroError)
                    calculator.visitInitialPage()
                    calculator.getBuildDropDownList().select(buildVersion)
        
                    if (integersOnly) {
                        calculator.getIntegerSelection().click();
                    }
                } else {
                    calculator.getAnswerField().should('have.value', divideOperationResult)
                }
            })
            
            it.only(formItSentence("1", "5", "Concatenate", "numbers", firstNumber, secondNumber, integersOnly, "and returns the answer " + concatenateOperationResult), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Concatenate')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', concatenateOperationResult)
            })
        })
        
        describe(formDescribeSentence("2", buildVersion, "Calculator error checking with numbers and symbols"), () => {

            beforeSectionForPageAndIntegers(integersOnly, true, buildVersion);
        
            it.only(formItSentence("2", "1", "Add", "symbols", firstSymbol, secondSymbol, integersOnly, "and returns the following error message - " + errorMessage), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstSymbol)
                calculator.getSecondNumberField().type(secondSymbol)
                calculator.getOperationDropDownList().select('Add')
                calculator.getCalculateButton().click()
                calculator.getErrorField().contains(errorMessage)
                calculator.getAnswerField().should('be.empty')
            })
            
            it(formItSentence("2", "2", "Subtract", "symbols", firstSymbol, secondSymbol, integersOnly, "and returns the following error message - " + errorMessage), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstSymbol)
                calculator.getSecondNumberField().type(secondSymbol)
                calculator.getOperationDropDownList().select('Subtract')
                calculator.getCalculateButton().click()
                calculator.getErrorField().contains(errorMessage)
                calculator.getAnswerField().should('be.empty')
            })
            
            it(formItSentence("2", "3", "Multiply", "symbols", firstSymbol, secondSymbol, integersOnly, "and returns the following error message - " + errorMessage), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstSymbol)
                calculator.getSecondNumberField().type(secondSymbol)
                calculator.getOperationDropDownList().select('Multiply')
                calculator.getCalculateButton().click()
                calculator.getErrorField().contains(errorMessage)
                calculator.getAnswerField().should('be.empty')
            })
            
            it(formItSentence("2", "4", "Divide", "symbols", firstSymbol, secondSymbol, integersOnly, "and returns the following error message - " + errorMessage), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstSymbol)
                calculator.getSecondNumberField().type(secondSymbol)
                calculator.getOperationDropDownList().select('Divide')
                calculator.getCalculateButton().click()
                calculator.getErrorField().contains(errorMessage)
                calculator.getAnswerField().should('be.empty')
            })
        })
        
        describe.only(formDescribeSentence("3", buildVersion, "Calculator 'Clear' button functionality testing with numbers"), () => {

            beforeSectionForPageAndIntegers(integersOnly, false, buildVersion);
        
            beforeEach("Selects the 'Integers only' marker based on the integersOnly value", () => {
                if (integersOnly) {
                    calculator.getIntegerSelection().click();
                }
            })
        
            it(formItSentence("3", "1", "Add", "numbers", firstNumber, secondNumber, integersOnly, "and clears the answer field"), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Add')
                calculator.getCalculateButton().click()
                calculator.getClearButton().click()
                calculator.getAnswerField().should('be.empty')
                calculator.getIntegerSelection().should('not.be.checked')
            })
            
            it(formItSentence("3", "2", "Subtract", "numbers", firstNumber, secondNumber, integersOnly, "and clears the answer field"), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Subtract')
                calculator.getCalculateButton().click()
                calculator.getClearButton().click()
                calculator.getAnswerField().should('be.empty')
                calculator.getIntegerSelection().should('not.be.checked')
            })
            
            it(formItSentence("3", "3", "Multiply", "numbers", firstNumber, secondNumber, integersOnly, "and clears the answer field"), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Multiply')
                calculator.getCalculateButton().click()
                calculator.getClearButton().click()
                calculator.getAnswerField().should('be.empty')
                calculator.getIntegerSelection().should('not.be.checked')
            })
            
            it(formItSentence("3", "4", "Divide", "numbers", firstNumber, secondNumber, integersOnly, "and clears the answer field or gets the '" + divideByZeroError + "' error"), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Divide')
                calculator.getCalculateButton().click()
        
                if (secondNumber === 0 || +secondNumber + 0 === 0) {
                    calculator.getErrorField().contains(divideByZeroError)
                    calculator.visitInitialPage()
                    calculator.getBuildDropDownList().select(buildVersion)
        
                    if (integersOnly) {
                        calculator.getIntegerSelection().click();
                    }
                } else {
                    calculator.getClearButton().click()
                    calculator.getAnswerField().should('be.empty')
                    calculator.getIntegerSelection().should('not.be.checked')
                }
            })
            
            it(formItSentence("3", "5", "Concatenate", "numbers", firstNumber, secondNumber, integersOnly, "and clears the answer field"), () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Concatenate')
                calculator.getCalculateButton().click()
                calculator.getClearButton().click()
                calculator.getAnswerField().should('be.empty')
            })
        })
    })
})

function beforeSectionForPageAndIntegers(integersOnly, integerValidation, buildVersion) {
    before("Selects the 'Integers only' marker based on the integersOnly value and visits the initial page", () => {
        calculator.visitInitialPage()
        calculator.getBuildDropDownList().select(buildVersion)

        if (integersOnly && integerValidation) {
            calculator.getIntegerSelection().click()
        }
    })
}

function formDescribeSentence(describeNumber, buildVersion, sideNote) {
    return "TS" + describeNumber + " (Build - " + buildVersion + "): " + sideNote;
}

function formItSentence(describeNumber, testNumber, operationName, valueName, firstNumber, secondNumber, integersOnly, answer) {
    return "TS" + describeNumber + "." + testNumber + ": Performs the operation '"+ operationName + "' with " + valueName + " " + firstNumber + " and " + secondNumber + " (Integers only set to - " + integersOnly + ") " + answer;
}