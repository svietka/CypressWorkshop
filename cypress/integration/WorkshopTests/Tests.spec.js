/// <reference types="cypress" />

import Homepage from '../../page_objects/homepage/homepage.js'

var homepage = new Homepage

beforeEach("Executes before each test", () => {
    cy.visit("/")
})

it("Loads the duckduckGo website", ()=> {
    cy.contains('Tired of being tracked online? We can help.')
})

it("Finds results on the duckduckgo website", ()=> {
    cy.get('#search_form_input_homepage').type("test")
    cy.get('#search_button_homepage').click()
    cy.contains('Speedtest by Ookla - The Global Broadband Speed Test')
})

it("Finds results on the duckduckgo website", ()=> {
    cy.get('#search_form_input_homepage').type("whatever")
    cy.get('#search_button_homepage').click()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
})

it("Finds results on the duckduckgo website", ()=> {
    cy.get('#search_form_input_homepage').type("microsoft word cheat sheet")
    cy.get('#search_button_homepage').click()
    cy.get('#duckbar_new > .zcm__item > .zcm__link').click()
    cy.contains('Microsoft Word 2010')
})

it("Finds results on the duckduckgo website", ()=> {
    cy.get('#search_form_input_homepage').type("intitle:panda")
    cy.get('#search_button_homepage').click()
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

it.only("Finds results on the duckduckgo website", ()=> {
    homepage.getSearchInputField().type("!wiki")
    homepage.getSearchButton().click()
})

