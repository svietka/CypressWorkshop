// <reference types="Cypress" />

import HomePage from './objektai/HomePage.js'

var homePage = new HomePage

var listTags = ['1', '2', '3', '4']
var website = "https://testsheepnz.github.io/BasicCalculator";

var numberField1 = "#number1Field";
var numberField2 = "#number2Field";
var clearButton = "#clearButton";
var buildDropDown = "#selectBuild";
var actionDropDown = "#selectOperationDropdown";


describe('Calculator Homepage', () => {
    describe('Addition', () => {
        it.only("Test addition on every version of a calculator", () => {
            context('Build ', () => {
                cy.visit(website)
                cy.get(actionDropDown).select("Add")
                for (var i = 1; i <= 3; i++) {
                    cy.get(buildDropDown).select(i.toString());
                    homePage.checkIfFieldsEnabled(numberField1)
                    homePage.checkIfFieldsEnabled(numberField2)
                    homePage.checkIfFieldsEnabled(clearButton)
                    homePage.enterFieldsWith("-1", "-1", "Add")
                    homePage.checkAnswer('-2')
                    homePage.enterFieldsWith("1", "1", "Add")
                    homePage.checkAnswer('2')
                    homePage.enterFieldsWith("Ding", "Dong", "Add")
                    homePage.checkAnswer('NaN')
                    homePage.enterFieldsWith("3006", "-300", "Add")
                    homePage.checkAnswer('2706')
                    homePage.enterFieldsWith("2147483647", "1000", "Add")
                    homePage.checkAnswer('2147484647')

                }
            })
        })
    })
    describe('Subtraction', () => {
        it.only("Test subtraction on every version of a calculator", () => {
            context('Build ', () => {
                cy.visit(website)
                cy.get(actionDropDown).select("Subtract")
                for (var i = 1; i <= 3; i++) {
                    cy.get(buildDropDown).select(i.toString());
                    homePage.checkIfFieldsEnabled(numberField1)
                    homePage.checkIfFieldsEnabled(numberField2)
                    homePage.checkIfFieldsEnabled(clearButton)
                    homePage.enterFieldsWith("-1", "-1", "Subtract")
                    homePage.checkAnswer('0')
                    homePage.enterFieldsWith("1", "1", "Subtract")
                    homePage.checkAnswer('0')
                    homePage.enterFieldsWith("Ding", "Dong", "Subtract")
                    homePage.checkAnswer('NaN')
                    homePage.enterFieldsWith("3006", "-300", "Subtract")
                    homePage.checkAnswer('3306')
                    homePage.enterFieldsWith("2147483647", "1000", "Subtract")
                    homePage.checkAnswer('2147482647')

                }
            })
        })
    })
    describe('Multiply', () => {
        it.only("Test multiplication on every version of a calculator", () => {
            context('Build ', () => {
                cy.visit(website)
                cy.get(actionDropDown).select("Multiply")
                for (var i = 1; i <= 3; i++) {
                    cy.get(buildDropDown).select(i.toString());
                    homePage.checkIfFieldsEnabled(numberField1)
                    homePage.checkIfFieldsEnabled(numberField2)
                    homePage.checkIfFieldsEnabled(clearButton)
                    homePage.enterFieldsWith("-1", "-1", "Multiply")
                    homePage.checkAnswer('1')
                    homePage.enterFieldsWith("1", "1", "Multiply")
                    homePage.checkAnswer('1')
                    homePage.enterFieldsWith("Ding", "Dong", "Multiply")
                    homePage.checkAnswer('NaN')
                    homePage.enterFieldsWith("3006", "-300", "Multiply")
                    homePage.checkAnswer('-901800')
                    homePage.enterFieldsWith("2147483647", "1000", "Multiply")
                    homePage.checkAnswer('2147483647000')

                }
            })
        })
    })
    describe('Divide', () => {
        it.only("Test division on every version of a calculator", () => {
            context('Build ', () => {
                cy.visit(website)
                cy.get(actionDropDown).select("Divide")
                for (var i = 1; i <= 3; i++) {
                    cy.get(buildDropDown).select(i.toString());
                    homePage.checkIfFieldsEnabled(numberField1)
                    homePage.checkIfFieldsEnabled(numberField2)
                    homePage.checkIfFieldsEnabled(clearButton)
                    homePage.enterFieldsWith("-1", "-1", "Divide")
                    homePage.checkAnswer('1')
                    homePage.enterFieldsWith("1", "1", "Divide")
                    homePage.checkAnswer('1')
                    homePage.enterFieldsWith("Ding", "Dong", "Divide")
                    homePage.checkAnswer('NaN')
                    homePage.enterFieldsWith("3006", "-300", "Divide")
                    homePage.checkAnswer('-10.02')
                    homePage.enterFieldsWith("2147483647", "1000", "Divide")
                    homePage.checkAnswer('2147483.647')

                }
            })
        })
    })
    describe('Concatenate', () => {
        it.only("Test concatenation on every version of a calculator", () => {
            context('Build ', () => {
                cy.visit(website)
                cy.get(actionDropDown).select("Concatenate")
                for (var i = 1; i <= 3; i++) {
                    cy.get(buildDropDown).select(i.toString());
                    homePage.checkIfFieldsEnabled(numberField1)
                    homePage.checkIfFieldsEnabled(numberField2)
                    homePage.checkIfFieldsEnabled(clearButton)
                    homePage.enterFieldsWith("-1", "-1", "Concatenate")
                    homePage.checkAnswer('-1-1')
                    homePage.enterFieldsWith("1", "1", "Concatenate")
                    homePage.checkAnswer('11')
                    homePage.enterFieldsWith("Ding", "Dong", "Concatenate")
                    homePage.checkAnswer('DingDong')
                    homePage.enterFieldsWith("3006", "-300", "Concatenate")
                    homePage.checkAnswer('3006-300')
                    homePage.enterFieldsWith("2147483647", "1000", "Concatenate")
                    homePage.checkAnswer('21474836471000')

                }
            })
        })
    })
})

