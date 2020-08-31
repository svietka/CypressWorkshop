import CalculatorPage from "../../page_objects/calculatorPage/calculatorPage.js"
/// <reference types="cypress"/>

const calculatorPage = new CalculatorPage()

const buildTypes = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const firstNumber = -3.25
const secondNumber = 2.5

const invalidInput = "%"

const expectedAddResult = firstNumber + secondNumber
const expectedSubtractResult = firstNumber - secondNumber
const expectedMultiplyResult = firstNumber * secondNumber
const expectedDivideResult = firstNumber / secondNumber
const expectedConcatenateResult = firstNumber.toString() + secondNumber.toString()

const expectedIntOfAddResult = parseInt(expectedAddResult)

describe("Calculator page", () => {
    beforeEach("Opens the calculator page before each test", () => {
        // baseUrl cannot be used as it automatically adds a slash at the end of the URL (produces 404)
        cy.visit("https://testsheepnz.github.io/BasicCalculator")
    })

    it("Loads the calculator page", () => {
        cy.contains("calculate")
    })

    describe("'Add' operation", () => {
        buildTypes.forEach((buildType) => {
            it.only(`Adds two numbers correctly (Build: ${buildType})`, () => {
                calculatorPage.assertChooseBuildTypeAndEnterCalculatorNumbersThenChooseOperationAndCalculate(buildType, firstNumber, secondNumber, "Add", expectedAddResult)
            })
        })
    })

    describe("'Subtract' operation", () => {
        buildTypes.forEach((buildType) => {
            it.only(`Subtracts two numbers correctly (Build: ${buildType})`, () => {
                calculatorPage.assertChooseBuildTypeAndEnterCalculatorNumbersThenChooseOperationAndCalculate(buildType, firstNumber, secondNumber, "Subtract", expectedSubtractResult)
            })
        })
    })

    describe("'Multiply' operation", () => {
        buildTypes.forEach((buildType) => {
            it.only(`Multiplies two numbers correctly (Build: ${buildType})`, () => {
                calculatorPage.assertChooseBuildTypeAndEnterCalculatorNumbersThenChooseOperationAndCalculate(buildType, firstNumber, secondNumber, "Multiply", expectedMultiplyResult)
            })
        })
    })

    describe("'Divide' operation", () => {
        buildTypes.forEach((buildType) => {
            it.only(`Divides two numbers correctly (Build: ${buildType})`, () => {
                calculatorPage.assertChooseBuildTypeAndEnterCalculatorNumbersThenChooseOperationAndCalculate(buildType, firstNumber, secondNumber, "Divide", expectedDivideResult)
            })
        })
    })

    describe("'Concatenate' operation", () => {
        buildTypes.forEach((buildType) => {
            it(`Concatenates two numbers correctly (Build: ${buildType})`, () => {
                calculatorPage.assertChooseBuildTypeAndEnterCalculatorNumbersThenChooseOperationAndCalculate(buildType, firstNumber, secondNumber, "Concatenate", expectedConcatenateResult)
            })
        })
    })

    describe("'Integers only' tickbox functionatility", () => {
        buildTypes.forEach((buildType) => {
            it.only(`Shows correct integer (Build: ${buildType})`, () => {
                calculatorPage.chooseBuildType(buildType)
                calculatorPage.clickIntegerSelectBox()
                calculatorPage.assertEnterCalculatorNumbersThenChooseOperationAndCalculate(firstNumber, secondNumber, "Add", expectedIntOfAddResult)
            })
        })
    })

    describe("'Integers only' tickbox with 'Concatenate' operation", () => {
        buildTypes.forEach((buildType) => {
            it(`Tickbox is not be visible '(Build: ${buildType})`, () => {
                calculatorPage.chooseBuildType(buildType)
                calculatorPage.chooseOperation("Concatenate")
                calculatorPage.getIntegerSelectBox().should("not.be.visible")
            })
        })
    })

    describe("Divide by zero", () => {
        buildTypes.forEach((buildType) => {
            it(`Dividing by zero results in an error '(Build: ${buildType})`, () => {
                calculatorPage.chooseBuildTypeAndEnterCalculatorNumbersThenChooseOperationAndCalculate(buildType, firstNumber, 0, "Divide")
                calculatorPage.getErrorMessageField().should("contain", "Divide by zero error")
            })
        })
    })

    describe("Non-number input in first number field", () => {
        buildTypes.forEach((buildType) => {
            it(`First number field recognizes non-number input (Build: ${buildType})`, () => {
                calculatorPage.chooseBuildType(buildType)
                calculatorPage.enterFirstNumber(invalidInput)
                calculatorPage.clickCalculate()
                calculatorPage.getErrorMessageField().should("contain", "Number 1 is not a number")
            })
        })
    })

    describe("Non-number input in second number field", () => {
        buildTypes.forEach((buildType) => {
            it(`Second number field recognizes non-number input (Build: ${buildType})`, () => {
                calculatorPage.chooseBuildType(buildType)
                calculatorPage.enterSecondNumber(invalidInput)
                calculatorPage.clickCalculate()
                calculatorPage.getErrorMessageField().should("contain", "Number 2 is not a number")
            })
        })
    })

    describe("'Clear' button can be pressed", () => {
        buildTypes.forEach((buildType) => {
            it(`'Clear' button is not disabled (Build: ${buildType})`, () => {
                calculatorPage.chooseBuildType(buildType)
                calculatorPage.getClearButton().should("not.be.disabled")
            })
        })
    })

    describe("'Clear' button functionatility", () => {
        buildTypes.forEach((buildType) => {
            it(`Clears the answer field (Build: ${buildType})`, () => {
                calculatorPage.chooseBuildTypeAndEnterCalculatorNumbersThenChooseOperationAndCalculate(buildType, firstNumber, secondNumber, "Add")
                calculatorPage.clickClearButton()
                calculatorPage.getAnswerField().should("be.empty")
            })
        })
    })
})