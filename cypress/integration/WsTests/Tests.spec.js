//importavimas klasių homepage.js ir resultpage iš page_objects folderio
import Homepage from "../../page_objects/Home_page/homepage.js"
/// <reference types="cypress" />
import Resultpage from "../../page_objects/Result_page/resultpage.js"
/// <reference types="cypress" />

//homepage ir resultpage kintamojo inicijavimas
var homepage = new Homepage()
var resultpage = new Resultpage()


//baseUrl inicijavimas iš cypress.json
beforeEach("Executes before each test", () => {
    cy.visit ('/')
})

it('Loads the duckduckGo page', () => {
    //cy.visit('https://duckduckgo.com') // čia pvz. jei nebūtų pakeitimų faile cypress.json
    cy.contains('Tired of being tracked online? We can help.')
})

it('Can display search result_version1', () => {
    //cy.get('#search_form_input_homepage').type('Test') // jei nebūtų inkapsuliacijos iš Homepage klasės
    //cy.get('#search_button_homepage').click() // jei nebūtų inkapsuliacijos iš Homepage klasės
    homepage.getSearchInputField().type('Test')
    homepage.getSearchButton().click()
    cy.contains('Speedtest by Ookla')

})

// daro tą patį, ką ir antras testas, bet naudoja Enter
it('Can display search result_version2', () => {
    homepage.getSearchInputField().type('Test{enter}')
    cy.contains('Speedtest by Ookla')
})

it('Removes the banner from test results when X is pressed', () => {
    homepage.getSearchInputField().type('whatewer{enter}')
    homepage.getBadgeCloseButton().click()
    resultpage.getBadgeImage().should('not.be.visible')
    //cy.get('.badge-link_thumb_img').should('not.be.visible') //jei nebūtų inkapsuliacijos iš Result klasės
    cy.contains('Clear your cookies often') //kitas būdas assertinti
})

it('Search returns microsoft word cheat sheet', () => {
    homepage.getSearchInputField().type('microsoft word cheat sheet{enter}')
    resultpage.getBaseTitle().should('be.visible') // būdas nr. 1
    resultpage.getBaseTitle().contains('Microsoft Word 2010') // būdas nr. 2
})

it('Intitle search options works', () => {
    homepage.getSearchInputField().type('intitle:panda{enter}')
    resultpage.getResultTitle().each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
    
})

it('Should redirect to first result', () => {
    homepage.getSearchInputField().type('!Wiki{enter}')
    resultpage.getWikiLogo().then(($el) => {
        Cypress.dom.isVisible($el) // būdas nr. 1
      })
    cy.title().should('eq', 'Wikipedia, the free encyclopedia') // būdas nr. 2
});

it('Should search on wikipedia', () => {
    homepage.getSearchInputField().type('!w lithuania{enter}')
    cy.title().should('eq', 'Lithuania - Wikipedia')
    resultpage.getWikiHeader().contains('Lithuania')
   })


it('Should verify if page is down', () => {
    homepage.getSearchInputField().type('Is devbridge.com down{enter}')
    resultpage.getBaseTitle().contains("devbridge.com seems up")
   })


describe('Search query should generate secure passwords', () => {
    [8, 32, 64].forEach((pswLenght) => {
        it('Generates password with lenght: ' + pswLenght, () => {
            homepage.getSearchInputField()
                .type('Password ' + pswLenght)
                .type('{enter}')
            resultpage.getBaseTitle().then(($title) => {
                cy.get($title).invoke('text').its('length').should('be.eq', pswLenght)
            })
        })
    })
})


describe('Search query should be ignored when generating insecure passwords', () => {
    [1, 7, 65, 512].forEach((event) => {
        it('Triggers an event: ' + event, () => {
            homepage.getSearchInputField()
                .type('Password' + event)
                .type('{enter}')
            resultpage.getBaseTitle()
                .should('not.exist')
        })
    })
})
   
it('Should launch a stop watch', () => {
    homepage.getSearchInputField()
        .type('Stopwatch {enter}')
    resultpage.getStopWatchTime()
        .contains('00:00.00')
})

it('Should start and stop a stop watch time', () => {
    homepage.getSearchInputField()
        .type('Stopwatch {enter}')
    resultpage.getStopWatchStartButton()
        .click()
    resultpage.getStopWatchStopButton()
        .click()
    resultpage.getStopWatchTime()
        .should('not.be.eq', '00:00.00')
})

 const sizes = ['iphone-6', 'ipad-2', [1024, 768]]

 describe('Page should adapt to different screen sizes', () => {
     sizes.forEach((size) => {
         it.only(`Should display logo on ${size} screen`, () => {
             if (Cypress._.isArray(size)) {
                 cy.viewport(size[0], size [1])
             } else {
                 cy.viewport(size)
             }
        homepage.getSearchInputField()
             .type('Stopwatch')
        homepage.getSearchButton()
             .click({force: true})
         })
     })
 })

 