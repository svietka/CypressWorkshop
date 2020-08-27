import Homepage from '../../page_objects/homepage/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage

beforeEach("Executes before each test",()=> {
    cy.visit("/")
}

it.only("Loads the duckduckGo website", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")
})


it("Can display results relevant to search term", ()=> {
    cy.visit("https://www.duckduckgo.com")
    get("#search_form_homepage").type("Test")
    cy.get("#search_button_homepage").click()
    cy.contains("Speedtest by Ookla")
})


it("Can remove banner when X is pressed", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_homepage").type("Whatever")
    cy.get("#search_button_homepage").click()
    cy.get(".js-badge-main-msg > .ddgsi").click()
    cy.get(".badge-link__thumb__img").should("not.be.visible")
})


it("result contain panda", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_homepage").type("intitle panda")
    cy.get("#search_button_homepage").click()
    cy.get(".result__title").each(($el) => {
    cy.wrap($el).contains("panda", {matchCase: false})
})


it("should redirect to first result", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("!wiki")
    cy.get("#search_button_homepage").click()
    })


})