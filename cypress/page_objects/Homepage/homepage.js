class Homepage{
    getSearchButton(){
        return cy.get("#search_button_homepage")
    }
    getSearchInputField(){
        return cy.get("#search_form_input_homepage")
    }
    getVisitPage(){
        return cy.visit("/")
    }
}
export default Homepage