import LandingPage from '../../page_objects/landingpage/landingpage.js'
/// <reference types="cypress" />

let landingPage = new LandingPage();

beforeEach('Executes before each test',()=>{
    cy.visit('/BasicCalculator');
    
})


const builds = [...Array(10).keys()].map(String);
const operations = ['Add', 'Subtract', 'Multiply', 'Divide', 'Concatenate']

builds.forEach(build=>{

    


    it(`User can enter first number in build ${build} `, ()=>{
        landingPage.getBuildDropdown().select(build);
        landingPage.getFirstNumberField().type(5).should('have.value', '5');
        
    
    
    })
    
    it(`User can enter second number in build ${build} `, ()=>{
        landingPage.getBuildDropdown().select(build);
        landingPage.getSecondNumberField().type(5).should('have.value', '5');
        
    })

    it(`User can click 'Calculate' button in build ${build} `, ()=>{
        landingPage.getBuildDropdown().select(build);
        landingPage.getCalculateButton().should('not.be.disabled');
        
    })


    it(`User can click 'Clear' button in build ${build} `, ()=>{
        landingPage.getBuildDropdown().select(build);
        landingPage.getClearButton().should('not.be.disabled');
        
    })

    it.only(`User can choose integers value answer in build ${build} only `, ()=>{
        landingPage.getBuildDropdown().select(build);
        let ops = landingPage.getOperations();
        ops.each(op => {
            ops.select(op.value);
            landingPage.getIntegerSelect().should('not.be.disabled');

        })

       /* landingPage.getOperations().each(op => {
            landingPage.get
        })*/

    })







})


   





