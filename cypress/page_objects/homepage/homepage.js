class Homepage{
    searchButton = "#search_button_homepage";
    searchInputField = "#search_form_input_homepage";

    getSearchButton(){
        return cy.get(this.searchButton);
    }

    getSearchInputField(){
        return cy.get(this.searchInputField);
    }
}

export default Homepage