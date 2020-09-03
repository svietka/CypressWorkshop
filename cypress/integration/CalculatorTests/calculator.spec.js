import LandingPage from '../../page_objects/landingpage/landingpage.js';
import * as utils from '../../utility_functions/utils.js';
/// <reference types="cypress" />

let landingPage = new LandingPage();

const builds = [...Array(10).keys()].map(String);
const stringType = 'string';
const positiveIntType = 'positive Integer';
const negativeIntType = 'negative Integer';
const positiveFloatType = 'positive Float';
const negativeFloatType = 'negative Float';
const zeroType = 'zero';

const randomData = [
  {
    dataGenerator: utils.generateRandomPositiveInt,
    dataType: positiveIntType
  },
  {
    dataGenerator: utils.generateRandomNegativeInt,
    dataType: negativeIntType
  },
  {
    dataGenerator: utils.generateRandomPositiveFloat,
    dataType: positiveFloatType
  },
  {
    dataGenerator: utils.generateRandomNegativeFloat,
    dataType: negativeFloatType
  },
  { dataGenerator: () => 0, dataType: zeroType },
  {
    dataGenerator: utils.generateRandomLetter,
    dataType: stringType
  }
];

beforeEach('Visits Basic Calculator landing page', () => {
  cy.visit('/BasicCalculator');
});

builds.forEach(build => {
  describe(`Build: ${build}`, () => {
    it(`User can click 'Clear' button`, () => {
      landingPage.getBuildDropdown().select(build);
      landingPage.getClearButton().should('not.be.disabled');
    });

    it(`User can choose 'Integers only'`, () => {
      landingPage.getBuildDropdown().select(build);
      let ops = landingPage.getOperationsDropdown();
      ops.each(op => {
        if (op.value !== landingPage.concatTitle) {
          ops.select(op.val());
          landingPage.getIntegerSelect().should('not.be.disabled');
        }
      });
    });

    describe('Should perform addition correctly', () => {
      randomData.forEach(testCase => {
        it.only(`Performs addition correctly with ${testCase.dataType} `, () => {
          testCase.dataType === stringType;
          let seed = 100;
          let precision = 5;

          let firstNumber =
            testCase.dataType === stringType
              ? testCase.dataGenerator()
              : parseFloat(testCase.dataGenerator(seed).toPrecision(precision));
          let secondNumber =
            testCase.dataType === stringType
              ? testCase.dataGenerator()
              : parseFloat(testCase.dataGenerator(seed).toPrecision(precision));

          let answer =
            testCase.dataType === stringType
              ? ''
              : firstNumber + secondNumber;

          landingPage.getBuildDropdown().select(build);
          landingPage.getFirstNumberField().type(firstNumber);
          landingPage.getSecondNumberField().type(secondNumber);
          landingPage.getOperationsDropdown().select(landingPage.addTitle);
          landingPage.getCalculateButton().click();

          landingPage.getAnswerField().should('have.value', answer);
        });
      });
    });

    describe('Should perform subtraction correctly', () => {
      randomData.forEach(testCase => {
        it.only(`Performs subtraction correctly with ${testCase.dataType} `, () => {
          let seed = 100;
          let precision = 5;

          let firstNumber =
            testCase.dataType === stringType
              ? testCase.dataGenerator()
              : parseFloat(testCase.dataGenerator(seed).toPrecision(precision));
          let secondNumber =
            testCase.dataType === stringType
              ? testCase.dataGenerator()
              : parseFloat(testCase.dataGenerator(seed).toPrecision(precision));

          let answer =
            testCase.dataType === stringType
              ? ''
              : firstNumber - secondNumber;

          landingPage.getBuildDropdown().select(build);
          landingPage.getFirstNumberField().type(firstNumber);
          landingPage.getSecondNumberField().type(secondNumber);
          landingPage.getOperationsDropdown().select(landingPage.subtractTitle);
          landingPage.getCalculateButton().click();

          landingPage.getAnswerField().should('have.value', answer);
        });
      });
    });

    describe('Should perform multiplication correctly', () => {
      randomData.forEach(testCase => {
        it.only(`Performs multiplication correctly with ${testCase.dataType} `, () => {
          let seed = 100;
          let precision = 5;
          let firstNumber =
            testCase.dataType === stringType
              ? testCase.dataGenerator()
              : parseFloat(testCase.dataGenerator(seed).toPrecision(precision));
          let secondNumber =
            testCase.dataType === stringType
              ? testCase.dataGenerator()
              : parseFloat(testCase.dataGenerator(seed).toPrecision(precision));

          let answer =
            testCase.dataType === stringType
              ? ''
              : firstNumber * secondNumber;

          landingPage.getBuildDropdown().select(build);
          landingPage.getFirstNumberField().type(firstNumber);
          landingPage.getSecondNumberField().type(secondNumber);
          landingPage.getOperationsDropdown().select(landingPage.multiplyTitle);
          landingPage.getCalculateButton().click();

          landingPage.getAnswerField().should('have.value', answer);
        });
      });
    });

    describe('Should perform division correctly', () => {
      randomData.forEach(testCase => {
        it.only(`Performs division correctly with ${testCase.dataType} `, () => {
          let seed = 100;
          let precision = 5;
          let firstNumber =
            testCase.dataType === stringType
              ? testCase.dataGenerator()
              : parseFloat(testCase.dataGenerator(seed).toPrecision(precision));
          let secondNumber =
            testCase.dataType === stringType
              ? testCase.dataGenerator()
              : parseFloat(testCase.dataGenerator(seed).toPrecision(precision));

          landingPage.getBuildDropdown().select(build);
          landingPage.getFirstNumberField().type(firstNumber);
          landingPage.getSecondNumberField().type(secondNumber);
          landingPage.getOperationsDropdown().select(landingPage.divideTitle);
          landingPage.getCalculateButton().click();

          if (secondNumber === 0) {
            landingPage
              .getErrorMessageField()
              .contains(landingPage.divideByZeroError);
          } else {
            let answer =
              testCase.dataType === stringType
                ? ''
                : firstNumber / secondNumber;

            landingPage.getAnswerField().should('have.value', answer);
          }
        });
      });
    });

    describe('Should perform concatenation correctly', () => {
      randomData.forEach(testCase => {
        it.only(`Performs concatenation correctly with ${testCase.dataType} `, () => {
          let seed = 100;
          let precision = 5;
          let firstNumber =
            testCase.dataType === stringType
              ? testCase.dataGenerator()
              : parseFloat(testCase.dataGenerator(seed).toPrecision(precision));
          let secondNumber =
            testCase.dataType === stringType
              ? testCase.dataGenerator()
              : parseFloat(testCase.dataGenerator(seed).toPrecision(precision));

          landingPage.getBuildDropdown().select(build);
          landingPage.getFirstNumberField().type(firstNumber);
          landingPage.getSecondNumberField().type(secondNumber);

          let answer = firstNumber.toString().concat(secondNumber.toString());

          landingPage.getOperationsDropdown().select(landingPage.concatTitle);
          landingPage.getCalculateButton().click();

          landingPage.getAnswerField().should('have.value', answer);
        });
      });
    });
  });
});
