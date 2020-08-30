const buildVersions = ["Prototype", "2", "4", "7", "8", "9"];

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

const subtractWholeNumberValues = [
    {
        firstNumber: -1,
        secondNumber: -1,
        expectedResult: 0
    }, {
        firstNumber: -1,
        secondNumber: 0,
        expectedResult: -1
    }, {
        firstNumber: -1,
        secondNumber: 1,
        expectedResult: -2
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
        expectedResult: 0
    }
];

const subtractFractionNumberValues = [
    {
        firstNumber: -1.1,
        secondNumber: -1.1,
        expectedResult: 0
    }, {
        firstNumber: -1.1,
        secondNumber: 0,
        expectedResult: -1.1
    }, {
        firstNumber: -1.1,
        secondNumber: 1.1,
        expectedResult: -2.2
    }, {
        firstNumber: 1.1,
        secondNumber: 0,
        expectedResult: 1.1
    }, {
        firstNumber: 1.1,
        secondNumber: 1.1,
        expectedResult: 0
    }
];

const subtractFractionNumberValuesIntegerAnswer = [
    {
        firstNumber: -1.1,
        secondNumber: -1.1,
        expectedResult: 0
    }, {
        firstNumber: -1.1,
        secondNumber: 0,
        expectedResult: -1
    }, {
        firstNumber: -1.1,
        secondNumber: 1.1,
        expectedResult: -2
    }, {
        firstNumber: 1.1,
        secondNumber: 0,
        expectedResult: 1
    }, {
        firstNumber: 1.1,
        secondNumber: 1.1,
        expectedResult: 0
    }
];

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

const multiplyFractionNumberValuesIntegerAnswer = [
    {
        firstNumber: -1.1,
        secondNumber: -1.1,
        expectedResult: 1
    }, {
        firstNumber: -1.1,
        secondNumber: 0,
        expectedResult: 0
    }, {
        firstNumber: -1.1,
        secondNumber: 1.1,
        expectedResult: -1
    }, {
        firstNumber: 1.1,
        secondNumber: 0,
        expectedResult: 0
    }, {
        firstNumber: 1.1,
        secondNumber: 1.1,
        expectedResult: 1
    }
];

const divideWholeNumberValues = [
    {
        firstNumber: -1,
        secondNumber: -1,
        expectedResult: 1
    }, {
        firstNumber: -1,
        secondNumber: 0,
        expectedResult: ''
    }, {
        firstNumber: -1,
        secondNumber: 1,
        expectedResult: -1
    }, {
        firstNumber: 0,
        secondNumber: 0,
        expectedResult: ''
    }, {
        firstNumber: 0,
        secondNumber: 1,
        expectedResult: 0
    }, {
        firstNumber: 10,
        secondNumber: 2,
        expectedResult: 5
    }
];

const divideFractionNumberValues = [
    {
        firstNumber: -1.1,
        secondNumber: -1.1,
        expectedResult: 1
    }, {
        firstNumber: -1.1,
        secondNumber: 0,
        expectedResult: ''
    }, {
        firstNumber: -1.1,
        secondNumber: 1.1,
        expectedResult: -1
    }, {
        firstNumber: 1.1,
        secondNumber: 0,
        expectedResult: ''
    }, {
        firstNumber: 1.2,
        secondNumber: 1.1,
        expectedResult: 1.21
    }
];

const concatenateNumbers = [
    {
        firstNumber: -1,
        secondNumber: -1,
        expectedResult: '-1-1'
    }, {
        firstNumber: 10,
        secondNumber: 2,
        expectedResult: '102'
    }
];

const symbolValues = [
    {
        firstNumber: '@',
        secondNumber: '@',
        expectedResult: ''
    }
];

export default {
    buildVersions,
    sumWholeNumberValues,
    sumFractionNumberValues,
    sumFractionNumberValuesIntegerAnswer,
    subtractWholeNumberValues,
    subtractFractionNumberValues,
    subtractFractionNumberValuesIntegerAnswer,
    multiplyWholeNumberValues,
    multiplyFractionNumberValues,
    multiplyFractionNumberValuesIntegerAnswer,
    divideWholeNumberValues,
    divideFractionNumberValues,
    concatenateNumbers,
    symbolValues,
};