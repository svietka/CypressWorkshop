import Homepage from "../../page_objects/homepage/homepage.js"
/// <reference types="cypress" />

var homepage = new Homepage()

beforeEach("Opens the website before each test", () => {
    cy.visit("/")
})

it("Loads the duckduckGo page", () =>{
    cy.contains("Tired of being tracked online? We can help.")
})

it("Displays results relevant to the search term (click method)", () =>{
    homepage.getSearchInputField("#search_form_input_homepage").type("test")
    homepage.getSearchButton().click()
    cy.contains("Speedt)est by Ookla")
})

it("Displays results relevant to the search term (enter method)", () =>{
    homepage.getSearchInputField().type("test{enter}")
    cy.contains("Speedtest by Ookla")
})

it("Navigates to results page and removes the robot banner when X is pressed", () => {
    homepage.getSearchInputField().type("whatever")
    homepage.getSearchButton().click()
    cy.get(".js-badge-main-msg > .ddgsi").click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
})

it("Displays a cheat sheet in the results page", () => {
    homepage.getSearchInputField().type("microsoft word cheat sheet")
    homepage.getSearchButton().click()
    cy.get('.c-base__title').should("be.visible")
})

it("Displays results with word 'panda' in every result", () => {
    homepage.getSearchInputField().type("intitle:panda")
    homepage.getSearchButton().click()
    cy.get('.result__title').each(($item) => {
        cy.get($item).contains('Panda', { matchCase: false })
    })
})

it("Opens first search page directly", () => {
    homepage.getSearchInputField().type("!wiki")
    homepage.getSearchButton().click()
})