class Calculator{

    clickClearButton(){
        return cy.get('#clearButton').click()
    }
    
    getErrorMessage(){
        return cy.get('#errorMsgField')
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

    getBuildDropdown(){
        return cy.get('#selectBuild')
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

}
export default Calculator