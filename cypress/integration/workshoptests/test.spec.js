/// <reference types="cypress" />

it("Loads the duckduck go page",()=>{
    cy.visit("http://duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")



})