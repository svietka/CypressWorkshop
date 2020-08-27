import Homepage from '../../page_objects/Homepage/homepage.js'
/// <reference types="cypress" />
var homepage = new Homepage()

beforeEach ("Executes before each test", ()=>{
    homepage.getVisitPage()
})

it.only("Loads the duckduckGo website", () => {
        cy.contains("Tired of being tracked online? We can help.")
})

it("Can display results relevant to search term", () => {
    homepage.getSearchInputField().type("Test")
    homepage.getSearchButton().click()
    cy.contains("Speedtest by Ookla")
})

it("Can display results relevant to search term", () => {
    homepage.getSearchInputField().type("Test{enter}")
    cy.contains("Speedtest by Ookla")
})

it("Display results of 'Whatever' search and closes robot pop-up window ", () => {
    homepage.getSearchInputField().type("Whatever{enter}")
    cy.get(".js-badge-main-msg > .ddgsi").click()
    cy.get(".badge-link__thumb__img").should("not.be.visible")
})

it("Display results of 'microsoft word cheat sheets' and opens common tasks and formating ", () => {
    homepage.getSearchInputField().type("microsoft word cheat sheet{enter}")
    cy.contains("Microsoft Word 2010")
})
it("Display results of 'intitle:panda' and each finding has word 'panda'", () => {
    homepage.getSearchInputField.type("intitle:panda{enter}")
    cy.get('.result__title').each(($item) => { cy.get($item).contains('Panda', { matchCase: false })
    })
})


it("search for '!wiki'", () => {
    homepage.getSearchInputField().type("!wiki{enter}")

})
