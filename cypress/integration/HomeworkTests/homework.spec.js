/// <reference types="cypress" />
import Calculator from '../../page_objects/calculator.js'

/* trumpas README intro

Paleidus visus testus, rezultatas buvo panasus i (dar dariau pokyciu po to, tai skaiciai nera 100% tikslus):
+- Passed: 200, 
+- Failed: 120
pazymeti testai duoda Passed:65, Failed:34

stengiausi istestuoti viska, tai manau taip ir padariau, tik vienintelis dalykas ko nepadariau (del to 5 build'as visur praeina),
tai neradau kaip teisingai patikrinti ar elementas disable'intas, ar pasleptas. Taip butu galima detaliau rasti viena kita klaida ir tuo paciu rasti bug'a penktame build'e.
268 eilutej pazymejau testa, kuris turetu pagal mane nepraeiti, bet praeina? Logiskai, jis neturetu galeti click'inti ant disable'into elemento, ne?
*/

const calculator = new Calculator();
const builds = [ '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operations = ['Add', 'Subtract', 'Multiply', 'Divide']


beforeEach('executes before each test',()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator");
})

describe('all ADDITION tests with every build version', () => {
    builds.forEach((builds) => {
        
        it('addition with POSITIVE FLOAT values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('6.2');
            calculator.getSecondNumberField().type('9.3');
            calculator.getOperationDropdown().select('Add');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '15.5');
        })
        
        it.only('addition with NEGATIVE FLOAT values build: ' + builds, ()=>{ 
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('-6.2');
            calculator.getSecondNumberField().type('-9.3');
            calculator.getOperationDropdown().select('Add');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '-15.5');
        })

        it('addition with POSITIVE INTEGER values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('6.2');
            calculator.getSecondNumberField().type('9.3');
            calculator.getOperationDropdown().select('Add');
            calculator.getIntegersCheckbox().check();
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '15');
        })

        it('addition with NEGATIVE INTEGER values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('-6.2');
            calculator.getSecondNumberField().type('-9.3');
            calculator.getOperationDropdown().select('Add');
            calculator.getIntegersCheckbox().check();
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '-15');
        })


    })
})


describe('all SUBTRACTION tests with every build version', () => {
    builds.forEach((builds) => {
        
        it('subtraction with POSITIVE FLOAT values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('6.2');
            calculator.getSecondNumberField().type('9.4');
            calculator.getOperationDropdown().select('Subtract');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '-3.2');
        })
        
        it('subtraction with NEGATIVE FLOAT values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('-6.2');
            calculator.getSecondNumberField().type('-9.4');
            calculator.getOperationDropdown().select('Subtract');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '3.2');
        })

        it('subtraction with POSITIVE INTEGER values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('6.2');
            calculator.getSecondNumberField().type('9.4');
            calculator.getOperationDropdown().select('Subtract');
            calculator.getIntegersCheckbox().check();
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '-3');
        })

        it('subtraction with NEGATIVE INTEGER values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('-6.2');
            calculator.getSecondNumberField().type('-9.4');
            calculator.getOperationDropdown().select('Subtract');
            calculator.getIntegersCheckbox().check();
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '3');
        })


    })
})

describe('all MULTIPLICATION tests with every build version', () => {
    builds.forEach((builds) => {
        
        it('multiplication with POSITIVE FLOAT values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('6.2');
            calculator.getSecondNumberField().type('9.5');
            calculator.getOperationDropdown().select('Multiply');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '58.9');
        })
        
        it('multiplication with NEGATIVE FLOAT values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('-6.2');
            calculator.getSecondNumberField().type('-9.5');
            calculator.getOperationDropdown().select('Multiply');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '58.9');
        })

        it('multiplication with POSITIVE INTEGER values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('6.2');
            calculator.getSecondNumberField().type('9.5');
            calculator.getOperationDropdown().select('Multiply');
            calculator.getIntegersCheckbox().check();
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '58');
        })

        it('multiplication with NEGATIVE INTEGER values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('-6.2');
            calculator.getSecondNumberField().type('-9.5');
            calculator.getOperationDropdown().select('Multiply');
            calculator.getIntegersCheckbox().check();
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '58');
        })

        it('multiplication with ONE NEGATIVE ONE POSITIVE INTEGER values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('6.2');
            calculator.getSecondNumberField().type('-9.5');
            calculator.getOperationDropdown().select('Multiply');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '-58.9');
        })


    })
})


