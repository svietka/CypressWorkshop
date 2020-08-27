/// <reference types="cypress" />

it("Loads the ducduckGo website", ()=>{
    cy.visit("https://duckduckgo.com/")
    cy.contains("Tired of being tracked online? We can help.")
})