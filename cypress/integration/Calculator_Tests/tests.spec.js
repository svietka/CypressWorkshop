import selectors from '../../Page objects/selectors.js'
/// <reference types="cypress" />

const BuildVersions = ['0','1','2','3','4','5','6','7','8','9']

var selector = new selectors

beforeEach('Executes  before each test', () =>{
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
})

it('Loads the calculator page', ()=>{
    cy.contains("Basic Calculator")
})

describe('selects calculator build version', () => {
    BuildVersions.forEach((version) => {
        beforeEach('Executes before each test', () =>{
            cy.get('#selectBuild').select(version)
        })

        it('select version of calculator' + version, ()=>{
            cy.get('#selectBuild').select(version)
        })

        it('checks if all dropdowns, forms and buttons are visible in CALCULATOR', ()=>{
            cy.get('#selectBuild').should('be.visible')
            cy.get('#number1Field').should('be.visible')
            cy.get('#number2Field').should('be.visible')
            cy.get('#selectOperationDropdown').should('be.visible')
            cy.get('#calculateButton').should('be.visible')
            cy.get('#numberAnswerField').should('be.visible')
            cy.get('#integerSelect').should('be.visible')
            cy.get('#clearButton').should('be.visible')
        })

        it('checks if all buttons or checkboxes are enabled', ()=>{
            cy.get('#calculateButton').should('be.enabled')
            cy.get('#integerSelect').should('not.be.disabled')
            cy.get('#clearButton').should('be.enabled')
        })
    })
})

// it('Can display results relevent to search term and search for relevant results', ()=> {
//     selector.getSearchInputField().type('Test')
//     selector.getsearchbutton().click()
//     cy.contains('test')
// })

// it("Removes the banner when X is pressed", () => {
//     selector.getSearchInputField().type("test")
//     cy.get('form').submit();
//     cy.get('.js-badge-main-msg > .ddgsi').click()
//     cy.get('.badge-link__thumb__img').should("not.be.visible")
// })

// it("intitle search options works 1", () => {
//     selector.getSearchInputField().type("intitle:panda{enter}");
//     cy.get(".result__title").each(($el) => {
//         cy.wrap($el).contains("panda", {matchCase: false});
//     });
// })

// it("intitle search options works 2", () => {
//     selector.getSearchInputField().type("intitle:panda{enter}")
//     cy.get('.result__title').each(($item) => { 
//         cy.get($item).contains('Panda', { matchCase: false })
//     })
// })

// it("should redirect to first result", ()=> {
//     selector.getSearchInputField().type("!wiki")
//     selector.getsearchbutton().click()
// })

// describe('should generate secure passwords', () => {
//     [8, 32, 64].forEach((passwordLenght) => {
//     it.only('generates password with length: ' + passwordLenght, () => {
//     cy.visit("www.duckduckgo.com")
//     cy.get('#search_form_homepage').type("password " + passwordLenght)
//     cy.get('#search_button_homepage').click();
//     cy.get('.c-base__title').then(($title) => {
//     cy.get($title).invoke('text').its('length').should('be.eq', passwordLenght)
//     })
//     })
//     })
//     })