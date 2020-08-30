const sumWholeNumberValues = [
    {
        firstNumber: -1,
        secondNumber: -1,
        expectedResult: -2
    }, {
        firstNumber: -1,
        secondNumber: 0,
        expectedResult: -1
    }, {
        firstNumber: -1,
        secondNumber: 1,
        expectedResult: 0
    }, {
        firstNumber: 0,
        secondNumber: 0,
        expectedResult: 0
    }, {
        firstNumber: 1,
        secondNumber: 0,
        expectedResult: 1
    }, {
        firstNumber: 1,
        secondNumber: 1,
        expectedResult: 2
    }
];

const sumFractionNumberValues = [
    {
        firstNumber: -1.1,
        secondNumber: -1.1,
        expectedResult: -2.2
    }, {
        firstNumber: -1.1,
        secondNumber: 0,
        expectedResult: -1.1
    }, {
        firstNumber: -1.1,
        secondNumber: 1.1,
        expectedResult: 0
    }, {
        firstNumber: 1.1,
        secondNumber: 0,
        expectedResult: 1.1
    }, {
        firstNumber: 1.1,
        secondNumber: 1.1,
        expectedResult: 2.2
    }
];

const sumFractionNumberValuesIntegerAnswer = [
    {
        firstNumber: -1.1,
        secondNumber: -1.1,
        expectedResult: -2
    }, {
        firstNumber: -1.1,
        secondNumber: 0,
        expectedResult: -1
    }, {
        firstNumber: -1.1,
        secondNumber: 1.1,
        expectedResult: 0
    }, {
        firstNumber: 1.1,
        secondNumber: 0,
        expectedResult: 1
    }, {
        firstNumber: 1.1,
        secondNumber: 1.1,
        expectedResult: 2
    }
];

const buildVersions = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const multiplyWholeNumberValues = [
    {
        firstNumber: -1,
        secondNumber: -1,
        expectedResult: 1
    }, {
        firstNumber: -1,
        secondNumber: 0,
        expectedResult: 0
    }, {
        firstNumber: -1,
        secondNumber: 1,
        expectedResult: -1
    }, {
        firstNumber: 0,
        secondNumber: 0,
        expectedResult: 0
    }, {
        firstNumber: 1,
        secondNumber: 0,
        expectedResult: 0
    }, {
        firstNumber: 1,
        secondNumber: 1,
        expectedResult: 1
    }
];

const multiplyFractionNumberValues = [
    {
        firstNumber: -1.1,
        secondNumber: -1.1,
        expectedResult: 1.21
    }, {
        firstNumber: -1.1,
        secondNumber: 0,
        expectedResult: 0
    }, {
        firstNumber: -1.1,
        secondNumber: 1.1,
        expectedResult: -1.21
    }, {
        firstNumber: 1.1,
        secondNumber: 0,
        expectedResult: 0
    }, {
        firstNumber: 1.1,
        secondNumber: 1.1,
        expectedResult: 1.21
    }
];

export default {
    sumWholeNumberValues,
    sumFractionNumberValues,
    sumFractionNumberValuesIntegerAnswer,
    buildVersions,
    // multiplyWholeNumberValue,
    // multiplyFractionNumberValues
};
