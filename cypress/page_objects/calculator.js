class Calculator{

    getBuildDropdown(){
        return cy.get('#selectBuild')
    }

    getOperationDropdown(){
        return cy.get('#selectOperationDropdown')
    }

    clickCalculateButton(){
        return cy.get('#calculateButton').click()
    }

    getAnswerField(){
        return cy.get('#numberAnswerField')
    }

    getFirstNumberField(){
        return cy.get('#number1Field')
    }

    getSecondNumberField(){
        return cy.get('#number2Field')
    }

    getIntegersCheckbox(){
        return cy.get('#integerSelect')
    }

    clickClearButton(){
        return cy.get('#clearButton').click()
    }
    
    getErrorMessage(){
        return cy.get('#errorMsgField')
    }
    
}
export default Calculator