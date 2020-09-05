import Homepage from '../../page_objects/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage()


beforeEach("Executes before each test",()=>{
    //cypress.json -> {"baseUrl":"https://www.duckduckgo.com"}
    //cy.visit("/")
    cy.visit(Cypress.env('duckduckgo_url'))
})

it("Loads the duckduckGo page", ()=>{
    //cy.visit("https://www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")
})

it.only("It can display results relevant to search term - with enter", ()=>{
    //cy.visit("https://www.duckduckgo.com")
    homepage.getSearchInputField().type("Test{enter}")
    cy.contains("Speedtest by Ookla")
})

it("It can display results relevant to search term - with search button", ()=>{
    //cy.visit("https://www.duckduckgo.com")
    homepage.getSearchInputField().type("Test")
    homepage.getSearchButton().click()
    cy.contains("Speedtest by Ookla")    
})

it("It can display results relevant to search term - with form submit", ()=>{
    //cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_input_homepage').type("Test")
    cy.get('form').submit()
    cy.contains("Speedtest by Ookla")    
})

//it.only - jei norim tik ta testa leisti

it("Removes the banner from test results when X is pressed", ()=>{
    //cy.visit("https://www.duckduckgo.com")
    homepage.getSearchInputField().type("Test{enter}")
    //cy.get('#search_form_input_homepage').type("Test{enter}")
    cy.get('.js-badge-main-msg > .ddgsi').click()
})

it("navigates to results page and removes the banner when X is pressed", ()=>{
    //cy.visit("https://www.duckduckgo.com")
    //cy.get('body').type("Test")
    cy.get('#search_form_input_homepage').type("Test")
    cy.get('form').submit()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
})

it("Displays a cheat sheet in the results page", ()=>{
    //cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_input_homepage').type("microsoft word cheat sheet{enter}")
    cy.get('.c-base__title').contains("Microsoft Word 2010")
})

it("Displays titles with panda in results page", ()=>{
    //cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("intitle:panda")
    cy.get('#search_button_homepage').click()
    cy.get('.result__title').each(($item) => { 
    cy.get($item).contains('Panda', { matchCase: false })
    });
})

it("intitle search options works", () => {
    //cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => { 
    cy.wrap($el).contains("panda", {matchCase: false});
    });
})

it("should redirect to first result", () => {
   // cy.visit("www.duckduckgo.com");
    cy.get("#search_form_homepage").type("!wiki")
    cy.get('#search_button_homepage').click()
})

//test10 (parametrized test example generates password of 8,32,64 length)
describe('should generate secure passwords', () => {
    [8, 32, 64].forEach((passwordLenght) => {
        it('generates password with length: ' + passwordLenght, () => {
            //cy.visit("www.duckduckgo.com")
            cy.get('#search_form_homepage').type("password " + passwordLenght)
            cy.get('#search_button_homepage').click();
            cy.get('.c-base__title').then(($title) => {
                cy.get($title).invoke('text').its('length').should('be.eq', passwordLenght)
            })
        })
    })
})
