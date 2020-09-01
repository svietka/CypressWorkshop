class Calculator {
    get1InputField(){
        return cy.get('#number1Field')
    }

    get2InputField(){
        return cy.get('#number2Field')
    }

    getSelectOperationDropdown(){
        return cy.get('#selectOperationDropdown');
    }

    getCalculateButton(){
        return cy.get('#calculateButton');
    }

    getAnswerField(){
        return cy.get('#numberAnswerField');
    }

    getBuild(){
        return cy.get('#selectBuild');
    }

    getErrorMessage(){
        return cy.get('#errorMsgField');
    }

    getClearButton(){
        return cy.get('#clearButton');
    }

    getIntegerSelectButton(){
        return cy.get('#integerSelect');
    }
}

export default Calculator;