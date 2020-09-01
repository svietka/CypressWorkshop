class HomeworkPage{  
    getIntegersOnlyCheckbox(){
        return cy.get('#integerSelect')
    }
    getBuildDropdown(){
        return cy.get('#selectBuild')
    }
    getNumberOneField(){
        return cy.get('#number1Field')
    }
    getNumberTwoField(){
        return cy.get('#number2Field')
    }
    getOperationDropdown(){
        return cy.get('#selectOperationDropdown')
    }
    getCalculateButton(){
        return cy.get('#calculateButton')
    }
    getAnswerField(){
        return cy.get('#numberAnswerField')
    }      
    getErrorField(){
        return cy.get('#errorMsgField')
    }  
}
export default HomeworkPage