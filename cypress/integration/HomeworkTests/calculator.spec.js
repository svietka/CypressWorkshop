/// <reference types="cypress" />

import Calculator from '../../page_objects/calculator.js'
var calculator = new Calculator()

beforeEach('executes before each test',()=>{
    cy.visit(Cypress.env('calculator_url'))
})

describe('should do addition using every build version', () => {
    ['Prototype','1', '2', '3', '4', '5', '6','7','8','9'].forEach((buildVersion) => {
        
        it('does addition with empty values using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getOperationDropdown().select('Add');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '0');
        })
        
        it.only('does addition with invalid first value and clears error message using build: ' + buildVersion, ()=>{       
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type(',');
            calculator.getSecondNumberField().type('5');
            calculator.getOperationDropdown().select('Add');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getErrorMessage().contains('Number 1 is not a number');
            calculator.clickClearButton();
            calculator.getErrorMessage().should('not.be.visible');
        })
        
        it('does addition with positive integer values and clears the answer using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('1.1');
            calculator.getSecondNumberField().type('2');
            calculator.getOperationDropdown().select('Add');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '3.1');
            calculator.getIntegersCheckbox().check();
            calculator.getAnswerField().should('have.value', '3');
            calculator.clickClearButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getIntegersCheckbox().should('not.to.be.checked');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '3.1');
        })
        
        it('does addition with negative integer values and clears the answer using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('-1.1');
            calculator.getSecondNumberField().type('-2');
            calculator.getOperationDropdown().select('Add');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '-3.1');
            calculator.getIntegersCheckbox().check();
            calculator.getAnswerField().should('have.value', '-3');
            calculator.clickClearButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getIntegersCheckbox().should('not.to.be.checked');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '-3.1');
        })

    })
})

describe('should do subtraction using every build version', () => {
    ['Prototype','1', '2', '3', '4', '5', '6','7','8','9'].forEach((buildVersion) => {
        
        it('does subtraction with empty values using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getOperationDropdown().select('Subtract');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '0');
        })
        
        it('does subtraction with invalid first value and clears error message using build: ' + buildVersion, ()=>{       
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type(',');
            calculator.getSecondNumberField().type('5');
            calculator.getOperationDropdown().select('Subtract');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getErrorMessage().contains('Number 1 is not a number');
            calculator.clickClearButton();
            calculator.getErrorMessage().should('not.be.visible')
        })
        
        it('does subtraction with positive integer values and clears the answer using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('4.5');
            calculator.getSecondNumberField().type('2');
            calculator.getOperationDropdown().select('Subtract');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '2.5');
            calculator.getIntegersCheckbox().check();
            calculator.getAnswerField().should('have.value', '2');
            calculator.clickClearButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getIntegersCheckbox().should('not.to.be.checked');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '2.5');
        })
        
        it.only('does subtraction with negative integer values and clears the answer using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('-4.5');
            calculator.getSecondNumberField().type('-2');
            calculator.getOperationDropdown().select('Subtract');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '-2.5');
            calculator.getIntegersCheckbox().check();
            calculator.getAnswerField().should('have.value', '-2');
            calculator.clickClearButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getIntegersCheckbox().should('not.to.be.checked');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '-2.5');
        })

    })
})

