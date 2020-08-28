class Calculator {
    
    initialPage = "https://testsheepnz.github.io/BasicCalculator";
    buildDropDownList = '#selectBuild';
    firstNumberField = '#number1Field';
    secondNumberField = '#number2Field';
    operationDropDownList = '#selectOperationDropdown';
    calculateButton = '#calculateButton';
    answerField = '#numberAnswerField';
    integerSelection = '#integerSelect';
    clearButton = '#clearButton';
    errorField = '#errorMsgField';

    visitInitialPage() {
        return cy.visit(this.initialPage);
    }

    getBuildDropDownList() {
        return cy.get(this.buildDropDownList);
    }

    getFirstNumberField() {
        return cy.get(this.firstNumberField);
    }

    getSecondNumberField() {
        return cy.get(this.secondNumberField);
    }

    getOperationDropDownList() {
        return cy.get(this.operationDropDownList);
    }

    getCalculateButton() {
        return cy.get(this.calculateButton);
    }

    getAnswerField() {
        return cy.get(this.answerField);
    }

    getIntegerSelection() {
        return cy.get(this.integerSelection);
    }

    getClearButton() {
        return cy.get(this.clearButton);
    }

    getErrorField() {
        return cy.get(this.errorField);
    }
}

export default Calculator