import Calculator from '../../modules/calculator.js'
/// <reference types="cypress" />

var calculator = new Calculator()
var calculatorTestBuilds = ['Prototype','1','2','3','4','5','6','7','8','9']
var field1 = '#number1Field'
var field2 = '#number2Field'
var operation = '#selectOperationDropdown'
var integer = '#integerSelect'
var clear = '#clearButton'
var calcform = '#calcForm'
//----------------------------------------
//automation
//---------------------------------------


describe('Test 1. Checks between prototype and other builds for existing and interactable field1 & field 2', () => {
    calculatorTestBuilds.forEach((build) => {        
        it.only('goes to build: ' + build, () => {
            calculator.goToCalculator()
            calculator.selectBuild(build)  

            cy.log('field1')
            cy.get(field1).should('be.visible') 
            cy.get(field1).should('not.be.disabled')
            cy.get(field1).type('1')
            cy.get(field1).clear()
            
            cy.log('field2')
            cy.get(field2).should('be.visible') 
            cy.get(field2).should('not.be.disabled')
            cy.get(field2).type('1')
            cy.get(field2).clear()
            
        })
    })
})


describe('Test 2. Tests functionality of integer checkbox', () => {
    calculatorTestBuilds.forEach((build) => {
        it.only('goes to build: ' + build, () => {     
            calculator.goToCalculator()
            calculator.selectBuild(build)
                
                cy.get(integer).should('be.visible')
                cy.get(integer).should('not.be.disabled')
                
                cy.get(integer).check()
                cy.get(integer).uncheck()
        })
    })
})


describe('Test3. Tests "Concatenate" operation', () => {
    calculatorTestBuilds.forEach((build) => {
        it.only('goes to build: ' + build, () => {       
            calculator.goToCalculator()
            calculator.selectBuild(build)
                cy.get(field1).type('2')
                cy.get(field2).type('4')
            cy.get('#selectOperationDropdown').select('4')
            calculator.calculate()
                cy.wait(3000)
                cy.get('#numberAnswerField').should('be.visible')
                cy.get('#numberAnswerField').should('have.value', '24')

    })
  })
})  


describe('Test4. Checking for invalid input errors in field 1', () => {
    calculatorTestBuilds.forEach((build) => {
        it.only('goes to build: ' + build, () => {        
            calculator.goToCalculator()
            calculator.selectBuild(build)
                cy.get(field1).type('ąčę')
                cy.get(field2).type('5')
            cy.get('#selectOperationDropdown').select('2')
            calculator.calculate()    
            cy.wait(3000)
            cy.get('#errorMsgField').should('be.visible')
            cy.get('#errorMsgField').should('have.text', 'Number 1 is not a number')
        })
    })
})


describe('Test 5. Tests for maximum input value errors', () => {
    calculatorTestBuilds.forEach((build) => {
        it('goes to build: ' + build, () => {        
            calculator.goToCalculator()
            calculator.selectBuild(build)
                cy.get(field1).type('2')
                cy.get(field2).type('541665848415418415')
                cy.get('#selectOperationDropdown').select('1')
            calculator.calculate()    
        })
    })
})


describe('Test 6. Tests for invalid input in Field2', () => {
    calculatorTestBuilds.forEach((build) => {
        it('goes to build: ' + build, () => {       
            calculator.goToCalculator()
            calculator.selectBuild(build)
                cy.get(field1).type('2')
                cy.get(field2).type('12345f1523')
                cy.get('#selectOperationDropdown').select('1')
            calculator.calculate() 
                cy.get('#errorMsgField').should('have.text', 'Number 2 is not a number')
            })
    })
})


describe('Test 7. Testing "Subtract" function', () => {
    calculatorTestBuilds.forEach((build) => {
        it.only('goes to build: ' + build, () => {     
            calculator.goToCalculator()
            calculator.selectBuild(build)
                cy.get(field1).type('3')
                cy.get(field2).type('4')
                cy.get('#selectOperationDropdown').select('1')
            calculator.calculate()
                cy.wait(3000)
                cy.get('#numberAnswerField').should('have.value', '-1')
            
        })
    })
})

describe('Test 8. Testing "Add" function', () => {
    calculatorTestBuilds.forEach((build) => {
        it('goes to build: ' + build, () => {      
            calculator.goToCalculator()
            calculator.selectBuild(build)
                cy.get(field1).type('3')
                cy.get(field2).type('4')
                cy.get('#selectOperationDropdown').select('0')
            calculator.calculate()
                cy.wait(3000)
                cy.get('#numberAnswerField').should('have.value', '7')
            
        })
    })
})

describe('Test 9. Testing "Multiply" function', () => {
    calculatorTestBuilds.forEach((build) => {
        it('goes to build: ' + build, () => {     
            calculator.goToCalculator()
            calculator.selectBuild(build)
                cy.get(field1).type('2')
                cy.get(field2).type('3')
                cy.get('#selectOperationDropdown').select('2')
            calculator.calculate()
                cy.wait(3000)
                cy.get('#numberAnswerField').should('have.value', '6')
            
        })
    })
})

describe('Test 10. Testing "Divide" function', () => {
    calculatorTestBuilds.forEach((build) => {
        it('goes to build: ' + build, () => {     
            calculator.goToCalculator()
            calculator.selectBuild(build)
                cy.get(field1).type('60')
                cy.get(field2).type('2')
                cy.get('#selectOperationDropdown').select('3')
            calculator.calculate()
                cy.wait(3000)
                cy.get('#numberAnswerField').should('have.value', '30')
            
        })
    })
})