class selectors{
    searchbutton = '#search_button_homepage'
    searchform = '#search_form_input_homepage'

    getsearchbutton(){
        return cy.get(this.searchbutton)
    }

    getSearchInputField(){
        return cy.get(this.searchform)
    }
}

export default selectors