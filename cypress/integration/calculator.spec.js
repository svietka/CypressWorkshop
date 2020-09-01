/// <reference types="cypress" />
import CalculatorPage, { Operations } from "../page-objects/calculator";

const calculator = new CalculatorPage();

const builds = Array.from({ length: 10 }, (x, i) => i.toString()); // Make array of strings from "0" to "9"

const numberPairs = [
  {
    num1: 5.15,
    num2: 5.599,
  },
  {
    num1: 0,
    num2: 53,
  },
  {
    num1: -128,
    num2: -543,
  },
  {
    num1: 1.5,
    num2: -12.8,
  },
  {
    num1: -14,
    num2: 58.624,
  },
];

const invalidNumberPairs = [
  {
    num1: "a",
    num2: 1.2,
  },
  {
    num1: 2.1,
    num2: "b",
  },
  {
    num1: "a",
    num2: "b",
  },
];

// TODO: Move repetitive test code to reusable functions
describe("Basic calculator", () => {
  beforeEach(() => {
    calculator.visit();
  });

  builds.forEach((build) => {
    /**
     * Happy path scenario
     */
    context(`Build ${build} - HP`, () => {
      beforeEach(() => {
        calculator.selectBuild(build);
      });

      it.only("should have inputs and buttons enabled", () => {
        calculator.getNumber1().should("be.enabled");
        calculator.getNumber2().should("be.enabled");
        calculator.getOperation().should("be.enabled");
        calculator.getCalculateButton().should("be.enabled");
        calculator.getIntegersOnly().should("be.enabled");
        calculator.getClearButton().should("be.enabled");
      });

      it("should add valid numbers", () => {
        numberPairs.forEach((numberPair) => {
          calculator.setNumber1(numberPair.num1);
          calculator.setNumber2(numberPair.num2);
          calculator.selectOperation(Operations.Add);
          calculator.uncheckIntegersOnly();
          calculator.calculate();
          calculator.validateAnswer(numberPair.num1, numberPair.num2, Operations.Add);
          calculator.checkIntegersOnly();
          calculator.validateAnswer(numberPair.num1, numberPair.num2, Operations.Add, true);
        });
      });

      it("should substract valid numbers", () => {
        numberPairs.forEach((numberPair) => {
          calculator.setNumber1(numberPair.num1);
          calculator.setNumber2(numberPair.num2);
          calculator.selectOperation(Operations.Subtract);
          calculator.uncheckIntegersOnly();
          calculator.calculate();
          calculator.validateAnswer(numberPair.num1, numberPair.num2, Operations.Subtract);
          calculator.checkIntegersOnly();
          calculator.validateAnswer(numberPair.num1, numberPair.num2, Operations.Subtract, true);
        });
      });

      it("should multiply valid numbers", () => {
        numberPairs.forEach((numberPair) => {
          calculator.setNumber1(numberPair.num1);
          calculator.setNumber2(numberPair.num2);
          calculator.selectOperation(Operations.Multiply);
          calculator.uncheckIntegersOnly();
          calculator.calculate();
          calculator.validateAnswer(numberPair.num1, numberPair.num2, Operations.Multiply);
          calculator.checkIntegersOnly();
          calculator.validateAnswer(numberPair.num1, numberPair.num2, Operations.Multiply, true);
        });
      });

      it.only("should divide valid numbers", () => {
        numberPairs.forEach((numberPair) => {
          calculator.setNumber1(numberPair.num1);
          calculator.setNumber2(numberPair.num2);
          calculator.selectOperation(Operations.Divide);
          calculator.uncheckIntegersOnly();
          calculator.calculate();
          calculator.validateAnswer(numberPair.num1, numberPair.num2, Operations.Divide);
          calculator.checkIntegersOnly();
          calculator.validateAnswer(numberPair.num1, numberPair.num2, Operations.Divide, true);
        });
      });

      it("should concatenate numbers", () => {
        numberPairs.forEach((numberPair) => {
          calculator.setNumber1(numberPair.num1);
          calculator.setNumber2(numberPair.num2);
          calculator.selectOperation(Operations.Concatenate);
          calculator.calculate();
          calculator.validateAnswer(numberPair.num1, numberPair.num2, Operations.Concatenate);
          calculator.getIntegersOnly().should("not.be.visible");
          calculator.getError().should("not.be.visible");
        });
      });

      it.only("should concatenate strings", () => {
        const num1 = "abc";
        const num2 = 123;
        calculator.setNumber1(num1);
        calculator.setNumber2(num2);
        calculator.selectOperation(Operations.Concatenate);
        calculator.calculate();
        calculator.validateAnswer(num1, num2, Operations.Concatenate);
        calculator.getIntegersOnly().should("not.be.visible");
        calculator.getError().should("not.be.visible");
      });

      it("should clear answer input and integers only checkbox", () => {
        const num1 = 1;
        const num2 = 2;
        calculator.setNumber1(num1);
        calculator.setNumber2(num2);
        calculator.selectOperation(Operations.Add);
        calculator.calculate();
        calculator.validateAnswer(num1, num2, Operations.Add);
        calculator.checkIntegersOnly();
        calculator.clear();
        calculator.getAnswer().should("not.have.value");
        calculator.getIntegersOnly().should("not.be.checked");
      });
    });

    /**
     * Negative flow scenario
     */
    context(`Build ${build} - NF`, () => {
      beforeEach(() => {
        calculator.selectBuild(build);
      });

      it.only("should show error on add operation with invalid numbers", () => {
        invalidNumberPairs.forEach((numberPair) => {
          calculator.setNumber1(numberPair.num1);
          calculator.setNumber2(numberPair.num2);
          calculator.selectOperation(Operations.Add);
          calculator.uncheckIntegersOnly();
          calculator.calculate();
          calculator.validateError(numberPair.num1, numberPair.num2);
          calculator.checkIntegersOnly();
          calculator.validateError(numberPair.num1, numberPair.num2);
        });
      });

      it("should show error on subtract operation with invalid numbers", () => {
        invalidNumberPairs.forEach((numberPair) => {
          calculator.setNumber1(numberPair.num1);
          calculator.setNumber2(numberPair.num2);
          calculator.selectOperation(Operations.Subtract);
          calculator.uncheckIntegersOnly();
          calculator.calculate();
          calculator.validateError(numberPair.num1, numberPair.num2);
          calculator.checkIntegersOnly();
          calculator.validateError(numberPair.num1, numberPair.num2);
        });
      });

      it("should show error on multiply operation with invalid numbers", () => {
        invalidNumberPairs.forEach((numberPair) => {
          calculator.setNumber1(numberPair.num1);
          calculator.setNumber2(numberPair.num2);
          calculator.selectOperation(Operations.Multiply);
          calculator.uncheckIntegersOnly();
          calculator.calculate();
          calculator.validateError(numberPair.num1, numberPair.num2);
          calculator.checkIntegersOnly();
          calculator.validateError(numberPair.num1, numberPair.num2);
        });
      });

      it("should show error on divide operation with invalid numbers", () => {
        invalidNumberPairs.forEach((numberPair) => {
          calculator.setNumber1(numberPair.num1);
          calculator.setNumber2(numberPair.num2);
          calculator.selectOperation(Operations.Divide);
          calculator.uncheckIntegersOnly();
          calculator.calculate();
          calculator.validateError(numberPair.num1, numberPair.num2, Operations.Divide);
          calculator.checkIntegersOnly();
          calculator.validateError(numberPair.num1, numberPair.num2, Operations.Divide);
        });
      });

      it.only("should show error on divide operation by zero", () => {
        const num1 = 1;
        const num2 = 0;
        calculator.setNumber1(num1);
        calculator.setNumber2(num2);
        calculator.selectOperation(Operations.Divide);
        calculator.uncheckIntegersOnly();
        calculator.calculate();
        calculator.validateError(num1, num2, Operations.Divide);
      });

      it("should clear integers only checkbox and error message", () => {
        const num1 = "a";
        const num2 = "b";
        calculator.setNumber1(num1);
        calculator.setNumber2(num2);
        calculator.selectOperation(Operations.Add);
        calculator.calculate();
        calculator.getError().should("be.visible");
        calculator.checkIntegersOnly();
        calculator.clear();
        calculator.getError().should("not.be.visible");
        calculator.getIntegersOnly().should("not.be.checked");
      });
    });
  });
});
