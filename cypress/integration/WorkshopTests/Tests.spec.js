import Homepage from '../../page_objects/homepage/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage

beforeEach("Executes before each test", () => {
    cy.visit("")
})

it("Loads the duckduckGo page", ()=>{
    cy.contains("Tired of being tracked online? We can help.")
})

it("Can display results relevent to search term", ()=>{
    cy.get("#search_form_homepage").type("Test{enter}") // neveikia sita funkcija
    //cy.contains("Speedtest by Ookla")
})

it("clicks button", ()=>{
    homepage.getSearchInputField().type("Test")
    homepage.getSearchButton().click()
   // cy.get("#search_button_homepage").click()
    cy.contains("Speedtest by Ookla")
})

it("navigates to results page and removes the robot banner when x is pressed and checks if it still is visible", ()=>{
    homepage.getSearchInputField().type("Test")
    homepage.getSearchButton().click()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__wrap--hidden > .ddgsi').click()
    cy.get('.js-badge-main-msg').should("not.be.visible")
})

it("navigates to a search of a cheat sheet", ()=>{
    homepage.getSearchInputField().type("microsoft word cheat sheet")
    homepage.getSearchButton().click()
    cy.contains("Microsoft Word 2010")

})

it("navigates to a search of a cheat sheet", ()=>{
    homepage.getSearchInputField().type("intitle:panda")
    homepage.getSearchButton().click()
    cy.get('.result__title').each(($item) => { cy.get($item).contains('Panda', { matchCase: false})
    })
})

it("should redirect to first result", ()=> {
    homepage.getSearchInputField().type("!wiki")
    homepage.getSearchButton().click()
})