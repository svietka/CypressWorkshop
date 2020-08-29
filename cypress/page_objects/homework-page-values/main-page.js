export const mainPageSelectors = {
    buildVersion: () => cy.get('#selectBuild'),
    firstNumberInput: () => cy.get('#number1Field'),
    secondNumberInput: () => cy.get('#number2Field'),
    operationDropdown: () => cy.get('#selectOperationDropdown'),
    calculateButton: () => cy.get('#calculateButton'),
    answerFieldInput: () => cy.get('#numberAnswerField'),
    integersOnlyCheckbox: () => cy.get('[type="checkbox"]')
};
