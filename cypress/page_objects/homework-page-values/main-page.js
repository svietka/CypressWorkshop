export const mainPage = {
    buildVersion: () => cy.get('#selectBuild'),
    firstNumberInput: () => cy.get('#number1Field'),
    secondNumberInput: () => cy.get('#number2Field'),
    operationDropdown: () => cy.get('#selectOperationDropdown'),
    calculateButtonSelection: () => cy.get('#calculateButton'),
    answerFieldSelection: () => cy.get('#numberAnswerField'),
    integersOnlyCheckbox: () => cy.get('[type="checkbox"]')
};