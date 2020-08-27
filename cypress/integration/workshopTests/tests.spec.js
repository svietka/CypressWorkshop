import Homepage from '../../page_objects/home_page/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage()

beforeEach("Executes before each test", () => {
    cy.visit("/")
})

it.only("Loads the duckduckGo website", () => {
    cy.contains("Tired of being tracked online? We can help.")
    homepage.getSearchInputField().type("test");
    homepage.getSearchButton().click();
})

it.only ("Search for 'tests'", () => {
    cy.get("#search_form_input_homepage").type("test");
    cy.get("#search_button_homepage").click();
    cy.contains("Speedtest by Ookla");
})

it("Search for 'tests' with ENTER click", () => {
    cy.visit("https://duckduckgo.com/")
    cy.get("#search_form_input_homepage").type("test{enter}");
    cy.contains("Speedtest by Ookla");
})

it("Removes the banner from test results when X is pressed", () => {
    cy.visit("https://duckduckgo.com/")
    cy.get("#search_form_input_homepage").type("whatever{enter}");
    cy.get(".js-badge-main-msg > .ddgsi").click();
    cy.get(".badge-link__thumb__img").should("not.be.visible");
})

it("microsoft word cheat sheet", () => {
    cy.visit("https://duckduckgo.com/")
    cy.get("#search_form_input_homepage").type("Microsoft word cheat sheet{enter}");
    cy.contains("Microsoft Word 2010");
})

it("microsoft word cheat sheet II", () => {
    cy.visit("https://duckduckgo.com/")
    cy.get("#search_form_input_homepage").type("Microsoft word cheat sheet{enter}");
    cy.get(".zci__body").should("be.visible")
})

it("intitle:panda", () => {
    cy.visit("https://duckduckgo.com/")
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

it("should redirect to test results", () => {
    cy.visit("https://duckduckgo.com/")
    cy.get("#search_form_input_homepage").type("!wiki{enter}");
})