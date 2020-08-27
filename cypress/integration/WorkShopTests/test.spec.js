import { Homepage } from '../../page_objects/landing_page/homepage';
// import Kitoks from '../../page_objects/landing_page/homepage';

/// <reference types="cypress" />

// let homepage = new Homepage()

beforeEach("Executes", () => {
    cy.visit("http://www.duckduckgo.com")
});

// it("Loads the duckduckgo page", () => {
//     cy.contains("Tired of being tracked online? We can help.")
// });

// it("Can display results relevant to search term", () => {
//     cy.get('#search_form_homepage').type("Test")
//     cy.get('#search_button_homepage').click()
//     cy.contains('Speedtest by Ookla')
// });

// it.only("Can display results relevant to search term2", () => {
//     cy.get('#search_form_homepage').type("Test{enter}")
//     cy.contains('Speedtest by Ookla')
// });
//NEVEIKIA

// it("Can close banner", () => {
//     cy.get('#search_form_homepage').type("whatever")
//     cy.get('#search_button_homepage').click()
//     cy.get('.js-badge-main-msg > .ddgsi').click()
//     cy.get('.badge-link__thumb__img').should("not.be.visible")
// });

// it("Microsoft cheat sheet appears in search", () => {
//     cy.get('#search_form_homepage').type("microsoft word cheat sheet")
//     cy.get('#search_button_homepage').click()
//     cy.contains('Microsoft Word 2010')
// });

// it("Microsoft cheat sheet appears in search", () => {
//         cy.get('#search_form_homepage').type("intitle:panda")
//         cy.get('#search_button_homepage').click()
//         cy.get('.result__title').each(($item) => { 
//             cy.get($item).contains('Panda', { matchCase: false });
//     });
// })

//     it.only("intitle search options works", () => {
//         cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
//         cy.get(".result__title").each(($el) => {
//             cy.wrap($el).contains("panda", {matchCase: false});
//         });
//     })

it("Search wiki in duckduckgo", () => {
    cy.get('#search_form_homepage').type("!wiki");
    console.log('nx blet, ', Homepage.getSearchButton());
    Homepage.getSearchButton().click()
});

