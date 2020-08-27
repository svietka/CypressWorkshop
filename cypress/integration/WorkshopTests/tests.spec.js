/// <reference types="cypress" />

import Homepage from "../../page_objects/homepage/homepage.js";

var homepage = new Homepage()

beforeEach("Visit link before each test", () => {
    cy.visit("/");
})

it("Loads the duckduckGo page", () => {
    cy.contains("Tired of being tracked online? We can help.")
})


it("Can display results relevent to search term", ()=> {
    homepage.getSearchInput().type("test{enter}")
    cy.contains("Speedtest by Ookla")
})

it("Removes the banner from test results when X is pressed", () => {
    homepage.getSearchInput().type("whatever{enter}")

    cy.get(".js-badge-main-msg > .ddgsi")
    .click()

    cy.get('.badge-link .badge-link--serp .ddg-extension-hide .js-badge-link')
    .should('not.exist')
})


it("Loads cheat sheets", () => {
    homepage.getSearchInput().type("microsoft word cheat sheet{enter}");

    cy.get("#zci-cheat_sheets > .cw")
    .should("exist");
})


it("intitle search options works", () => {
    homepage.getSearchInput().type("intitle:panda{enter}");

    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

// it("intitle search options works", () => {
//     homepage.getSearchInput().type("!wiki{enter}");

//     cy.url().should("eq", "https://en.wikipedia.org/wiki/Main_Page");
// })