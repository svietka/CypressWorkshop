

import Homepage from "../../page_objects/homepage/homepage.js"

var homepage = new Homepage()


/// <reference types="cypress" />
it("Loads the duckduckGo page", ()=>{
    cy.visit("https://duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")
})
it("Can display results relevant to search term", ()=>{
    cy.visit("https://duckduckgo.com")
    cy.get("#search_form_input_homepage").type("test")
    cy.get("#search_button_homepage").click()
    cy.contains("Speedtest by Ookla - The Global Broadband Speed Test")
});
it("Navigates to results page and removes the robot banner when X is pressed", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("test")
    cy.get('form').submit()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
});
it("Displays a cheat sheet in the results page", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("microsoft word cheat sheet")
    cy.get("#search_button_homepage").click()
    cy.get(".js-badge-main-msg > .ddgsi").click()
    cy.get('.c-base__title').contains("Microsoft Word 2010")
});
it("Finds results with word Panda and checks that all results contain it", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("intitle:panda")
    cy.get("#search_button_homepage").click()
    cy.get('.result__title').each(($item) => {
         cy.get($item).contains('Panda', { matchCase: false })
    });
})
it.only("should redirect to first result", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("!wiki")
    cy.get("#search_button_homepage").click()
    })
    




   







