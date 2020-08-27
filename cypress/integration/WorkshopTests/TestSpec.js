import Homepage from '../../page_objects/homepage/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage

beforeEach("Executes before each test", ()=>{
    cy.visit("/")
})

it("Loads the duckduckGo page", ()=>{

    cy.contains("Tired of being tracked online? We can help.")
})

it("Can display results relevant to search term", ()=>{
    
    cy.get('#search_form_homepage').type('Test')
    homepage.getSearchButton().click()
    cy.contains("Speedtest by Ookla")
})

// Norint, kad vykdytu tik viena testa
//it.only("Can display results relevant to search term", ()=>{
//   cy.get('#search_form_homepage').type('Test')
//    homepage.getSearchButton().click()
//    cy.contains("Speedtest by Ookla")
//})

it("Navigates to results page and removes the banner from test results when X is pressed", ()=>{
    cy.get('body').type('test')
    cy.get('form').submit()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should('not.be.visible')
})

it("Microsoft cheat sheet appears in search", () => {
    cy.get('#search_form_homepage').type("microsoft word cheat sheet")
    homepage.getSearchButton().click()
    cy.contains('Microsoft Word 2010')
});

it("intitle search options works", () => {;
    homepage.getSearchInputField().type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

it("should redirect to first result", ()=> {
    cy.get('#search_form_homepage').type("!wiki")
    homepage.getSearchButton().click()
    })

 // it.only 5 test case mentoriui. page object nice to have. naujas branche homework