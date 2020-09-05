
import Objects from "../../page_objects/home_page/calcobjects.spec.js"
/// <reference types="cypress" />

var objects = new Objects()


let builds = ["Prototype","1","2","3","4","5","6","7","8","9"]
let operations = ["Add","Subtract", "Multiply","Divide","Concatenate"]


it.only("Is not a number error message",()=>{
    for (let n = 1; n < 2; n++) {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    objects.getSelectBuild().select(builds[n])
    objects.getInputField1().type("abc")
    objects.getCalculateButton().click()
    cy.get('#errorMsgField').should('be.visible')
    cy.reload()
    objects.getInputField2.type("abc")
    objects.getCalculateButton().click()
    cy.get('#errorMsgField').should('be.visible')
    }
})

it.only("All fields and buttons on build is working",()=>{
    for (let k = 4; k < 5; k++) {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    objects.getSelectBuild().select(builds[k])
    objects.getInputField1().should("be.enabled")
    objects.getInputField2().should("be.enabled")
    objects.getCalculateButton().should("be.enabled")
    cy.get('#integerSelect').should("be.enabled")
    cy.get('#integerSelect').should("not.be.checked")
    cy.get('#clearButton').should("be.enabled")
    }
})

it.only("Add operation with minus on builds",()=>{
    for (let m = 1; m < 2; m++) {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    objects.getSelectBuild().select(builds[m])
    objects.getInputField1().type("-3.5")
    objects.getInputField2().type("-2")
    cy.get('#selectOperationDropdown').select(operations[0])
    objects.getCalculateButton().click()
    cy.get('#numberAnswerField').should('have.value', '-5.5')
    cy.get('#integerSelect').check()
    cy.get('#numberAnswerField').should('have.value', '-5')
    cy.get('#clearButton').click()
    cy.get('#numberAnswerField').should("be.empty")
    cy.get('#integerSelect').should("be.empty")
}
})




for (let i = 0; i < 1; i++) {
    for (let j = 3; j < operations.length; j++) {
       
it.only("Check calculation operations of build " +builds[i]+ " "+ operations[j],()=>{


    cy.visit("https://testsheepnz.github.io/BasicCalculator")

    objects.getSelectBuild().select(builds[i])
 
    objects.getInputField1().should("be.enabled")
    objects.getInputField2().should("be.enabled")
    objects.getCalculateButton().should("be.enabled")
    cy.get('#integerSelect').should("be.enabled")
    cy.get('#integerSelect').should("not.be.checked")
    cy.get('#clearButton').should("be.enabled")
    
    objects.getInputField1().type("3.5")
    objects.getInputField2().type("2")
    cy.get('#selectOperationDropdown').select(operations[j])

    

    objects.getCalculateButton().click().then(() => {
        
       if (j==0){
            cy.get('#numberAnswerField').should('have.value', '5.5')
            cy.get('#integerSelect').check()
            cy.get('#numberAnswerField').should('have.value', '5')


        }else if (j==1) {
            cy.get('#numberAnswerField').should('have.value', '1.5')
            cy.get('#integerSelect').check()
            cy.get('#numberAnswerField').should('have.value', '1')
           

        }else if (j==2) {
            cy.get('#numberAnswerField').should('have.value', '7')
            cy.get('#integerSelect').check()
            cy.get('#numberAnswerField').should('have.value', '7')
            

        }else if (j==3) {
            cy.get('#numberAnswerField').should('have.value', '1.75')
            cy.get('#integerSelect').check()
            cy.get('#numberAnswerField').should('have.value', '1')
         

        }else {
            cy.get('#numberAnswerField').should('have.value', '3.52')
            
        }

    })
        
    cy.get('#clearButton').click()
    cy.get('#numberAnswerField').should("be.empty")
    cy.get('#integerSelect').should("be.empty")

})


}
}


