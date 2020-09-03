class HomePage {


    clearButton = "#clearButton";
    actionDropDown = "#selectOperationDropdown";
    calculateButton = "#calculateButton";
    answerField = "numberAnswerField";
    numberField1 = "#number1Field";
    numberField2 = "#number2Field";

    // additionTest(var index){

    //     return index
    // }
    checkIfFieldsEnabled(field) {
        cy.get(field).should('be.enabled')
    }

    enterFieldsWith(number1, number2, action) {
        //cy.get(this.clearButton).click()
        cy.get(this.numberField1).clear()
        cy.get(this.numberField1).type(number1)
        cy.get(this.numberField2).clear()
        cy.get(this.numberField2).type(number2)
        cy.get(this.actionDropDown).select(action)
        cy.get(this.calculateButton).click()
    }
    checkAnswer(answer){
        cy.get('input[name="numberAnswer"]').invoke('val').should('eq',answer)
    }
}

export default HomePage