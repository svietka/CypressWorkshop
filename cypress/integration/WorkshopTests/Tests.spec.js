import Homepage from '../../page_objects/homepage/homepage.js'

/// <reference types="cypress" />

var homepage = new Homepage;
beforeEach("Executes before each test", ()=>{
    cy.visit("/")
})
it("Loads the duckduckGO page", () =>{
    //cy.visit("https://www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")
})
it("Can display results relevant to search term", () =>{
   // cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("test");
    cy.get("#search_button_homepage").click();
    cy.contains("Speedtest by Ookla");
})
it ("Removes the banner from test results when X is pressed", () =>{
  //  cy.visit("https://www.duckduckgo.com")
   homepage.getSearchInputField().type("Test{enter}");
    cy.get('.js-badge-main-msg > .ddgsi').click();
   // cy.contains("Clear your cookies often?");
   cy.get('.badge-link__thumb__img').should("not.be.visible")
})
//cy.visit("https://www.duckduckgo.com")
//cy.get('body').type("test");
//cy.get('form').submit();
it("Microsoft Word 2010", () =>{
   // cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("Microsoft word cheat sheet{enter}");
    cy.contains("Microsoft Word 2010")
})
// cy.get('.c-base__title').contains("Microsoft Word 2010")
it("intitle search options works", () => {
  //  cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
        //cy.get('.result__title').each(($item) => { cy.get($item).contains('Panda', { matchCase: false })
    });
})

it("should redirect to first result", () => {
   // cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
        //cy.get('.result__title').each(($item) => { cy.get($item).contains('Panda', { matchCase: false })
    });
})
it("should redirect to first result", ()=> {
   // cy.visit("https://www.duckduckgo.com")
    homepage.getSearchButton().type("!wiki")
    cy.get("#search_button_homepage").click()
    })