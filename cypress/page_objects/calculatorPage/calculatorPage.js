class CalculatorPage{
    getBuildDropdown() {
        return cy.get("#selectBuild")
    }

    getFirstNumberField() {
        return cy.get("#number1Field")
    }

    getSecondNumberField() {
        return cy.get("#number2Field")
    }

    getOperationDropdown() {
        return cy.get("#selectOperationDropdown")
    }

    getCalculateButton() {
        return cy.get("#calculateButton")
    }
    
    getAnswerField() {
        return cy.get("#numberAnswerField")
    }

    getClearButton() {
        return cy.get("#clearButton")
    }

    getIntegerSelectBox() {
        return cy.get("#integerSelect")
    }

    getErrorMessageField() {
        return cy.get("#errorMsgField")
    }

    chooseBuildType(buildType) {
        this.getBuildDropdown().select(buildType)
    }

    chooseOperation(operation) {
        this.getOperationDropdown().select(operation)
    }

    enterFirstNumber(firstNumber) {
        this.getFirstNumberField().type(firstNumber)
    }

    enterSecondNumber(secondNumber) {
        this.getSecondNumberField().type(secondNumber)
    }

    enterCalculatorNumbers(firstNumber, secondNumber) {
        this.enterFirstNumber(firstNumber)
        this.enterSecondNumber(secondNumber)
    }

    clickCalculate() {
        this.getCalculateButton().click()
    }

    
    clickIntegerSelectBox() {
        this.getIntegerSelectBox().click()
    }

    clickClearButton() {
        this.getClearButton().click()
    }

    enterCalculatorNumbersThenChooseOperationAndCalculate(firstNumber, secondNumber, operation) {
        this.enterCalculatorNumbers(firstNumber, secondNumber)
        this.chooseOperation(operation)
        this.clickCalculate()
    }

    chooseBuildTypeAndEnterCalculatorNumbersThenChooseOperationAndCalculate(buildType, firstNumber, secondNumber, operation) {
        this.chooseBuildType(buildType)
        this.enterCalculatorNumbersThenChooseOperationAndCalculate(firstNumber, secondNumber, operation)
    }

    assertEnterCalculatorNumbersThenChooseOperationAndCalculate(firstNumber, secondNumber, operation, expectedResult) {
        this.enterCalculatorNumbersThenChooseOperationAndCalculate(firstNumber, secondNumber, operation)
        this.getAnswerField().should("have.value", expectedResult)
    }

    assertChooseBuildTypeAndEnterCalculatorNumbersThenChooseOperationAndCalculate(buildType, firstNumber, secondNumber, operation, expectedResult) {
        this.chooseBuildTypeAndEnterCalculatorNumbersThenChooseOperationAndCalculate(buildType, firstNumber, secondNumber, operation)
        this.getAnswerField().should("have.value", expectedResult)
    }
}

export default CalculatorPage