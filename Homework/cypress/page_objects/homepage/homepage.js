class Homepage{
        getFirstField(){
        return cy.get("#number1Field")
    }
        getSecondField(){
        return cy.get("#number2Field")
    }
        getIntegerCheckBox(){
        return cy.get("#integerSelect") 
    }
        getCalculateButton(){
        return cy.get("#calculateButton")
    }
        getAnswerField(){
        return cy.get("#numberAnswerField")
    }
        getOperationDropdown(){
        return cy.get("#selectOperationDropdown")
    }
        getIntegerselect() {
        return cy.get("#integerSelect")
    }
        getBuild() {
        return cy.get("#selectBuild")
    }
}
export default Homepage

