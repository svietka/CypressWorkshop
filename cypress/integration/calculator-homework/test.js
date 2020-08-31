/// <reference types="cypress" />
/// https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Test-Structure

context('Calculator', () => {
    beforeEach(() => {
      cy.visit('https://testsheepnz.github.io/BasicCalculator')
    })

    const builds = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    builds.forEach((i) => {

        it.only("Test add for Build-" + i, function () {

            cy.get('#selectBuild').select(i.toString())

            cy.get('#number1Field').type("3")
            cy.get('#number2Field').type("7")
            cy.get('#selectOperationDropdown').select("Add")
            cy.get('#calculateButton').click()

            cy.get('#numberAnswerField').should('have.value', '10')
            cy.get('#clearButton').click()
        })

        it.only("Test subtract for Build-" + i, function () {

            cy.get('#selectBuild').select(i.toString())

            cy.get('#number1Field').type("20")
            cy.get('#number2Field').type("21")
            cy.get('#selectOperationDropdown').select("Subtract")
            cy.get('#calculateButton').click()

            cy.get('#numberAnswerField').should('have.value', '-1')
            cy.get('#clearButton').click()
        })

        it.only("Test multiply for Build-" + i, function () {

            cy.get('#selectBuild').select(i.toString())

            cy.get('#number1Field').type("10")
            cy.get('#number2Field').type("10")
            cy.get('#selectOperationDropdown').select("Multiply")
            cy.get('#calculateButton').click()

            cy.get('#numberAnswerField').should('have.value', '100')
            cy.get('#clearButton').click()
        })

        it.only("Test divide for Build-" + i, function () {

            cy.get('#selectBuild').select(i.toString())

            cy.get('#number1Field').type("-3")
            cy.get('#number2Field').type("-3")
            cy.get('#selectOperationDropdown').select("Divide")
            cy.get('#calculateButton').click()

            cy.get('#numberAnswerField').should('have.value', '1')
            cy.get('#clearButton').click()
        })

        it.only("Test concatenate for Build-" + i, function () {

            cy.get('#selectBuild').select(i.toString())

            cy.get('#number1Field').type("3")
            cy.get('#number2Field').type("2")
            cy.get('#selectOperationDropdown').select("Concatenate")
            cy.get('#calculateButton').click()

            cy.get('#numberAnswerField').should('have.value', '32')
            cy.get('#clearButton').click()
        })
    })
})
