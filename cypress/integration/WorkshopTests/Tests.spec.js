import Homepage from '../../page_objects/homepage/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage()

beforeEach("Executes before each test",()=>{
    cy.visit("");
})

it("Loads the duckduckGo page", ()=>{
    cy.contains('Tired of being tracked online? We can help.')
})


it("Can display results relevent to search term", ()=>{

    homepage.getSearchInputField().type('test')
    homepage.getSearchButton().click();
    cy.contains('Speedtest by Ookla');
})

it("Can display results relevent to search term", ()=> {
    homepage.getSearchInputField().type('Test')
})

it("Removes the banner from test results when X is pressed", ()=>{  
   homepage.getSearchInputField().type("test")
   homepage.getSearchButton().click()
   cy.get('.js-badge-main-msg > .ddgsi').click();
    cy.get('.badge-link__thumb__img').should("not.be.visible")
    
})

it("Microsoft word shortcuts appear when term 'microsoft word cheat sheet' is searched", ()=>{  
    homepage.getSearchInputField().type('microsoft word cheat sheet')
    homepage.getSearchButton().click();
    cy.contains('Microsoft Word 2010')
})

it("Microsoft word shortcuts appear when term 'microsoft word cheat sheet' is searched", ()=>{
    homepage.getSearchInputField().type('microsoft word cheat sheet')
    homepage.getSearchButton().click();
    cy.get('.c-base__title').contains('Microsoft Word 2010');
   
})

it.only("intitle search options works", () => {
    homepage.getSearchInputField().type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})