describe('should do multiplication using every build version', () => {
    ['Prototype','1', '2', '3', '4', '5', '6','7','8','9'].forEach((buildVersion) => {
        
        it('does multiplication with empty values using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getOperationDropdown().select('Multiply');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '0');
        })
        
        it('does multiplication with invalid first value and clears error message using build: ' + buildVersion, ()=>{       
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type(',');
            calculator.getSecondNumberField().type('5');
            calculator.getOperationDropdown().select('Multiply');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getErrorMessage().contains('Number 1 is not a number');
            calculator.clickClearButton();
            calculator.getErrorMessage().should('not.be.visible');
        })
        
        it('does multiplication with zero using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('0');
            calculator.getSecondNumberField().type('2.11');
            calculator.getOperationDropdown().select('Multiply');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '0');
            calculator.clickClearButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getIntegersCheckbox().should('not.to.be.checked');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '0');
        })
        
        it.only('does multiplication with positive integer values and clears the answer using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('1.1');
            calculator.getSecondNumberField().type('2');
            calculator.getOperationDropdown().select('Multiply');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '2.2');
            calculator.getIntegersCheckbox().check();
            calculator.getAnswerField().should('have.value', '2');
            calculator.clickClearButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getIntegersCheckbox().should('not.to.be.checked');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '2.2');
        })
        
        it('does multiplication with negative integer values and clears the answer using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('-1.1');
            calculator.getSecondNumberField().type('-2');
            calculator.getOperationDropdown().select('Multiply');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '2.2');
            calculator.getIntegersCheckbox().check();
            calculator.getAnswerField().should('have.value', '2');
            calculator.clickClearButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getIntegersCheckbox().should('not.to.be.checked');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '2.2');
        })

    })
})

describe('should do division using every build version', () => {
    ['Prototype','1', '2', '3', '4', '5', '6','7','8','9'].forEach((buildVersion) => {
        
        it('does division with empty values using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getOperationDropdown().select('Divide');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getErrorMessage().contains('Divide by zero error!');
        })
        
        it('does division with invalid first value and clears error message using build: ' + buildVersion, ()=>{       
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type(',');
            calculator.getSecondNumberField().type('5');
            calculator.getOperationDropdown().select('Divide');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getErrorMessage().contains('Number 1 is not a number');
            calculator.clickClearButton();
            calculator.getErrorMessage().should('not.be.visible');
        })
        
        it.only('does division by zero using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('1.5');
            calculator.getSecondNumberField().type('0');
            calculator.getOperationDropdown().select('Divide');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getErrorMessage().contains('Divide by zero error!');
        })
        
        it('does division with positive integer values and clears the answer using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('2.4');
            calculator.getSecondNumberField().type('2');
            calculator.getOperationDropdown().select('Divide');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '1.2');
            calculator.getIntegersCheckbox().check();
            calculator.getAnswerField().should('have.value', '1');
            calculator.clickClearButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getIntegersCheckbox().should('not.to.be.checked');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '1.2');
        })
        
        it('does division with negative integer values and clears the answer using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('-4.5');
            calculator.getSecondNumberField().type('-2');
            calculator.getOperationDropdown().select('Divide');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '2.25');
            calculator.getIntegersCheckbox().check();
            calculator.getAnswerField().should('have.value', '2');
            calculator.clickClearButton();
            calculator.getAnswerField().should('have.value', '');
            calculator.getIntegersCheckbox().should('not.to.be.checked');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '2.25');
        })

    })
})

describe('should do concatenation using every build version', () => {
    ['Prototype','1', '2', '3', '4', '5', '6','7','8','9'].forEach((buildVersion) => {
        
        it('does concatenation with empty values using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getOperationDropdown().select('Concatenate');
            calculator.getIntegersCheckbox().should('not.be.visible');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '');
        })
        
        it.only('does concatenation with invalid values and clears the answer using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('0.1.0');
            calculator.getSecondNumberField().type('2,11');
            calculator.getOperationDropdown().select('Concatenate');
            calculator.getIntegersCheckbox().should('not.be.visible');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '0.1.02,11');
            calculator.getErrorMessage().should('not.be.visible');
            calculator.clickClearButton();
            calculator.getAnswerField().should('have.value', '');
        })
        
        it('does concatenation with negative values and clears the answer using build: ' + buildVersion, ()=>{
            calculator.getBuildDropdown().select(buildVersion);
            calculator.getFirstNumberField().type('-1.1');
            calculator.getSecondNumberField().type('-2');
            calculator.getOperationDropdown().select('Concatenate');
            calculator.getIntegersCheckbox().should('not.be.visible');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '-1.1-2');
            calculator.clickClearButton();
            calculator.getAnswerField().should('have.value', '');
        })

    })
})

