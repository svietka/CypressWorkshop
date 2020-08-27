import Homepage from "../../page_objects/homepage/homepage"
/// <reference types="cypress" />

/*it("Loads the duckduckGo page", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")
})
*/
var homepage = new Homepage();
it.only("can display results relevant to search term", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_input_homepage').type("Test")
    homepage.getSearchButton().click()
})
/*
it("can close the popup", ()=> {
cy.visit("https://www.duckduckgo.com")
cy.get('#search_form_input_homepage').type("Test")
cy.get("#search_button_homepage").click()
cy.get('.js-badge-main-msg > .ddgsi').click()
})
*/
it.only("should redirect to first result", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("!wiki")
    cy.get("#search_button_homepage").click()
    })