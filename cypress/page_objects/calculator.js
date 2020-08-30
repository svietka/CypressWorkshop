class Calculator {

    visitInitialPage = () => cy.visit("https://testsheepnz.github.io/BasicCalculator")

    getBuildDropDownList = () => cy.get('#selectBuild')

    getFirstNumberField = () => cy.get('#number1Field')

    getSecondNumberField = () => cy.get('#number2Field')

    getOperationDropDownList = () => cy.get('#selectOperationDropdown')

    getCalculateButton = () => cy.get('#calculateButton')

    getAnswerField = () => cy.get('#numberAnswerField')

    getIntegerSelection = () => cy.get('#integerSelect')

    getClearButton = () => cy.get('#clearButton')

    getErrorField = () => cy.get('#errorMsgField')
}

export default Calculator