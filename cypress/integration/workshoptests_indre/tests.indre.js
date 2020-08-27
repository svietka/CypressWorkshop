/// <reference types="cypress" />

it("Loads the duckduckGo page", ()=>{
    cy.visit("http://www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")
})

it("can display results relevant to search term", ()=>{
    cy.visit("http://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("Test{enter}")
})