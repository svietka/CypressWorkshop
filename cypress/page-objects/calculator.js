/**
 * Available operations enum
 */
export const Operations = {
  Add: "0",
  Subtract: "1",
  Multiply: "2",
  Divide: "3",
  Concatenate: "4",
};

/**
 * Calculator helper based on operations enum to validate results
 */
const calculator = {
  [Operations.Add](num1, num2) {
    return num1 + num2;
  },
  [Operations.Subtract](num1, num2) {
    return num1 - num2;
  },
  [Operations.Multiply](num1, num2) {
    return num1 * num2;
  },
  [Operations.Divide](num1, num2) {
    return num1 / num2;
  },
  [Operations.Concatenate](num1, num2) {
    return `${num1}${num2}`;
  },
};

/**
 * Calculator page object
 */
class CalculatorPage {
  visit() {
    cy.visit("/BasicCalculator");
  }

  // Getters
  getAnswer() {
    return cy.get("#numberAnswerField");
  }

  getError() {
    return cy.get("#errorMsgField");
  }

  getBuild() {
    return cy.get("#selectBuild");
  }

  getNumber1() {
    return cy.get("#number1Field");
  }

  getNumber2() {
    return cy.get("#number2Field");
  }

  getOperation() {
    return cy.get("#selectOperationDropdown");
  }

  getCalculateButton() {
    return cy.get("#calculateButton");
  }

  getIntegersOnly() {
    return cy.get("#integerSelect");
  }

  getClearButton() {
    return cy.get("#clearButton");
  }

  // Setters
  selectBuild(build) {
    this.getBuild().select(build).should("have.value", build);
  }

  setNumber1(num) {
    this.getNumber1().clear().type(num).should("have.value", num);
  }

  setNumber2(num) {
    this.getNumber2().clear().type(num).should("have.value", num);
  }

  selectOperation(operation) {
    this.getOperation().select(operation).should("have.value", operation);
  }

  checkIntegersOnly() {
    this.getIntegersOnly().check().should("be.checked");
  }

  uncheckIntegersOnly() {
    this.getIntegersOnly().uncheck().should("not.be.checked");
  }

  calculate() {
    this.getCalculateButton().click();
  }

  clear() {
    this.getClearButton().click();
  }

  // Validators
  validateAnswer(num1, num2, operation, integersOnly = false) {
    const result = integersOnly
      ? parseInt(calculator[operation](num1, num2)) // Parse integer if that is expected result
      : calculator[operation](num1, num2);

    this.getAnswer().should("have.value", result);
    this.getError().should("not.be.visible");
  }

  validateError(num1, num2, operation) {
    this.getError().should("be.visible");
    if (isNaN(num1)) {
      this.getError().should("have.text", "Number 1 is not a number");
    } else if (isNaN(num2)) {
      this.getError().should("have.text", "Number 2 is not a number");
    } else if (operation === Operations.Divide && num2 === 0) {
      this.getError().should("have.text", "Divide by zero error!");
    }
  }
}

export default CalculatorPage;
