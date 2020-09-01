/// <reference types="cypress" />
import Homepage from '../../page_objects/homepage/homepage.js'

var homepage = new Homepage

beforeEach('Executes before each test', ()=>{
    cy.visit('/')
}) 

it("closes banner after we search for something", ()=>{
    homepage.getSearchInputField().type("Test")
    homepage.getSearchButton().click()
    cy.contains('Speedtest by Ookla')
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
    
    
})

it("microsoft word 2010 exists in search", ()=>{
    homepage.getSearchInputField().type("Microsoft word cheat sheet")
    homepage.getSearchButton().click()
    cy.contains('Microsoft Word 2010')   
})

it("has panda in title", ()=>{
    homepage.getSearchInputField().type("intitle:panda")
    homepage.getSearchButton().click()
    cy.get('.result__title').each(($el)=> {
        cy.wrap($el).contains('Panda', {matchCase: false})
    })
})

it("should redirect to first resutl", ()=>{
    homepage.getSearchInputField().type("!wiki")
    homepage.getSearchButton().click()
})