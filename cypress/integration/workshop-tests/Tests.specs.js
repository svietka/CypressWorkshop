/// <reference types="cypress" />

// it ("Loads the duckduckGo page", () => {
//     cy.visit("https://www.duckduckgo.com")
//     cy.contains("Tired of being tracked online? We can help.")
// })

// it ("Can display results relevant to search term", () => {
//     cy.visit("https://www.duckduckgo.com")   
// })

it ("Loads the duckduckGo page", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("test")
    
    cy.contains("Speedtest by Ookla")
})