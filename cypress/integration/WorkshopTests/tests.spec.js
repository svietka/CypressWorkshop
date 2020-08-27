import Homepage from '../page_object/homepage/homepage'
/// <reference types="cypress" />

let homepage = new Homepage();

beforeEach(() => {
    cy.visit('/')
  })

it('Loads the duckduckGo website', () => {
    cy.contains('Tired of being tracked online? We can help.')
})

it('Can display results relevant to search term', () => {
    homepage.getSearchInputField().type('Test{enter}')
    cy.contains('Speedtest by Ookla').should('be.visible')
})

it('Can display results relevant to search term', () => {
    homepage.getSearchInputField().type('Test')
    homepage.getSearchButton().click()
    cy.contains('Speedtest by Ookla').should('be.visible')
})

it('Removes the banner when X is pressed on search results page', () => {
    homepage.getSearchInputField().type('Test')
    homepage.getSearchButton().click()
    cy.get('.js-badge-link-dismiss').click()
    cy.get('.badge-link__thumb').should('not.be.visible')
})

it('Loads microsoft word shortcuts', () => {
    homepage.getSearchInputField().type('microsoft word cheat sheet')
    homepage.getSearchButton().click()
    cy.contains('Microsoft Word 2010').should('be.visible')
})

it('Intitle search options work', () => {
    homepage.getSearchInputField().type('intitle:panda')
    homepage.getSearchButton().click()
    cy.get('.result__title').each(($el) => {
        cy.wrap($el).contains('panda', {matchCase: false});
    })
})

it('Should redirect to first result', () => {
    homepage.getSearchInputField().type('!wiki')
    homepage.getSearchButton().click()
})
