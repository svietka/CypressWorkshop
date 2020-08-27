import homepage from '../../page.objects/landing.page/selector.js'

/// <reference types="cypress" />

it("Loads the duckduckGo page",()=>{
    cy.visit("https://www.duckduckgo.com")
    homepage.type("test").submit('#search_form_homepage')
    cy.contains("Speedtest by Ookla")
})