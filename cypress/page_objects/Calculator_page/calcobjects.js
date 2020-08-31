class Calcelements{
   getOperationList(){
      return cy.get('#selectOperationDropdown')   
   }
   getBuildList(){
      return cy.get('#selectBuild')   
   }
   getIntegerCheckBox(){
      return cy.get('#integerSelect')   
   }
   getNumber1Field(){
      return cy.get('#number1Field')   
   }
   getNumber2Field(){
      return cy.get('#number2Field')   
   }
   getCalculateButton(){
      return cy.get('#calculateButton')   
   }
   getAnswerField(){
      return cy.get('#numberAnswerField')   
   }
   getClearButton(){
      return cy.get('#clearButton')   
   }
   getErrorMessageField(){
      return cy.get('#errorMsgField')   
   }
}
export default Calcelements