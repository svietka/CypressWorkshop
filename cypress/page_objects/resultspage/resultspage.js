class Resultspage {
    getRobotExitButton() {
        return cy.get(".js-badge-main-msg > .ddgsi")
    }

    getRobotLogo() {
        return cy.get('.badge-link__thumb__img')
    }

    getResultTitle() {
        return cy.get(".result__title")
    }
}

export default Resultspage