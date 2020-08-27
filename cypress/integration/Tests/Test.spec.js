/// <reference types="cypress" />
import Homepage from '../../page_object/homepage/homepage.js'
var homepage = new Homepage()


beforeEach('Executes before each test', () =>
{
    cy.visit('https://duckduckgo.com')
})

it('Can display relavant results for the search', () => {
    cy.get('#search_form_input_homepage').type('Test{enter}')
    cy.contains('Speedtest by Ookla')
})

it('Can display relavant results for the search', () => {
    
    //cy.get('#search_form_input_homepage').type('Test')
    homepage.getSearchField().type('Test')
    //cy.get('#search_button_homepage').click()
    homepage.getSearchButton().click()
    cy.contains('Speedtest by Ookla')
})

it('Can search and close the banner', () => {
    cy.get('#search_form_input_homepage').type('Test')
    cy.get('#search_button_homepage').click()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should('not.be.visible')
})


it('Microsoft word cheat sheet', () => {
    cy.get('#search_form_input_homepage').type('Microsoft word cheat sheet')
    cy.get('#search_button_homepage').click()
    cy.contains('Microsoft Word 2010')
})


//PAZIURET KODEL NEVEIKIA
/*it.only('Panda', () => {
    cy.get('#search_form_input_homepage').type('Panda')
    cy.get('#search_button_homepage').click()
    cy.get('.result__title').each(($el)=>{
        cy.wrap($el).contains("panda", {matchCase: false});  
    })
})*/

it("intitle search options works", () => {
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})


