class Objects{

    visitPage(){
        cy.visit("https://testsheepnz.github.io/BasicCalculator")
    }
    
    getSelectBuild(number){
        return cy.get("#selectBuild").select(number)
    }

    getInputField1(abc){
        return cy.get('#number1Field').type(abc)
    }

    getInputField2(abc){
        return cy.get('#number2Field').type(abc)
    }
    getCalculateButton(){
        return cy.get('#calculateButton').click()
    }
    getClearButton(){
        return cy.get('#clearButton').click
    }

    visibleErrorMessage(){
        return cy.get('#errorMsgField').should('be.visible')
    }

    selectOperation(operation){
        return cy.get('#selectOperationDropdown').select(operation)
    }

    expectAnswer(answer){
        return cy.get('#numberAnswerField').should('have.value', answer)
    }

    integerChecked(){
        return  cy.get('#integerSelect').check()
    }

    answerShouldBeEmpty(){
        return cy.get('#numberAnswerField').should("be.empty")
    }

    imputField1Enabled(){
        return cy.get('#number1Field').should("be.enabled")
    }

    imputField2Enabled(){
        return cy.get('#number2Field').should("be.enabled")
    }
    
    calculateButtonEnabled(){
        return cy.get('#calculateButton').should("be.enabled")
    }
    
    integerSelectEnabled(){
       return cy.get('#integerSelect').should("be.enabled")
    }
    
    integerNotSelected(){
        return cy.get('#integerSelect').should("not.be.checked")
    }
    
    clearButtonEnabled(){
        return cy.get('#clearButton').should("be.enabled")
    }

    integerSelectEmpty(){
        return cy.get('#integerSelect').should("be.empty")
    }
    
    





}
export default Objects