/// <reference types="cypress" />

it("Click on prototipe button", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get("#selectBuild").select("2")
    cy.get("#number1Field").type("1")
    cy.get("#number2Field").type("2")
    cy.get("#selectOperationDropdown").select("0")
    cy.get("#calculateButton").click()
    cy.get("#number1Field").clear("1")
    cy.get("#number2Field").clear("2")
    cy.get("#selectBuild").select("2")
    cy.get("#number1Field").type("10")
    cy.get("#number2Field").type("-9")
    cy.get("#selectOperationDropdown").select("4")
    cy.get("#calculateButton").click()  
})


it("Click on prototipe button", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get("#selectBuild").select("7")
    cy.get("#number1Field").type("1")
    cy.get("#number2Field").type("2")
    cy.get("#selectOperationDropdown").select("0")
    cy.get("#calculateButton").click()
    cy.get("#number1Field").clear("1")
    cy.get("#number2Field").clear("2")
    cy.get("#number1Field").type("100")
    cy.get("#number2Field").type("2")
    cy.get("#selectOperationDropdown").select("1")
    cy.get("#calculateButton").click()
    cy.get("#number1Field").clear("1")
    cy.get("#number2Field").clear("2")
    cy.get("#number1Field").type("12345679")
    cy.get("#number2Field").type("9")
    cy.get("#selectOperationDropdown").select("2")
    cy.get("#calculateButton").click()
    cy.get("#number1Field").clear("1")
    cy.get("#number2Field").clear("2")
    cy.get("#number1Field").type("9")
    cy.get("#number2Field").type("-9")
    cy.get("#selectOperationDropdown").select("3")
    cy.get("#calculateButton").click()
})


it("Click on prototipe button", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get("#selectBuild").select("7")
    cy.get("#number1Field").type("1")
    cy.get("#number2Field").type("9")
    cy.get("#selectOperationDropdown").select("4")
    cy.get("#calculateButton").click()
})

it("Click on prototipe button", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get("#selectBuild").select("8")
    cy.get("#number1Field").type("4")
    cy.get("#number2Field").type("2")
    cy.get("#selectOperationDropdown").select("1")
    cy.get("#calculateButton").click()
    cy.get("#number1Field").clear("1")
    cy.get("#number2Field").clear("2")
    cy.get("#number1Field").type("1")
    cy.get("#number2Field").type("9")
    cy.get("#selectOperationDropdown").select("4")
    cy.get("#calculateButton").click()
})






