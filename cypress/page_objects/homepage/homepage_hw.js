class Homepage_hw{
 
    getBuild(){
        return cy.get('#selectBuild')
    }
    getOperator(){
        return cy.get('#selectOperationDropdown')
    }
}
export default Homepage_hw