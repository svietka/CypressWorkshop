/// <reference types="cypress" />
import HomeworkPage from '../../page_objects/HomeworkPage/HomeworkPage.js'

var homeworkPage = new HomeworkPage

const builds = ['Prototype', 1, 2, 3, 4, 5, 6, 7, 8, 9]
const integersOnly = [0, 1]

beforeEach('Executes before each test', ()=>{
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
}) 

//ADD
integersOnly.forEach((integer) => {
    builds.forEach((build) =>{
        it(`Adds two numbers correctly for ${build} build, integers only = ${integer}`, ()=>{  
            if(integer == 1){
                homeworkPage.getIntegersOnlyCheckbox().click();
            }
            homeworkPage.getBuildDropdown().select(`${build}`)  
            homeworkPage.getNumberOneField().type(3.5)
            homeworkPage.getNumberTwoField().type(4)
            homeworkPage.getCalculateButton().click()
            if(integer == 1){
                homeworkPage.getAnswerField().should('have.value', '7')     
            }else{
                homeworkPage.getAnswerField().should('have.value', '7.5') 
            }               
        })
    })
})

//SUBTRACT
integersOnly.forEach((integer) => {
    builds.forEach((build) =>{
        it.only(`Subtracts two numbers correctly for ${build} build, integers only = ${integer}`, ()=>{
            if(integer == 1){
                homeworkPage.getIntegersOnlyCheckbox().click();
            }
            homeworkPage.getBuildDropdown().select(`${build}`)
            homeworkPage.getNumberOneField().type(3.5)
            homeworkPage.getNumberTwoField().type(4)
            homeworkPage.getOperationDropdown().select('Subtract')
            homeworkPage.getCalculateButton().click()
            if(integer == 1){
                homeworkPage.getAnswerField().should('have.value', '0')  
            }else{
                homeworkPage.getAnswerField().should('have.value', '-0.5')  
            }    
        })
    })
})

//MULTIPLY
integersOnly.forEach((integer) => {
    builds.forEach((build) =>{
        it(`Multiplies two numbers correctly for ${build} build, integers only = ${integer}`, ()=>{
            if(integer == 1){
                homeworkPage.getIntegersOnlyCheckbox().click();
            }
            homeworkPage.getBuildDropdown().select(`${build}`)
            homeworkPage.getNumberOneField().type(4.2)
            homeworkPage.getNumberTwoField().type(4)
            homeworkPage.getOperationDropdown().select('Multiply')
            homeworkPage.getCalculateButton().click()
            if(integer == 1){
                homeworkPage.getAnswerField().should('have.value', '16')  
            }else{
                homeworkPage.getAnswerField().should('have.value', '16.8')  
            }    
        })
    })
})

//DIVIDE
integersOnly.forEach((integer) => {
    builds.forEach((build) =>{
        it(`Devides two numbers correctly for ${build} build, integers only = ${integer}`, ()=>{
            if(integer == 1){
                homeworkPage.getIntegersOnlyCheckbox().click();
            }
            homeworkPage.getBuildDropdown().select(`${build}`)
            homeworkPage.getNumberOneField().type(3)
            homeworkPage.getNumberTwoField().type(2)
            homeworkPage.getOperationDropdown().select('Divide')
            homeworkPage.getCalculateButton().click()
            if(integer == 1){
                homeworkPage.getAnswerField().should('have.value', '1')  
            }else{
                homeworkPage.getAnswerField().should('have.value', '1.5')  
            }  
        })
    })
})

//CONCATENATE
builds.forEach((build) =>{
    it(`Concatinates corectly for ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getNumberOneField().type('4b')
        homeworkPage.getNumberTwoField().type('1aa2')
        homeworkPage.getOperationDropdown().select('Concatenate')
        homeworkPage.getCalculateButton().click()
        homeworkPage.getAnswerField().should('have.value', '4b1aa2')            
    })
})

//ADD
builds.forEach((build) =>{
    it(`Should throw error message when trying to add letters in field one for build ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getNumberOneField().type('4b')
        homeworkPage.getNumberTwoField().type('2')
        homeworkPage.getOperationDropdown().select('Add')
        homeworkPage.getCalculateButton().click()
        homeworkPage.getErrorField().contains('Number 1 is not a number')           
    })
})

