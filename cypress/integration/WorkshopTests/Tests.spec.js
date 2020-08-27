import HomePage from '../../PageObjects/Homepage/HomePage.js'
/// <reference types="cypress" />

var homepage = new HomePage()

beforeEach("Executes before each test", ()=>{
    cy.visit("/")
})


it("Loads the duckduckGo page", ()=>{
    cy.contains("Tired of being tracked online? We can help.")
})


it("Can display results relevent to search term", ()=> {
    cy.get('#search_form_homepage').type("Test")
    homepage.getSearchButton().click()
    cy.contains("Speedtest by Ookla")
})  


it("Can display search result_version2", () => {
    homepage.getSearchInputField().type("Test{enter}")
    cy.contains("Speedtest by Ookla")
})


it("Removes the banner from test results when X is pressed", () => {
    cy.get("#search_form_input_homepage").type("Whatever")
    homepage.getSearchButton().click()
    cy.get(".js-badge-main-msg > .ddgsi").click()
    cy.get('.badge-link__thumb__img').should('not.be.visible')
})


it("Search gives back cheat sheet", () => {
    cy.get("#search_form_input_homepage").type("Microsoft word cheat sheet")
    homepage.getSearchButton().click()
    cy.contains("Microsoft Word 2010")
})


it("intitle search options works", () => {
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})


it("should redirect to first result", ()=> {
    cy.get('#search_form_homepage').type("!wiki")
    cy.get("#search_button_homepage").click()
    })

