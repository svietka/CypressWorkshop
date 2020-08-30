/// <reference types="cypress" />

import Homepage from "../../page_objects/homepage/homepage.js";

var homepage = new Homepage()

beforeEach("Visit link before each test", () => {
    cy.visit("/");
})


it("Loads the duckduckGo page", () => {
    cy.contains("Tired of being tracked online? We can help.")
})


it("Can display results relevent to search term", () => {
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
        cy.wrap($el).contains("panda", { matchCase: false });
    });
})


it("should redirect to first result", () => {
    homepage.getSearchInput().type("!wiki")
    homepage.getSearchButton().click();
    cy.title().should('eq', 'Wikipedia, the free encyclopedia')
})


it("should search on wikipedia", () => {
    homepage.getSearchInput().type("!w lithuania")
    homepage.getSearchButton().click();
    cy.title().should('eq', 'Lithuania - Wikipedia')
    cy.get("#firstHeading").contains("Lithuania")
})


it("should verify if page is down", () => {
    homepage.getSearchInput().type("is devbridge.com down")
    homepage.getSearchButton().click();
    cy.get(".c-base__title").contains("devbridge.com seems up")
})


describe('should generate secure passwords', () => {
    [8, 32, 64].forEach((passwordLenght) => {
        it('generates password with length: ' + passwordLenght, () => {
            homepage.getSearchInput().type("password " + passwordLenght)
            homepage.getSearchButton().click();
            cy.get('.c-base__title').then(($title) => {
                cy.get($title).invoke('text').its('length').should('be.eq', passwordLenght)
            })
        })
    })
})


describe('should ignore generating secure passwords', () => {
    [1, 7, 65, 512].forEach((event) => {
        it('triggers event: ' + event, () => {
            homepage.getSearchInput().type("password " + event)
            homepage.getSearchButton().click();
            cy.get('.c-base__title').should('not.exist');
        })
    })
})


it("should launch a stop watch", () => {
    homepage.getSearchInput().type("stopwatch")
    homepage.getSearchButton().click();
    cy.get('#total_time').contains("00:00.00");
    cy.get('.start').click();
    cy.get('.stop').click();
})


const sizes = ['iphone-6', 'ipad-2', [1024, 768]]
sizes.forEach((size) => {
    it(`Should display logo on ${size} screen`, () => {
        if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1])
        } else {
            cy.viewport(size)
        }
        homepage.getSearchInput().type("stopwatch")
        homepage.getSearchButton().click({ force: true });
    })
})
