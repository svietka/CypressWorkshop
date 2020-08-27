import Homepage from "../../page_objects/Home_page/homepage.js"
/// <reference types="cypress" />

var homepage = new Homepage()
beforeEach("Executes before each test", () => {
    cy.visit ('/')
})

it('Loads the duckduckGo page', () => {
    cy.visit('https://duckduckgo.com')
    cy.contains('Tired of being tracked online? We can help.')
})

it('Can display search result_version1', () => {
    cy.visit('https://duckduckgo.com')
    cy.get('#search_form_input_homepage').type('Test')
    //homepage.('#search_button_homepage').click()
    cy.contains('Speedtest by Ookla')

})

it.only('Can display search result_version2', () => {
    //cy.visit('https://duckduckgo.com')
    homepage.getSearchInputField().type('Test{enter}')
    //cy.get('#search_form_input_homepage').type('Test{enter}')
    cy.contains('Speedtest by Ookla')
})

it('Removes the banner from test results when X is pressed', () => {
    cy.visit('https://duckduckgo.com')
    cy.get('#search_form_input_homepage').type('whatewer{enter}')
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link_thumb_img').should('not.be.visible')
    cy.contains('Clear your cookies often')
})

it('Search returns microsoft word cheat sheet', () => {
    cy.visit('https://duckduckgo.com')
    cy.get('#search_form_input_homepage').type('microsoft word cheat sheet{enter}')
    cy.get('.c-base__title').should('be.visible')
    cy.get('.c-base__title').contains('Microsoft Word 2010')
})

it('Intitle search options works', () => {
    cy.visit('https://duckduckgo.com')
    cy.get('#search_form_input_homepage').type('intitle:panda{enter}')
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
    
})
//test
it('Should redirect to first result', () => {
    cy.visit('https://duckduckgo.com')
    cy.get('#search_form_input_homepage').type('!Wiki{enter}')
});
    

