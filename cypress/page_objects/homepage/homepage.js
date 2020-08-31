class Homepage{

    getSearchInputField(){
        return cy.get('#search_form_homepage')
    }

    getSearchButton(){
        return cy.get('#search_button_homepage')
    }
}

export default Homepage;