builds.forEach((build) =>{
    it(`Should throw error message when trying to add letters in field two for build ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getNumberOneField().type('4')
        homeworkPage.getNumberTwoField().type('2b')
        homeworkPage.getOperationDropdown().select('Add')
        homeworkPage.getCalculateButton().click()
        homeworkPage.getErrorField().contains('Number 2 is not a number')           
    })
})

//SUBTRACT
builds.forEach((build) =>{
    it(`Should throw error message when trying to subtract letters in field one for build ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getNumberOneField().type('4b')
        homeworkPage.getNumberTwoField().type('2')
        homeworkPage.getOperationDropdown().select('Subtract')
        homeworkPage.getCalculateButton().click()
        homeworkPage.getErrorField().contains('Number 1 is not a number')           
    })
})

builds.forEach((build) =>{
    it(`Should throw error message when trying to subtract letters in field two for build ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getNumberOneField().type('4')
        homeworkPage.getNumberTwoField().type('2b')
        homeworkPage.getOperationDropdown().select('Subtract')
        homeworkPage.getCalculateButton().click()
        homeworkPage.getErrorField().contains('Number 2 is not a number')           
    })
})

//MULTIPLY
builds.forEach((build) =>{
    it(`Should throw error message when trying to multiply letters in field one for build ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getNumberOneField().type('4b')
        homeworkPage.getNumberTwoField().type('2')
        homeworkPage.getOperationDropdown().select('Multiply')
        homeworkPage.getCalculateButton().click()
        homeworkPage.getErrorField().contains('Number 1 is not a number')           
    })
})

builds.forEach((build) =>{
    it(`Should throw error message when trying to multiply letters in field two for build ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getNumberOneField().type('4')
        homeworkPage.getNumberTwoField().type('2b')
        homeworkPage.getOperationDropdown().select('Multiply')
        homeworkPage.getCalculateButton().click()
        homeworkPage.getErrorField().contains('Number 2 is not a number')           
    })
})

//DIVIDE
builds.forEach((build) =>{
    it(`Should throw error message when trying to divide letters in field one for build ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getNumberOneField().type('4b')
        homeworkPage.getNumberTwoField().type('2')
        homeworkPage.getOperationDropdown().select('Divide')
        homeworkPage.getCalculateButton().click()
        homeworkPage.getErrorField().contains('Number 1 is not a number')           
    })
})

builds.forEach((build) =>{
    it(`Should throw error message when trying to divide letters in field two for build ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getNumberOneField().type('4')
        homeworkPage.getNumberTwoField().type('2b')
        homeworkPage.getOperationDropdown().select('Divide')
        homeworkPage.getCalculateButton().click()
        homeworkPage.getErrorField().contains('Number 2 is not a number')          
    })
})

//CONCATENATE
builds.forEach((build) =>{
    it(`Should NOT throw error message when trying to concatenate letters in field one for build ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getNumberOneField().type('4b')
        homeworkPage.getNumberTwoField().type('2')
        homeworkPage.getOperationDropdown().select('Concatenate')
        homeworkPage.getCalculateButton().click()
        homeworkPage.getErrorField().should("not.be.visible")           
    })
})

builds.forEach((build) =>{
    it.only(`Should NOT throw error message when trying to concatenate letters in field two for build ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getNumberOneField().type('4')
        homeworkPage.getNumberTwoField().type('2b')
        homeworkPage.getOperationDropdown().select('Concatenate')
        homeworkPage.getCalculateButton().click()
        homeworkPage.getErrorField().should("not.be.visible")        
    })
})

builds.forEach((build) =>{
    it.only(`Should NOT let you select integers only checkbox two for build ${build}`, ()=>{
        homeworkPage.getBuildDropdown().select(`${build}`)
        homeworkPage.getOperationDropdown().select('Concatenate')
        homeworkPage.getIntegersOnlyCheckbox().should("not.be.visible")         
    })
})