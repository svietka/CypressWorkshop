class Homepage{
    getSearchButton(){
        return cy.get('#search_button_homepage')
    }
    getSearchInputField(){
        return cy.get('#search_form_input_homepage')
    }
    getBadgeCloseButton(){
        return cy.get('.js-badge-main-msg > .ddgsi')
    }
}
export default Homepage