describe('all DIVISION tests with every build version', () => {
    builds.forEach((builds) => {
        
        it('division with POSITIVE FLOAT values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('15.6');
            calculator.getSecondNumberField().type('2.5');
            calculator.getOperationDropdown().select('Divide');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '6.24');
        })
        
        it('division with NEGATIVE FLOAT values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('-15.6');
            calculator.getSecondNumberField().type('-2.5');
            calculator.getOperationDropdown().select('Divide');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '6.24');
        })

        it.only('division with POSITIVE INTEGER values build: ' + builds, ()=>{ 
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('15.6');
            calculator.getSecondNumberField().type('2.5');
            calculator.getOperationDropdown().select('Divide');
            calculator.getIntegersCheckbox().check();
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '6');
        })

        it('division with NEGATIVE INTEGER values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('-15.6');
            calculator.getSecondNumberField().type('-2.5');
            calculator.getOperationDropdown().select('Divide');
            calculator.getIntegersCheckbox().check();
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '6');
        })

        it('division with ONE NEGATIVE ONE POSITIVE INTEGER values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('15.6');
            calculator.getSecondNumberField().type('-2.5');
            calculator.getOperationDropdown().select('Divide');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '-6.24');
        })


    })
})


describe('Tests with invalid/empty values + "Clear" button tests using ALL BUILDS and using EVERY OPERATION EXCEPT CONCATENATE', () => {
    //ciklas kiekvienam build'ui ir to ciklo viduje dar vienas ciklas kiekvienai aritmetinei operacijai, t.y daugybai, dalybai, atimciai ir sudeciai
    builds.forEach((builds) => {
        operations.forEach((operations) => {
        
            it.only(operations + ' with EMPTY values build: ' + builds, ()=>{ 
                calculator.getBuildDropdown().select(builds);
                calculator.getOperationDropdown().select(operations);
                calculator.clickCalculateButton();
                //visi veiksmai galimi su tusciomis reiksmemis, tik ne dalyba is nulio, del to naudojame cia if, kad ja atskirai apdorotume
                if (operations != 'Divide') calculator.getAnswerField().should('have.value', '0'); 
                else {
                    calculator.getAnswerField().should('have.value', '');
                    calculator.getErrorMessage().contains('Divide by zero error!');
                }
            })

            it.only(operations + ' with FIRST INVALID NUMBER + testing "Clear" button build: ' + builds, ()=>{       
                calculator.getBuildDropdown().select(builds);
                calculator.getFirstNumberField().type('.');
                calculator.getSecondNumberField().type('1.1');
                calculator.getOperationDropdown().select(operations);
                calculator.clickCalculateButton();
                calculator.getAnswerField().should('have.value', '');
                calculator.getErrorMessage().contains('Number 1 is not a number');
                calculator.clickClearButton();
                calculator.getErrorMessage().should('not.be.visible');
                calculator.getAnswerField().should('have.value', '');
            })
    
            it(operations + ' with SECOND INVALID NUMBER + testing "Clear" button build: ' + builds, ()=>{       
                calculator.getBuildDropdown().select(builds);
                calculator.getFirstNumberField().type('1.1');
                calculator.getSecondNumberField().type('.');
                calculator.getOperationDropdown().select(operations);
                calculator.clickCalculateButton();
                calculator.getAnswerField().should('have.value', '');
                calculator.getErrorMessage().contains('Number 2 is not a number');
                calculator.clickClearButton();
                calculator.getErrorMessage().should('not.be.visible');
            })

            it(operations + ' with FIRST INVALID NUMBER + testing "Clear" button build: ' + builds, ()=>{  //sitas testas turetu fail'inti ties 5'u build'u?
                calculator.clickClearButton();
            })
        })
    })
})

describe('all (including empty values) CONCATENATION tests with every build version', () => {
    builds.forEach((builds) => {
        
        it('concatenation with random text build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('M1 n4m3 ');
            calculator.getSecondNumberField().type('1s t3st');
            calculator.getOperationDropdown().select('Concatenate');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', 'M1 n4m3 1s t3st');
        })
        
        it('concatenation with empty values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getOperationDropdown().select('Concatenate');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '');
        })

        it.only('concatenation with uncommon symbol values build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('༼ つ ◕_◕ ༽つ');
            calculator.getSecondNumberField().type(' (◕‿◕✿)');
            calculator.getOperationDropdown().select('Concatenate');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '༼ つ ◕_◕ ༽つ (◕‿◕✿)');
        })

        it('concatenation with MAXIMUM AMOUNT OF SYMBOLS build: ' + builds, ()=>{
            calculator.getBuildDropdown().select(builds);
            calculator.getFirstNumberField().type('1111111111');
            calculator.getSecondNumberField().type('1111111111');
            calculator.getOperationDropdown().select('Concatenate');
            calculator.clickCalculateButton();
            calculator.getAnswerField().should('have.value', '11111111111111111111');
        })

        //nepavyko man isgauti testo, kuris patikrintu ar tas checkbox'as active ar ne

        /*it('Checking if "integers" checkbox is active build: ' + builds, ()=>{ 
           var a = document.getElementById(calculator.getIntegersCheckbox());
            if ( a.disabled ) assert.fail();
            
        })*/


    })
})
