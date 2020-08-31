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
}

export default Homepage