class Homepage {
    getSearchButton() {
        return cy.get("#search_button_homepage")
    }

    getSearchInputField() {
        return cy.get("#search_form_input_homepage")
    }

    getCheatSheetTitle() {
        return cy.get('.c-base__title')
    }
}

export default Homepage