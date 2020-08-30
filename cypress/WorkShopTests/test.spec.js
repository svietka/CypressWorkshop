import Homepage from "../../page_objects/homepage/homepage.js"

/// <reference types="cypress" />

 var homepage = new Homepage()

 beforeEach("Executes before each tests",()=>{
    //pries baseUrl cy.visit("https://www.duckduckgo.com")
    cy.visit("/")
 })


it("Loads the duckduckGo page", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.") 
})

it("Can display results relevant to search term", ()=>{
    cy.visit("https://www.duckduckgo.com")
    //cy.get('#search_form_homepage').type("Test{enter}")
    homepage.getSearchInputField().type("Test{enter}")
})

// atidarom puslapi, yvedam zodeli test, paspaudziam search mygtuka, patikrinam ar yra tarp rezultatu 'Speedtest by Ookla'
it("Can display search", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("Test")
    homepage.getSearchButton().click()
    cy.contains("Speedtest by Ookla")
})

//Removes the banner from test results when X is pressed

it("Navigates to results page and removes the robot banner when X is pressed", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("test")
    cy.get('form').submit();
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
})

//microsoft word cheat sheet

it("Microsoft word cheat sheet", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_homepage").type("microsoft word cheat sheet")
    cy.get("#search_button_homepage").click()
    cy.contains("Microsoft Word 2010")
})

it("Displays a cheat sheet in the results page", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("microsoft word cheat sheet")
    cy.get("#search_button_homepage").click()
    cy.get('.c-base__title').contains("Microsoft Word 2010")
})

///

it("init:panda", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_homepage").type("intitle:panda")
    cy.get("#search_button_homepage").click()
})

it.only("intitle search options works", () => {
    cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
    cy.wrap($el).contains("panda", {matchCase: false});
    });
})