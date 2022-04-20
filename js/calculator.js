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

const addNumber = (number) => {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
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
    display.value = 0;
    firstNumber = 0;
    secondNumber = 0;
}

/*
    Operator logic
*/

const add = () => {
    firstNumber = parseFloat(display.value);
    storedOperator = '+';
    clearDisplay();
}

const subtract = () => {
    firstNumber = parseFloat(display.value);
    storedOperator = '-';
    clearDisplay();
}

const multiply = () => {
    firstNumber = parseFloat(display.value);
    storedOperator = '*';
    clearDisplay();
}

const divide = () => {
    firstNumber = parseFloat(display.value);
    storedOperator = '/';
    clearDisplay();
}

const equals = () => {
    secondNumber = parseFloat(display.value);
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

    // console.log(firstNumber, secondNumber, storedOperator);
    // console.log(display.value);
}

const checkOperator = (operator) => {
    switch (operator) {
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '*':
            multiply();
            break;
        case '/':
            divide();
            break;
        case '=':
            equals();
            break;
        default:
            break;
    }
}

/*
    Event listeners
*/

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', () => addNumber(number.innerHTML)));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () => checkOperator(operator.innerHTML)));

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearAll);

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', addDecimal);

const positiveNegativeButton = document.querySelector('#positive-negative');
positiveNegativeButton.addEventListener('click', positiveNegative);