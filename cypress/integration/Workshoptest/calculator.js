class Calculator {
    selectBuildnNumber(number) {
        try {
            return cy.get('#selectBuild').select(number);
        } catch(error){
            console.error();
        }
    } 

    selectNumberField1(){
        return cy.get('#number1Field')
    }

    selectNumberField2(){
        return cy.get('#number2Field')
    }

    selectOperationDropdown(){
        return cy.get('#selectOperationDropdown')
    }

    selectCalculateButton(){
        return cy.get('#calculateButton')
    }

    selectInteger(){
        try {
            return cy.get('#integerSelect')
        } catch(error){
            console.error()
        }
        
    }

    selectAnswerField(){
        try {
            return cy.get('#numberAnswerField')
        } catch(error){
            console.error()
        }
        
    }

    selectClearButton(){
        return cy.get('#clearButton')
    }
}
export default Calculator