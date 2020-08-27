class Homepage {
    initPage = "https://www.duckduckgo.com";
    searchButton = '#search_button_homepage';
    inputField = '#search_form_input_homepage';

    visitInitialPage() {
        return cy.visit(this.initPage);
    }

    getSearchButton() {
        return cy.get(this.searchButton);
    }

    getSearchInputField() {
        return cy.get(this.inputField);
    }
}

export default Homepage