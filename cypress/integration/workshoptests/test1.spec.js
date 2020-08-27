import Homepage from "../../page_objects/home_page/homepage.spec.js"

/// <reference types="cypress" />


var homepage = new Homepage()

it("Loads the duckduck go page",()=>{
    cy.visit("http://duckduckgo.com")
    homepage.getSearchInputField().type("test")
    homepage.getSearchButton.click()
    cy.contains("Speedtest by Ookla")

})