import Homepage from "../../page_object/homepage/hopmepage.js"
/// <reference types="cypress" />

var  homepage = new Homepage()





it("Loads the ducduckGo website", ()=>{
    cy.visit("https://duckduckgo.com/")
    cy.contains("Tired of being tracked online? We can help.")
})

it("Searches for 'test'", ()=>{
    cy.visit("https://duckduckgo.com/")
    cy.get("#search_form_homepage").type("test")
    cy.get("#search_button_homepage").click() 
    cy.contains ("Speedtest by Ookla")
})

it.only("Searches for 'test' with enter", ()=>{
    cy.visit("https://www.duckduckgo.com")
    homepage.getSearchButton().click()
    cy.contains ("Speedtest by Ookla")
    })

    it("4 testas", ()=> {
        cy.visit("https://www.duckduckgo.com")
        cy.get("#search_form_homepage").type("microsoft word cheat sheet")
        cy.get("#search_button_homepage").click()
        cy.get('.zci__main').contains("Microsoft Word 2010")
    })

 it.only("intitle search options works", () => {
        cy.visit("https://duckduckgo.com/");
        cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
        cy.get(".result__title").each(($el) => {
            cy.wrap($el).contains("panda", {matchCase: false});
        });
    })



