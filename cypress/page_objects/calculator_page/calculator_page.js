class Calculator{
    getFirstNumInputField(){
        return cy.get('#number1Field')
    }
    getSecondNumInputField(){
        return cy.get('#number2Field')
    }
    getOperationDropdown(){
        return cy.get('#selectOperationDropdown')
    }
    getCalculateButton(){
        return cy.get('#calculateButton')
    }
    getBuildVersion(){
        return cy.get('#selectBuild')
    }
    getIntegersOnly(){
        return cy.get('#integerSelect')
    }
    getOutputField(){
        return cy.get('#numberAnswerField')
    }
}
export default Calculator