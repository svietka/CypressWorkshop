import Homepage from '../../page_objects/homepage/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage()
var searchButton = '#search_button_homepage';

it('loads the DuckDuckGo', ()=>{
    cy.log('start 1')
    cy.visit('https://www.duckduckgo.com')
    cy.contains('Tired of being tracked online? We can help.')
    cy.log('end 1')
})

it.only('searches for speedtest', ()=>{
    cy.visit('https://www.duckduckgo.com')
    cy.get('#search_form_homepage').type('Test')
    homepage.getSearchButton(searchButton).click()
    cy.contains('Speedtest by Ookla')
})

it('removes banner', ()=>{
    cy.log('start 3')
   
    cy.visit('https://www.duckduckgo.com')
    cy.get('#search_form_homepage').type('Test')
    cy.get('#search_button_homepage').click()  
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")

})

it('opens MS Word cheat sheet table', ()=>{
    cy.visit('https://www.duckduckgo.com')
    cy.get('#search_form_homepage').type('Microsoft Word Cheat Sheet')
    cy.get('#search_button_homepage').click()  
    cy.get('.cheatsheet__title').should('be.visible')

})

it('checks if panda is in every result', ()=>{
    cy.visit('https://www.duckduckgo.com')
    cy.get('#search_form_homepage').type('intitle:panda')
    cy.get('#search_button_homepage').click()
    cy.get('.result__body').contains('panda')

})

it('redirects to wiki', ()=>{
    cy.visit('https://www.duckduckgo.com')
    cy.get('#search_form_homepage').type('!wiki')
    cy.get('#search_button_homepage').click()
})

