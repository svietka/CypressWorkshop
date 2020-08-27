// palengvins cypress komandomu rasyma, duos suggestions
/// <reference types="cypress" />

import Homepage from "../../pageObjects/homepage/Homepage.js"

var homepage = new Homepage()

//atlikti pries kiekviena testa, nereikia pasikeitus url visur ji keisti
beforeEach("Executes before each test", ()=>{
    // cy.visit - naviguoti i psl
    cy.visit("baseURL")
})

// testai prasideda su it zodeliu (moka specifika)
it("Loads the duckduckGo website", ()=>{
    // visos cypress komandos prasideda cy
    //ar psl turi ta teksta
    cy.contains("Tired of being tracked online? We can help.")
})

it("Can display results relevant to search term 1", ()=>{
  
    //pasiimamas search ir irasomas test
    homepage.getSearchInputField().type("test")
    // paspaudziamas mygtukas
    homepage.getSearchButton().click()
    cy.contains("Speedtest by Ookla")
})
// ARBA
it("Can display results relevant to search term 2", ()=>{
   //cy.visit("https://www.duckduckgo.com")
    // pasiimamas search bar, irasomas test ir paspaudziama enter
    homepage.getSearchInputField().type("Test{enter}")
    cy.contains("Speedtest by Ookla")
})
// ARBA
it("Can display results relevant to search term 3", ()=>{
   // cy.visit("https://www.duckduckgo.com")   
    homepage.getSearchInputField().type("Test{downarrow}{enter}")
    cy.contains("Speedtest by Ookla")
})
// ARBA
it("Can display results relevant to search term 3", ()=>{
   // cy.visit("https://www.duckduckgo.com")   
    cy.get("form").submit()
    cy.contains("Speedtest by Ookla")
})

it("Removes the banner from test results when X is pressed", ()=>{
   // cy.visit("https://www.duckduckgo.com") 
    homepage.getSearchInputField().type("whatever{enter}")
    cy.get('.js-badge-main-msg > .ddgsi').click()
    //cy.get('.badge-link__thumb__img').should("not.be.visible")
    cy.get('.badge-link__thumb__img').should("not.contain")
})

it("Search for microsoft word cheat sheet",()=>{
    //cy.visit("https://www.duckduckgo.com")
    homepage.getSearchInputField().type("microsoft word cheat sheet{enter}")
    //cy.get('.c-base__title').contains("Microsoft Word 2010")
   // cy.contains("Microsoft Word 2010")
   cy.contains('Microsoft Word 2010').should('be.visible')
})

it("All search results have to have in their title a word panda",()=>{
   // cy.visit("https://www.duckduckgo.com")
    homepage.getSearchInputField().type("intitle:panda{enter}")
    cy.get(".result__title").each(($el) => {
    cy.wrap($el).contains("panda", {matchCase: false}); 
    });
    //cy.get('.result__title').each(($item) => { cy.get($item).contains('Panda', { matchCase: false })
})

it("All search results have to have in their title a word panda",()=>{
    //cy.visit("https://www.duckduckgo.com")
    homepage.getSearchInputField().type("!wiki{enter}")
   // cy.get("#search_form_input_homepage").type("!wiki{enter}")
})