class calculator{
 
    getSearchButton(){
        return cy.get("#search_button_homepage")
    }
    getSearchInputField(){
        return cy.get("#search_form_input_homepage")
    }
    getBuild(){
        return cy.get('#selectBuild')
    }
    getNr1(){
        return cy.get('#number1Field')
    }
    getNr2(){
        return cy.get('#number2Field')
    }
    getOperation(){
        return cy.get('#selectOperationDropdown')
    }
    getCalculate(){
        return cy.get('#calculateButton')
    }
    getClear(){
        return cy.get('#clearButton')
    }
    getAnswer(){
        return cy.get('#numberAnswerField')
    }
    getIntegers(){
        return cy.get('#integerSelect')
    }
    getErrorMsg(){
        return cy.get('#errorMsgField')
    }
}
export default calculator