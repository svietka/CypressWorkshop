class Homepage{
    getnumber1field (){
        return cy.get("#number1Field")
    }
    getnumber2field (){
        return cy.get("#number2Field")
    }
    ClickClaculateButton () {
        return cy.get("#calculateButton").click()
    }

    SelectAdd (){
        return cy.get("#selectOperationDropdown").select("Add")
    }

    SelectSubtract (){
        return cy.get("#selectOperationDropdown").select("Subtract")
    }

    SelectMultiply (){
        return cy.get("#selectOperationDropdown").select("Multiply")
    }

    SelectDivide (){
        return cy.get("#selectOperationDropdown").select("Divide")
    }
}

export default Homepage