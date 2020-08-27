class Homepage {
    constructor() {
        this.searchButton = "#search_button_homepage";
    }

    getSearchButton() {
        return cy.get(this.searchButton);
    }

    getSearchInput() {
        return cy.get("#search_form_input_homepage");
    }
}

export default Homepage
