import Homepage from '../../page_objects/homepage/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage

beforeEach("Executes before each test", ()=> {
    cy.visit("/")
})

it("Loads the duckduckGo page", ()=>{
    cy.contains("Tired of being tracked online? We can help.")
})

it("Search test keyword with button", ()=>{
    homepage.getSearchInputField().type("test")
    homepage.getSearchButton().click()
    cy.contains("Speedtest by Ookla - The Global Broadband Speed Test")
})

it("Search test keyword with Enter key", ()=>{
    homepage.getSearchInputField().type("test{enter}")
    cy.contains("Speedtest by Ookla - The Global Broadband Speed Test")
})

it("Close the banner", ()=>{
    homepage.getSearchInputField().type("google")
    homepage.getSearchButton().click()
    cy.get(".js-badge-main-msg > .ddgsi").click()
    cy.get(".badge-link__thumb__img").should("not.be.visible")
})

it("Microsoft Word Cheat Sheet", ()=>{
    homepage.getSearchInputField().type("microsoft word cheat sheet")
    homepage.getSearchButton().click()
    cy.contains("Microsoft Word 2010")
})

it("Contains word panda", ()=>{
    homepage.getSearchInputField().type("intitle:panda")
    homepage.getSearchButton().click()
    cy.get('.result__title').each(($item) => { cy.get($item).contains('Panda', { matchCase: false });
    });
})

it("should redirect to first result", ()=> {
    cy.get('#search_form_homepage').type("!wiki")
    homepage.getSearchButton().click()
    })