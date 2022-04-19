/*
    Calculator display
*/

const display = document.getElementById('display');

let firstNumber = 0;
let secondNumber = 0;
let storedOperator = '';

/*
    Calculator logic
*/

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;


const operation = (a, b, operator) => {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case '*':
            return multiplication(a, b);
        case '/':
            return division(a, b);
        default:
            return 'Invalid operator';
    }
}


const checkOperation = (operator) => {
    storedOperator = operator;

    if (firstNumber !== 0 && secondNumber !== 0) {
        let result = operation(firstNumber, secondNumber, operator);
        display.value = result;
        firstNumber = result;
        secondNumber = 0;
    } else {
        if (firstNumber === 0) {
            firstNumber = display.value;
            display.value = 0;
        } else {
            secondNumber = display.value;
        }
    }
}


const clear = () => {
    display.value = 0;
    firstNumber = 0;
    secondNumber = 0;
}


const calculate = () => {
    if (firstNumber !== 0 && secondNumber !== 0) {
        let result = operation(firstNumber, secondNumber, storedOperator);
        display.value = result;
        firstNumber = result;
    } else if (firstNumber !== 0) {
        secondNumber = display.value;
        let result = operation(firstNumber, secondNumber, storedOperator);
        display.value = result;
        firstNumber = result;
    } else {
        return;
    }
}


const addNumber = (number) => {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}


const addDecimal = () => {
    if (display.innerHTML.indexOf('.') === -1) {
        display.innerHTML += '.';
    }
}


const positiveNegative = () => {
    if (display.value !== '0') {
        display.value = display.value * -1;
    }
}

/* 
    Button click events
*/

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', addNumber(number.innerHTML)));


const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', checkOperation(operator.innerHTML)));


const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);


const equals = document.getElementById('equals');
equals.addEventListener('click', calculate);


const decimal = document.getElementById('decimal');
decimal.addEventListener('click', addDecimal);


const changeSign = document.getElementById('change-sign');
changeSign.addEventListener('click', positiveNegative);