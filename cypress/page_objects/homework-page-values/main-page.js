export const mainPage = {
    getBuild: () => cy.get('#selectBuild'),
    getNumberStField: () => cy.get('#number1Field'),
    getNumberNdField: () => cy.get('#number2Field'),
    getOperationDropdown: () => cy.get('#selectOperationDropdown'),
    getCalculateButton: () => cy.get('#calculateButton'),
    getAnswerField: () => cy.get('#numberAnswerField'),
    getIntegersOnly: () => cy.get('[type="checkbox"]')
};

export const buildValues = ['Prototype', 1, 2, 3, 4, 5, 6, 7, 8, 9];