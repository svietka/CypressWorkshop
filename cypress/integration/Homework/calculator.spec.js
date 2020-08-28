/// <reference types="cypress" />

import Calculator from '../../page_objects/calculator.js'

var calculator = new Calculator

// Build version names for the forEach cycle.
var buildVersions = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//

// Numbers for the TS1, TS2, TS4 and TS6 phases. Can be a ' ', but no symbols.
var firstNumber = 8.5;
var secondNumber = 2.2;
//

// Symbols for the TS5 phase. One of them must be a symbol, not a ' '.
var firstSymbol = ' ';
var secondSymbol = 'P';
//

// Variables for error messages.
var errorMessage;
var divideByZeroError = 'Divide by zero error!';
//

// Defining the error message based on the selected symbols.
if (typeof firstSymbol === "string" && firstSymbol != ' ') {
    errorMessage = 'Number 1 is not a number';
} else if (typeof secondSymbol === "string") {
    errorMessage = 'Number 2 is not a number';
}
//

buildVersions.forEach((buildVersion) => {

    [true, false].forEach((integersOnly) => {

        // Operations for answer checking.
        var addResultNumber = +firstNumber + +secondNumber;
        var subtractResultNumber = firstNumber - secondNumber;
        var multiplyResultNumber = firstNumber * secondNumber;
        var divideResultNumber = firstNumber / secondNumber;
        var concatenateResultNumber = firstNumber.toString() + secondNumber.toString();
        //

        // If the Integers only checkbox is checked then it makes alterations for the following answers.
        if (integersOnly) {
            addResultNumber = addResultNumber | 0;
            subtractResultNumber = subtractResultNumber | 0;
            multiplyResultNumber = multiplyResultNumber | 0;
            divideResultNumber = divideResultNumber | 0;
        }
        //

        describe('TS1 (Build - ' + buildVersion + '): Checking if the "First number" field exists and the user is able to input data', () => {
        
            before("Visits the initial page", () => {
                calculator.visitInitialPage()
                calculator.getBuildDropDownList().select(buildVersion)
            })
        
            it("TS1.1: Checks if the 'First number' field exists on the 'Add' operation and writes " + firstNumber + " into the field", () => {
                calculator.getOperationDropDownList().select('Add')
                calculator.getFirstNumberField().should('exist')
                calculator.getFirstNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getFirstNumberField().should('have.value', firstNumber)
            })
            
            it("TS1.2: Checks if the 'First number' field exists on the 'Subtract' operation and writes " + firstNumber + " into the field", () => {
                calculator.getOperationDropDownList().select('Subtract')
                calculator.getFirstNumberField().should('exist')
                calculator.getFirstNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getFirstNumberField().should('have.value', firstNumber)
            })
            
            it("TS1.3: Checks if the 'First number' field exists on the 'Multiply' operation and writes " + firstNumber + " into the field", () => {
                calculator.getOperationDropDownList().select('Multiply')
                calculator.getFirstNumberField().should('exist')
                calculator.getFirstNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getFirstNumberField().should('have.value', firstNumber)
            })
            
            it("TS1.4: Checks if the 'First number' field exists on the 'Divide' operation and writes " + firstNumber + " into the field", () => {
                calculator.getOperationDropDownList().select('Divide')
                calculator.getFirstNumberField().should('exist')
                calculator.getFirstNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getFirstNumberField().should('have.value', firstNumber)
            })
            
            it("TS1.5: Checks if the 'First number' field exists on the 'Concatenate' operation and writes " + firstNumber + " into the field", () => {
                calculator.getOperationDropDownList().select('Concatenate')
                calculator.getFirstNumberField().should('exist')
                calculator.getFirstNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getFirstNumberField().should('have.value', firstNumber)
            })
        })
        
        describe('TS2 (Build - ' + buildVersion + '): Checking if the "Second number" field exists and the user is able to input data', () => {
            
            before("Visits the initial page", () => {
                calculator.visitInitialPage()
                calculator.getBuildDropDownList().select(buildVersion)
            })
        
            it("TS2.1: Checks if the 'First number' field exists on the 'Add' operation and writes " + secondNumber + " into the field", () => {
                calculator.getOperationDropDownList().select('Add')
                calculator.getSecondNumberField().should('exist')
                calculator.getSecondNumberField().clear()
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getSecondNumberField().should('have.value', secondNumber)
            })
            
            it("TS2.2: Checks if the 'First number' field exists on the 'Subtract' operation and writes " + secondNumber + " into the field", () => {
                calculator.getOperationDropDownList().select('Subtract')
                calculator.getSecondNumberField().should('exist')
                calculator.getSecondNumberField().clear()
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getSecondNumberField().should('have.value', secondNumber)
            })
            
            it("TS2.3: Checks if the 'First number' field exists on the 'Multiply' operation and writes " + secondNumber + " into the field", () => {
                calculator.getOperationDropDownList().select('Multiply')
                calculator.getSecondNumberField().should('exist')
                calculator.getSecondNumberField().clear()
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getSecondNumberField().should('have.value', secondNumber)
            })
            
            it("TS2.4: Checks if the 'First number' field exists on the 'Divide' operation and writes " + secondNumber + " into the field", () => {
                calculator.getOperationDropDownList().select('Divide')
                calculator.getSecondNumberField().should('exist')
                calculator.getSecondNumberField().clear()
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getSecondNumberField().should('have.value', secondNumber)
            })
            
            it("TS2.5: Checks if the 'First number' field exists on the 'Concatenate' operation and writes " + secondNumber + " into the field", () => {
                calculator.getOperationDropDownList().select('Concatenate')
                calculator.getSecondNumberField().should('exist')
                calculator.getSecondNumberField().clear()
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getSecondNumberField().should('have.value', secondNumber)
            })
        })
        
        describe('TS3 (Build - ' + buildVersion + '): Checking if the "Calculate" button works and writes something to the "Answer" field', () => {
            
            before("Visits the initial page", () => {
                calculator.visitInitialPage()
                calculator.getBuildDropDownList().select(buildVersion)
            })
        
            it("TS3.1: Checks if the 'Calculate' button works on the 'Add' operation and returns a value of 0 to the 'Answer' field", () => {
                calculator.getOperationDropDownList().select('Add')
                calculator.getCalculateButton().should('exist')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', 0)
            })
            
            it("TS3.2: Checks if the 'Calculate' button works on the 'Subtract' operation and returns a value of 0 to the 'Answer' field", () => {
                calculator.getOperationDropDownList().select('Subtract')
                calculator.getCalculateButton().should('exist')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', 0)
            })
            
            it("TS3.3: Checks if the 'Calculate' button works on the 'Multiply' operation and returns a value of 0 to the 'Answer' field", () => {
                calculator.getOperationDropDownList().select('Multiply')
                calculator.getCalculateButton().should('exist')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', 0)
            })
            
            it("TS3.4: Checks if the 'Calculate' button works on the 'Divide' operation and returns the error message - " + divideByZeroError , () => {
                calculator.getOperationDropDownList().select('Divide')
                calculator.getCalculateButton().should('exist')
                calculator.getCalculateButton().click()
                calculator.getErrorField().contains(divideByZeroError)
                calculator.visitInitialPage()
            })
            
            it("TS3.5: Checks if the 'Calculate' button works on the 'Concatenate' operation and returns a value of 0 to the 'Answer' field", () => {
                calculator.getOperationDropDownList().select('Concatenate')
                calculator.getCalculateButton().should('exist')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', '')
            })
        })
        
        describe('TS4 (Build - ' + buildVersion + '): Calculator functionality testing with numbers', () => {
            
            before("Selects the 'Integers only' marker based on the integersOnly value and visits the initial page", () => {
                calculator.visitInitialPage()
                calculator.getBuildDropDownList().select(buildVersion)
        
                if (integersOnly) {
                    calculator.getIntegerSelection().click();
                }
            })
        
            it.only("TS4.1: Performs the operation 'Add' with numbers " + firstNumber + " and " + secondNumber + " (Integers only set to - " + integersOnly + " ) and returns the answer " + addResultNumber, () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Add')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', addResultNumber)
            })
            
            it.only("TS4.2: Performs the operation 'Subtract' with numbers " + firstNumber + " and " + secondNumber + " (Integers only set to - " + integersOnly + " ) and returns the answer " + subtractResultNumber, () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Subtract')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', subtractResultNumber)
            })
            
            it("TS4.3: Performs the operation 'Multiply' with numbers " + firstNumber + " and " + secondNumber + " (Integers only set to - " + integersOnly + " ) and returns the answer " + multiplyResultNumber, () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Multiply')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', multiplyResultNumber)
            })
            
            it.only("TS4.4: Performs the operation 'Divide' with numbers " + firstNumber + " and " + secondNumber + " (Integers only set to - " + integersOnly + " ) and returns the answer " + divideResultNumber + " or gets the '" + divideByZeroError + "' error", () => {
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
                    calculator.getAnswerField().should('have.value', divideResultNumber)
                }
            })
            
            it.only("TS4.5: Performs the operation 'Concatenate' with numbers " + firstNumber + " and " + secondNumber + " and returns the answer " + concatenateResultNumber, () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstNumber)
                calculator.getSecondNumberField().type(secondNumber)
                calculator.getOperationDropDownList().select('Concatenate')
                calculator.getCalculateButton().click()
                calculator.getAnswerField().should('have.value', concatenateResultNumber)
            })
        })
        
        describe('TS5 (Build - ' + buildVersion + '): Calculator error checking with numbers and symbols', () => {
            
            before("Selects the 'Integers only' marker based on the integersOnly value and visits the initial page", () => {
                calculator.visitInitialPage()
                calculator.getBuildDropDownList().select(buildVersion)
        
                if (integersOnly) {
                    calculator.getIntegerSelection().click();
                }
            })
        
            it.only("TS5.1: Performs the operation 'Add' with symbols " + firstSymbol + " and " + secondSymbol + " (Integers only set to - " + integersOnly + " ) and returns the following error message - " + errorMessage, () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstSymbol)
                calculator.getSecondNumberField().type(secondSymbol)
                calculator.getOperationDropDownList().select('Add')
                calculator.getCalculateButton().click()
                calculator.getErrorField().contains(errorMessage)
                calculator.getAnswerField().should('be.empty')
            })
            
            it("TS5.2: Performs the operation 'Subtract' with symbols " + firstSymbol + " and " + secondSymbol + " (Integers only set to - " + integersOnly + " ) and returns the following error message - " + errorMessage, () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstSymbol)
                calculator.getSecondNumberField().type(secondSymbol)
                calculator.getOperationDropDownList().select('Subtract')
                calculator.getCalculateButton().click()
                calculator.getErrorField().contains(errorMessage)
                calculator.getAnswerField().should('be.empty')
            })
            
            it("TS5.3: Performs the operation 'Multiply' with symbols " + firstSymbol + " and " + secondSymbol + " (Integers only set to - " + integersOnly + " ) and returns the following error message - " + errorMessage, () => {
                calculator.getFirstNumberField().clear()
                calculator.getSecondNumberField().clear()
                calculator.getFirstNumberField().type(firstSymbol)
                calculator.getSecondNumberField().type(secondSymbol)
                calculator.getOperationDropDownList().select('Multiply')
                calculator.getCalculateButton().click()
                calculator.getErrorField().contains(errorMessage)
                calculator.getAnswerField().should('be.empty')
            })
            
            it("TS5.4: Performs the operation 'Divide' with symbols " + firstSymbol + " and " + secondSymbol + " (Integers only set to - " + integersOnly + " ) and returns the following error message - " + errorMessage, () => {
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
        
        describe('TS6 (Build - ' + buildVersion + '): Calculator "Clear" button functionality testing with numbers', () => {
            
            before("Visits the initial page", () => {
                calculator.visitInitialPage()
                calculator.getBuildDropDownList().select(buildVersion)
            })
        
            beforeEach("Selects the 'Integers only' marker based on the integersOnly value", () => {
                if (integersOnly) {
                    calculator.getIntegerSelection().click();
                }
            })
        
            it("TS6.1: Performs the operation 'Add' with numbers " + firstNumber + " and " + secondNumber + " (Integers only set to - " + integersOnly + " ) and clears the answer field", () => {
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
            
            it("TS6.2: Performs the operation 'Subtract' with numbers " + firstNumber + " and " + secondNumber + " (Integers only set to - " + integersOnly + " ) and clears the answer field", () => {
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
            
            it("TS6.3: Performs the operation 'Multiply' with numbers " + firstNumber + " and " + secondNumber + " (Integers only set to - " + integersOnly + " ) and clears the answer field", () => {
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
            
            it("TS6.4: Performs the operation 'Divide' with numbers " + firstNumber + " and " + secondNumber + " (Integers only set to - " + integersOnly + " ) and clears the answer field or gets the '" + divideByZeroError + "' error", () => {
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
            
            it("TS6.5: Performs the operation 'Concatenate' with numbers " + firstNumber + " and " + secondNumber + " and clears the answer field", () => {
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