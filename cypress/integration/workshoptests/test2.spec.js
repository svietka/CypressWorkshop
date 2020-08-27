/// <reference types="cypress" />

it("Removes the banner when X is pressed", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("test")
    cy.get("#search_button_homepage").click()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
})

it("intitle search options works", () => {
    cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

it.only("should redirect to first result", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("!wiki")
    cy.get("#search_button_homepage").click()
})