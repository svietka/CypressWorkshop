class Homepage {
    getSearchButton = () => cy.get("#search_button_homepage");

    getSearchInput = () => cy.get("#search_form_input_homepage");
}

export default Homepage
