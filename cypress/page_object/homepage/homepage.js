class Homepage
{
    getSearchButton()
    {
        return cy.get('#search_button_homepage')
    }

    getSearchField()
    {
        return cy.get('#search_form_input_homepage')
    }
}

export default Homepage