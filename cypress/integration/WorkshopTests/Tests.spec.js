import Homepage from '../../page objects/home page/homepage'
/// <reference types="cypress" />

var homepage = new Homepage()

it("Loads the duckduckGo page", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")
    
})

it("Can display results relevant to search term", ()=>{
    cy.visit("https://www.duckduckgo.com")
    homepage.getSearchInputField().type("Test")
    homepage.getSearchInputField().click()
    cy.contains("Speedtest by Ookla")

})

it.only("Can display results relevant to search term", ()=>{
    cy.visit("https://www.duckduckgo.com")
    homepage.getSearchInputField().type("Test{enter}")
    cy.contains("Speedtest by Ookla")

})

it("navigates to results page and removes the robot banner from test results when X is pressed",()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_homepage").type("test")
    cy.get("form").submit();
    cy.get(".js-badge-main-msg > .ddgsi").click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")

})

it("microsoft word cheat sheet", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_homepage").type("microsoft word cheat sheet")
    cy.get("#search_button_homepage").click()
    cy.contains("Microsoft Word 2010").should("be.visible")
})

it("intitle search options works", () => {
    cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

