class Homepage{
    searchForm="#search_form_homepage";
    searchButton="#search_button_homepage";


    getSearchForm(){
        return cy.get(this.searchForm)
    }
    clickSearchButton(){
        return cy.get(this.searchButton).click()
    }
}

export default Homepage