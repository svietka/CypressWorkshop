class Homepage{
    // nereikes selectoriu keitinet prie kiekvieno testo
   getSearchButton(){
       return cy.get("#search_button_homepage")
   }

   getSearchInputField(){
    return cy.get("#search_form_input_homepage")
}
}

export default Homepage;