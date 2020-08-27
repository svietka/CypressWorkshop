import Homepage from ",,/../page_objects/homepage/homepage.js"


/// <reference types="cypress" />
var homepage = new Homepage ()

beforeEach("executes before each test", ()=> 
cy.vivit('/')

it("Loads the duckduckgo page", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")
    
})

it.only("It navigates to results page and removes the banner when X is pressed", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("whatever")
    cy.get("form").submit()
    cy.get(".js-badge-main-msg > .ddgsi").click()
    cy.get(".badge-link__thumb__img").should("not.be.visible")
})

it.only("Microsoft word cheat sheat", ()=> {
cy.visit("https://www.duckduckgo.com")
cy.get("search_form_input_homepage").type("Microsoft word cheat sheat{enter}")
cy.get('.c-base__title').contains("Microsoft word cheat sheat")
})



it.only('redirect to the foirst result', () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("!wiki")
    cy.get("#search_button_homepage").click() 
    })


/* 

it.only('intitle:Panda',()=>{
cy.visit("https://www.duckduckgo.com")
cy.get("#search_form_homepage").type("intitle:Panda{enter}")
cy.get("#search_button_homepage").click()


it.only("intitle search options works", () => {
    cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    }); */

/* cy.get('.result__title').each(($item) => { 
    cy.get($item).contains('Panda', { matchCase: false 
    }) */
 