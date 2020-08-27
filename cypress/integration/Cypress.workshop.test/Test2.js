/// <reference types="cypress" />

it("search for some stuff and close baner",()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("belekas seni").submit('#search_form_homepage')
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should('not.be.visible')
})

