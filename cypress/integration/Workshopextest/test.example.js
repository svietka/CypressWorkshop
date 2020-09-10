import Homepage from '../../page_objects/homepage/Homepage'
/// <reference types="cypress" />

var homepage = new Homepage()

beforeEach('Executes before each test',()=>{
    cy.visit("http://www.duckduckgo.com")
})

it("Loads the duckduckGO page", () =>{
    
    cy.contains("Tired of being tracked online? We can help.")
})
/*
it("enters \'test\'", ()=>{
    cy.get("#search_form_input_homepage").type("test{enter}");

})
*/


// it.only("Banner is closed after whatever search", ()=>{
//     cy.get("#search_form_input_homepage").type("whatever");
//     cy.get("#search_button_homepage").click();
//     cy.get('.js-badge-main-msg > .ddgsi').click();
//     cy.get('.badge-link__thumb__img').should("not.be.visible");
// })

it.only("Microsoft cheat sheet appears in search", () => {
    cy.get('#search_form_homepage').type("microsoft word cheat sheet")
    cy.get('#search_button_homepage').click()
    cy.contains('Microsoft Word 2010')
});

it("Panda search in title", () => {
    
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

// it.("Wikipedia", () => {
   
//     cy.get("#search_form_input_homepage").type("!Wiki");
//     cy.get("#search_button_homepage").click();
// })

