/// <reference types="cypress" />

it("Searchs for microsoft word cheat sheet",()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("microsoft word cheat sheet").submit('#search_form_homepage')
    cy.contains('Microsoft Word 2010')
})



it("Panda",()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("intitle:panda").submit('#search_form_homepage')
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})


it.only("wiki",()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("!wiki").submit('#search_form_homepage')

})