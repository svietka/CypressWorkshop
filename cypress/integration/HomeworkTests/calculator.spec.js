/// <reference types="cypress" />

describe('Asych', function () {
    beforeEach(function () {
        cy.visit('https://testsheepnz.github.io/BasicCalculator')

    })

    it('dropdown', function (){
        cy.get('#selectBuild').select('1')
        cy.get('#number1Field').type('3')
        cy.get('#number2Field').type('3')
        cy.get('#selectOperationDropdown').select('Multiply')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '9')

    })
})


describe('Asych', function () {
    beforeEach(function () {
        cy.visit('https://testsheepnz.github.io/BasicCalculator')

    })

    it.only('dropdown', function (){
        cy.get('#selectBuild').select('9')
        cy.get('#number1Field').type('3')
        cy.get('#number2Field').type('3')
        cy.get('#selectOperationDropdown').select('Multiply')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '9')

    })
})

describe('Asych', function () {
    beforeEach(function () {
        cy.visit('https://testsheepnz.github.io/BasicCalculator')

    })

    it('dropdown', function (){
        cy.get('#selectBuild').select('Prototype')
        cy.get('#number1Field').type('3')
        cy.get('#number2Field').type('0')
        cy.get('#selectOperationDropdown').select('Divide')
        cy.get('#calculateButton').click()
        cy.contains('Divide by zero error!').should('be.visible')
        cy.get('#numberAnswerField').should('be.empty').and('be.visible')

    })
})

describe('Asych', function () {
    beforeEach(function () {
        cy.visit('https://testsheepnz.github.io/BasicCalculator')

    })

    it.only('dropdown', function (){
        cy.get('#selectBuild').select('8')
        cy.get('#number1Field').type('3')
        cy.get('#number2Field').type('0')
        cy.get('#selectOperationDropdown').select('Divide')
        cy.get('#calculateButton').click()
        cy.contains('Divide by zero error!').should('be.visible')
        cy.get('#numberAnswerField').should('be.empty').and('be.visible')

    })
})

describe('Asych', function () {
    beforeEach(function () {
        cy.visit('https://testsheepnz.github.io/BasicCalculator')

    })

    it('dropdown', function (){
        cy.get('#selectBuild').select('8')
        cy.get('#number1Field').type('15,5')
        cy.get('#number2Field').type('1')
        cy.get('#selectOperationDropdown').select('Add')
        cy.get('#calculateButton').click()
        cy.contains('Number 2 is not a number').should('be.visible')
        cy.get('#numberAnswerField').should('be.empty').and('be.visible')
        
       

    })
})

describe('Asych', function () {
    beforeEach(function () {
        cy.visit('https://testsheepnz.github.io/BasicCalculator')

    })

    it.only.only('dropdown', function (){
        cy.get('#selectBuild').select('2')
        cy.get('#number1Field').type('15,5')
        cy.get('#number2Field').type('1')
        cy.get('#selectOperationDropdown').select('Add')
        cy.get('#calculateButton').click()
        cy.contains('Number 2 is not a number').should('be.visible')
        cy.get('#numberAnswerField').should('have.value', '0')
        
       

    })
})

describe('Asych', function () {
    beforeEach(function () {
        cy.visit('https://testsheepnz.github.io/BasicCalculator')

    })

    it.only('dropdown', function (){
        cy.get('#selectBuild').select('8')
        cy.get('#number1Field').type('3.2')
        cy.get('#number2Field').type('1')
        cy.get('#selectOperationDropdown').select('Divide')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '3.2')
        
       

    })
})

describe('Asych', function () {
    beforeEach(function () {
        cy.visit('https://testsheepnz.github.io/BasicCalculator')

    })

    it.only('dropdown', function (){
        cy.get('#selectBuild').select('Prototype')
        cy.get('#number1Field').type('33')
        cy.get('#number2Field').type('1')
        cy.get('#selectOperationDropdown').select('Concatenate')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '331')
        cy.get('#clearButton').click()
        cy.get('#selectBuild').select('8')
        cy.get('#selectOperationDropdown').select('Concatenate')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '331')
        
       

    })
})