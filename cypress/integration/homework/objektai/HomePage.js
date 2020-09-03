class HomePage {

    numberField1 = "#number1Field";
    numberField2 = "#number2Field";
    clearButton = "#clearButton";
    actionDropDown = "#selectOperationDropdown";
    calculateButton = "#calculateButton";
    answerField = "#numberAnswerField";


    // additionTest(var index){

    //     return index
    // }
    checkIfFieldsExist() {
        cy.get(this.numberField1).should("be.enabled")
        cy.get(this.numberField2).should("be.enabled")
    }

    enterFieldsWiths(number1, number2, action) {
        //cy.get(this.clearButton).click()
        cy.get(this.numberField1).clear()
        cy.get(this.numberField1).type(number1)
        cy.get(this.numberField2).clear()
        cy.get(this.numberField2).type(number2)
        cy.get(this.actionDropDown).select(action)
        cy.get(this.calculateButton).click()
    }
    checkAnswer(answer){
        if (cy.get(this.answerField) == answer) {
            alert("Good")
        }
        else {
            alert("Bad")
        }
    }
}

export default HomePage