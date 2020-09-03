import LandingPage from "../../page_objects/landingpage/landingpage.js";
import * as utils from "../../utility_functions/utils.js";
/// <reference types="cypress" />

let landingPage = new LandingPage();
const builds = [...Array(10).keys()].map(String);
const mathOperations = landingPage.mathOperationTitles;
const randomNumbers = [
  {
    number: utils.generateRandomPositiveInt, //dataFunction
    numberType: "positiveInteger"
  },
  {
    number: utils.generateRandomNegativeInt,
    numberType: "negativeInteger"
  },
  {
    number: utils.generateRandomPositiveFloat,
    numberType: "positiveFloat"
  },
  {
    number: utils.generateRandomNegativeFloat,
    numberType: "negativeFloat"
  },
  { number: () => 0, numberType: "zero" },
  {
    number: utils.generateRandomLetter,
    numberType: "letter"
  }
];

beforeEach("", () => {
  cy.visit("/BasicCalculator");
});

builds.forEach(build => {
  describe(`Build: ${build}`, () => {
    it(`User can click 'Clear' button`, () => {
      landingPage.getBuildDropdown().select(build);
      landingPage.getClearButton().should("not.be.disabled");
    });

    it(`User can choose 'Integers only'`, () => {
      landingPage.getBuildDropdown().select(build);
      let ops = landingPage.getOperationsDropdown();
      ops.each(op => {
        if (op.value !== landingPage.concatTitle) {
          ops.select(op.val());
          landingPage.getIntegerSelect().should("not.be.disabled");
        }
      });
    });

    describe("Inputs should only operate on digits in mathematical operations", () => {
      it(`First number input should only operate on digits`, () => {
        let seed = 100;
        landingPage.getBuildDropdown().select(build);

        landingPage.getFirstNumberField().type(utils.generateRandomLetter());
        landingPage
          .getSecondNumberField()
          .type(utils.generateRandomPositiveInt(seed));

        mathOperations.forEach(op => {
          landingPage.getOperationsDropdown().select(op);
          landingPage.getCalculateButton().click();
          landingPage.getErrorMessageField().should("be.visible");
        });
      });

      it(`Second number input should only operate on digits`, () => {
        let seed = 100;
        landingPage.getBuildDropdown().select(build);

        landingPage
          .getFirstNumberField()
          .type(utils.generateRandomPositiveInt(seed));
        landingPage.getSecondNumberField().type(utils.generateRandomLetter());

        mathOperations.forEach(op => {
          landingPage.getOperations().select(op);
          console.log(op);

          landingPage.getCalculateButton().click();
          landingPage.getErrorMessageField().should("be.visible");
        });
      });
    });

    describe(`Should perform addition correctly`, () => {
      randomNumbers.forEach(testCase => {
        it.only(`Can perform addition correctly with ${testCase.numberType} `, () => {
          testCase.numberType === "letter"
          let seed = 100;
          let precision = 5;

          let firstNumber =
            testCase.numberType === "letter"
              ? testCase.number()
              : parseFloat(testCase.number(seed).toPrecision(precision));
          let secondNumber =
            testCase.numberType === "letter"
              ? testCase.number()
              : parseFloat(testCase.number(seed).toPrecision(precision));

          let firstNumber = parseFloat(
            testCase.number(seed).toPrecision(precision)
          );
          let secondNumber = parseFloat(
            testCase.number(seed).toPrecision(precision)
          );

          let answer = firstNumber + secondNumber;

          landingPage.getBuildDropdown().select(build);
          landingPage.getFirstNumberField().type(firstNumber);
          landingPage.getSecondNumberField().type(secondNumber);
          landingPage.getOperationsDropdown().select("Add");
          landingPage.getCalculateButton().click();

          landingPage.getAnswerField().should("have.value", answer);
        });
      });
    });

    describe(`Should perform subtraction correctly`, () => {
      randomNumbers.forEach(testCase => {
        it.only(`Can perform subtraction correctly with ${testCase.numberType} `, () => {
          let seed = 100;
          let precision = 5;

          let firstNumber =
            testCase.numberType === "letter"
              ? testCase.number()
              : parseFloat(testCase.number(seed).toPrecision(precision));
          let secondNumber =
            testCase.numberType === "letter"
              ? testCase.number()
              : parseFloat(testCase.number(seed).toPrecision(precision));

          let answer = firstNumber - secondNumber;

          landingPage.getBuildDropdown().select(build);
          landingPage.getFirstNumberField().type(firstNumber);
          landingPage.getSecondNumberField().type(secondNumber);
          landingPage.getOperationsDropdown().select("Subtract");
          landingPage.getCalculateButton().click();

          landingPage.getAnswerField().should("have.value", answer);
        });
      });
    });

    describe(`Should perform multiplication correctly`, () => {
      randomNumbers.forEach(testCase => {
        it.only(`Can perform multiplication correctly with ${testCase.numberType} `, () => {
          let seed = 100;
          let precision = 5;
          let firstNumber =
            testCase.numberType === "letter"
              ? testCase.number()
              : parseFloat(testCase.number(seed).toPrecision(precision));
          let secondNumber =
            testCase.numberType === "letter"
              ? testCase.number()
              : parseFloat(testCase.number(seed).toPrecision(precision));

          let answer = firstNumber * secondNumber;

          landingPage.getBuildDropdown().select(build);
          landingPage.getFirstNumberField().type(firstNumber);
          landingPage.getSecondNumberField().type(secondNumber);
          landingPage.getOperationsDropdown().select("Multiply");
          landingPage.getCalculateButton().click();

          landingPage.getAnswerField().should("have.value", answer);
        });
      });
    });

    describe(`Should perform division correctly`, () => {
      randomNumbers
        //.concat({
        // number: () => 0,
        //numberType: "zero"
        //})
        .forEach(testCase => {
          it.only(`Can perform division correctly with ${testCase.numberType} `, () => {
            let seed = 100;
            let precision = 5;
            let firstNumber =
            testCase.numberType === "letter"
              ? testCase.number()
              : parseFloat(testCase.number(seed).toPrecision(precision));
          let secondNumber =
            testCase.numberType === "letter"
              ? testCase.number()
              : parseFloat(testCase.number(seed).toPrecision(precision));

            landingPage.getBuildDropdown().select(build);
            landingPage.getFirstNumberField().type(firstNumber);
            landingPage.getSecondNumberField().type(secondNumber);
            landingPage.getOperationsDropdown().select("Divide");
            landingPage.getCalculateButton().click();

            if (secondNumber === 0) {
              landingPage
                .getErrorMessageField()
                .contains(landingPage.divideByZeroError);
            } else {
              let answer = firstNumber / secondNumber;

              landingPage.getAnswerField().should("have.value", answer);
            }
          });
        });
    });

    describe(`Should perform concatenation correctly`, () => {
      randomNumbers.forEach(testCase => {
        it.only(`Can perform concat correctly with ${testCase.numberType} `, () => {
          let seed = 100;
          let precision = 5;
          let firstNumber =
            testCase.numberType === "letter"
              ? testCase.number()
              : parseFloat(testCase.number(seed).toPrecision(precision));
          let secondNumber =
            testCase.numberType === "letter"
              ? testCase.number()
              : parseFloat(testCase.number(seed).toPrecision(precision));

          landingPage.getBuildDropdown().select(build);
          landingPage.getFirstNumberField().type(firstNumber);
          landingPage.getSecondNumberField().type(secondNumber);

          let answer = firstNumber.toString().concat(secondNumber.toString());

          landingPage.getOperationsDropdown().select(landingPage.concatTitle);
          landingPage.getCalculateButton().click();

          landingPage.getAnswerField().should("have.value", answer);
        });
      });
    });
  });
});
