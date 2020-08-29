import Calculator from '../../modules/calculator.js'
/// <reference types="cypress" />

var calculator = new Calculator()
var calculatorBuild = '0'
var field1 = '#number1Field'
var field2 = '#number2Field'
var operation = '#selectOperationDropdown'
var integer = '#integerSelect'
var clear = '#clearButton'
//----------------------------------------
//automation
//---------------------------------------
  
it('start', ()=>{       
    calculator.goToCalculator()
    calculator.selectBuild('4')   
    // cy.get(integer).uncheck()
    cy.get(integer).should('not.be.disabled')
})

// it('start', ()=>{       
//     calculator.goToCalculator()
//     calculator.selectBuild('0')
//     cy.get(field1).type('2')
//     cy.get(field2).type('4')
//     cy.get('#selectOperationDropdown').select('4')
//     // cy.get(integer).check()
//     calculator.calculate()    
// })

//----------------------------------------
//flaws
//---------------------------------------
  

// it.only('start', ()=>{       
//     calculator.goToCalculator()
//     calculator.selectBuild('1')
//     cy.get(field1).type('ąčę')
//     cy.get(field2).type('5')
//     cy.get('#selectOperationDropdown').select('2')
  
//     calculator.calculate()    
// })



// it.only('start', ()=>{       
//     calculator.goToCalculator()
//     calculator.selectBuild('1')
//     cy.get(field1).type('ąčę')
//     cy.get(field2).type('5')
//     cy.get('#selectOperationDropdown').select('4')
  
//     calculator.calculate()    
// })

// it.only('start', ()=>{       
//     calculator.goToCalculator()
//     calculator.selectBuild('9')
//     cy.get(field1).type('2')
//     cy.get(field2).type('541665848415418415')
//     cy.get('#selectOperationDropdown').select('1')
  
//     calculator.calculate()    
// })

// it.only('start', ()=>{       
//     calculator.goToCalculator()
//     calculator.selectBuild('8')
//     cy.get(field1).type('2')
//     cy.get(field2).type('12345f1523')
//     cy.get('#selectOperationDropdown').select('1')
//     cy.get(integer).check()
//     calculator.calculate() 
    
// })

// //THIS SUCKS
// it('start', ()=>{       
//     calculator.goToCalculator()
//     calculator.selectBuild('0')
//     cy.get(field1).type('3')
//     cy.get(field2).type('4')
//     cy.get('#selectOperationDropdown').select('4')
//     // cy.get(integer).check()
//     calculator.calculate()
//     cy.wait(3000)
//     cy.get('#numberAnswerField').should('equal', '34')
//     // cy.get('#numberAnswerField').should('not.be.empty')
//     // cy.get('#numberAnswerField').should('equal', '34')
    
// })