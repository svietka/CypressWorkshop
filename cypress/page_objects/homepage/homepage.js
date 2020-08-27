class Homepage{

        getSearchButton(){
            return cy.get("#search_button_homepage")
        }

        getSearchInputField(){
            return cy.get("#search_from_input_homepage")
        }
}

export default Homepage