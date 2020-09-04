class Calculator {

    visitInitialPage = () => cy.visit("https://testsheepnz.github.io/BasicCalculator")

    buildDropDownList = () => cy.get('#selectBuild')

    firstNumberField = () => cy.get('#number1Field')

    secondNumberField = () => cy.get('#number2Field')

    operationDropDownList = () => cy.get('#selectOperationDropdown')

    calculateButton = () => cy.get('#calculateButton')

    answerField = () => cy.get('#numberAnswerField')

    integerSelection = () => cy.get('#integerSelect')

    clearButton = () => cy.get('#clearButton')

    errorField = () => cy.get('#errorMsgField')
}

export default Calculator