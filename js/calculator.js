/*
    Calculator display
*/

const display = document.getElementById('display');

let firstNumber = 0;
let secondNumber = 0;
let storedOperator = '';

/*
    Display logic
*/

const setNumberFontSize = () => {
    if (display.value.length > 9) {
        display.style.fontSize = '1.5vw';
    } else {
        display.style.fontSize = '4vw';
    }
}

const addNumber = (number) => {
    if (display.value.length > 15) {
        return;
    }

    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }

    setNumberFontSize();
}

const addDecimal = () => {
    if (display.value.indexOf('.') === -1) {
        display.value += '.';
    }
}

const positiveNegative = () => {
    if (display.value !== '0') {
        display.value = display.value * -1;
    }
}

/*
    Calculator logic
*/

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

/*
    Clear logic
*/

const clearDisplay = () => {
    display.value = 0;
}

const clearAll = () => {
    firstNumber = 0;
    secondNumber = 0;
    clearDisplay();
    setNumberFontSize();
}

/*
    Operator logic
*/

const equals = () => {
    if (secondNumber === 0) {
        secondNumber = parseFloat(display.value);
    }

    switch (storedOperator) {
        case '+':
            display.value = addition(firstNumber, secondNumber);
            break;
        case '-':
            display.value = subtraction(firstNumber, secondNumber);
            break;
        case '*':
            display.value = multiplication(firstNumber, secondNumber);
            break;
        case '/':
            display.value = division(firstNumber, secondNumber);
            break;
        default:
            break;
    }

    //console.log(firstNumber, secondNumber, storedOperator);
    //console.log(display.value);
    firstNumber = parseFloat(display.value);
}

const useOperator = (operator) => {
    switch (operator) {
        case '=':
            equals();
            break;
        case '+/-':
            positiveNegative();
            break;
        case '.':
            addDecimal();
            break;
        case 'C':
            clearAll();
            break;
        default:
            storedOperator = operator;
            firstNumber = parseFloat(display.value);
            secondNumber = 0;
            clearDisplay();
            break;
    }
    setNumberFontSize();
}

/*
    Event listeners
*/

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', () => addNumber(number.innerHTML)));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () => useOperator(operator.innerHTML)));