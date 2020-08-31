/// <reference types="cypress" />

beforeEach("Execute before each test",()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.get("#selectBuild")
    .select("7")
})

it("Should add two positive numbers", ()=>{
    cy.get("#number1Field").type("3")
    cy.get("#number2Field").type("2")
    cy.get("#selectOperationDropdown")
        .select("Add")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","5")
})

it.only("Should add two negative numbers", ()=>{
    cy.get("#number1Field").type("-10")
    cy.get("#number2Field").type("-2")
    cy.get("#selectOperationDropdown")
        .select("Add")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","-12")
})

it("Should add one positive one negative numbers", ()=>{
    cy.get("#number1Field").type("10")
    cy.get("#number2Field").type("-2")
    cy.get("#selectOperationDropdown")
        .select("Add")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","8")
})

it("Should bring up error message when something else except numbers is inputted for add option", ()=>{
    cy.get("#number1Field").type("a")
    cy.get("#number2Field").type(".")
    cy.get("#selectOperationDropdown")
        .select("Add")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.contains("is not a number")
})

it.only("Should subtract two positive numbers", ()=>{
    cy.get("#number1Field").type("3")
    cy.get("#number2Field").type("2")
    cy.get("#selectOperationDropdown")
        .select("Subtract")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","1")
})

it("Should subtract two negative numbers", ()=>{
    cy.get("#number1Field").type("-10")
    cy.get("#number2Field").type("-2")
    cy.get("#selectOperationDropdown")
        .select("Subtract")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","-8")
})

it("Should subtract one positive one negative numbers", ()=>{
    cy.get("#number1Field").type("10")
    cy.get("#number2Field").type("-2")
    cy.get("#selectOperationDropdown")
        .select("Subtract")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","12")
})

it("Should bring up error message when something else except numbers is inputted for subtract option", ()=>{
    cy.get("#number1Field").type("2")
    cy.get("#number2Field").type(".")
    cy.get("#selectOperationDropdown")
        .select("Subtract")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.get("#errorMsgField").should("be.visible")
})

it("Should multiply two positive numbers", ()=>{
    cy.get("#number1Field").type("3")
    cy.get("#number2Field").type("2")
    cy.get("#selectOperationDropdown")
        .select("Multiply")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","6")
})

it("Should multiply two negative numbers", ()=>{
    cy.get("#number1Field").type("-10")
    cy.get("#number2Field").type("-2")
    cy.get("#selectOperationDropdown")
        .select("Multiply")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","20")
})

it.only("Should Multiply one positive one negative numbers", ()=>{
    cy.get("#number1Field").type("8")
    cy.get("#number2Field").type("-2")
    cy.get("#selectOperationDropdown")
        .select("Multiply")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","-16")
})

it("Should bring up error message when something else except numbers is inputted for multiply option", ()=>{
    cy.get("#number1Field").type("test")
    cy.get("#number2Field").type("test")
    cy.get("#selectOperationDropdown")
        .select("Multiply")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.get("#errorMsgField").should("be.visible")
})

it("Should divide two positive numbers", ()=>{
    cy.get("#number1Field").type("3")
    cy.get("#number2Field").type("2")
    cy.get("#selectOperationDropdown")
        .select("Divide")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","1.5")
})

it.only("Should divide two negative numbers", ()=>{
    cy.get("#number1Field").type("-10")
    cy.get("#number2Field").type("-2")
    cy.get("#selectOperationDropdown")
        .select("Divide")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","5")
})

it("Should divide one positive one negative numbers", ()=>{
    cy.get("#number1Field").type("8")
    cy.get("#number2Field").type("-2")
    cy.get("#selectOperationDropdown")
        .select("Divide")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","-4")
})

it("Should bring up error message when something else except numbers is inputted for divide option", ()=>{
    cy.get("#number1Field").type("test")
    cy.get("#number2Field").type("0")
    cy.get("#selectOperationDropdown")
        .select("Divide")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.get("#errorMsgField").should("be.visible")
})

it("Should concatenate two positive numbers", ()=>{
    cy.get("#number1Field").type(3)
    cy.get("#number2Field").type(2)
    cy.get("#selectOperationDropdown")
        .select("Concatenate")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.get("#numberAnswerField").should("have.value", "32")
})

it("Should concatenate two negative numbers", ()=>{
    cy.get("#number1Field").type("-10")
    cy.get("#number2Field").type("-2")
    cy.get("#selectOperationDropdown")
        .select("Concatenate")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","-10-2")
})

it("Should concatenate one positive one negative numbers", ()=>{
    cy.get("#number1Field").type("8")
    cy.get("#number2Field").type("-2")
    cy.get("#selectOperationDropdown")
        .select("Concatenate")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.should("have.value","8-2")
})

it.only("Should Concatenate all values", ()=>{
    cy.get("#number1Field").type("test")
    cy.get("#number2Field").type("0")
    cy.get("#selectOperationDropdown")
        .select("Concatenate")
    cy.get("#calculateButton").click()
    cy.get("#numberAnswerField")
    cy.get("#numberAnswerField")
    cy.should("have.value","test0")
})

