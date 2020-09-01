class Homepage{
        getfirstField(){
        return cy.get("#number1Field")
    }
        getsecondField(){
        return cy.get("#number2Field")
    }
        getintegerCheckBox(){
        return cy.get("#integerSelect") 
    }
        getcalculateButton(){
        return cy.get("#calculateButton")
    }
        getanswerField(){
        return cy.get("#numberAnswerField")
    }
        getoperationDropdown(){
        return cy.get("#selectOperationDropdown")
    }
        getintegerselect() {
        return cy.get("#integerSelect")
    }
        getbuild() {
        return cy.get("#selectBuild")
        }
}
export default Homepage

