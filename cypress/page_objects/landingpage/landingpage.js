class LandingPage{
    firstNumberField = '#number1Field';
    secondNumberField = '#number2Field';
    buildDropdown = '#selectBuild';
    calculateButton = '#calculateButton';
    clearButton = '#clearButton';
    operations = '#selectOperationDropdown';
    integerSelect = '#integerSelect';

    getFirstNumberField(){
        return cy.get(this.firstNumberField);
    }

    getSecondNumberField(){
        return cy.get(this.secondNumberField);
    }

    getBuildDropdown(){
        return cy.get(this.buildDropdown);
    }

    getBuildDropdownOptions(){
        return cy.get(this.buildDropdown).children();
    }

    getBuildDropdownOptions1(){
        console.log(cy.document().getElementById(this.buildDropdown).getElementsByTagName('option'))
         cy.document().getElementById(this.buildDropdown).getElementsByTagName('option').array.map(element =>{
            return element.value();
        })
    }

    getCalculateButton(){
        return cy.get(this.calculateButton);    

    }

    getClearButton(){
        return cy.get(this.clearButton);    

    }

    getOperations(){
        return cy.get(this.operations).children;
    }

    getIntegerSelect(){
        return cy.get(this.integerSelect);
    }


}

export default LandingPage;