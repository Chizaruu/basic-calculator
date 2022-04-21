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

const hasMaxLength = () => {
    if (display.value.length > 16) {
        return true;
    }

    return false;
}

const addNumber = (number) => {
    if (hasMaxLength()) return;

    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

const addDecimal = () => {
    if (hasMaxLength()) return;

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
const percent = (a, b) => a * b / 100;
const reciprocal = (a) => 1 / a;
const sqaure = (a) => a * a;
const squareRoot = (a) => Math.sqrt(a);


/*
    Clear logic
*/

const clearEntry = () => {
    display.value = 0;
}

const clearAll = () => {
    firstNumber = 0;
    secondNumber = 0;
    storedOperator = '';
    clearEntry();
}

/*
    Operator logic
*/
const hasFirstNumber = () => {
    if (firstNumber !== 0) {
        return false;
    }

    return true;
}


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

    firstNumber = parseFloat(display.value);
}

const useOperator = (operator) => {
    switch (operator) {
        case '%':
            if (!hasFirstNumber()) return;
            display.value = percent(firstNumber, parseFloat(display.value));
            break;
        case 'CE':
            clearEntry();
            break;
        case 'C':
            clearAll();
            break;
        case 'B':
            if (display.value !== "0") {
                display.value = display.value.slice(0, -1);
            }
            break;
        case '1/x':
            display.value = reciprocal(parseFloat(display.value));
            break;
        case '√':
            display.value = squareRoot(parseFloat(display.value));
        case '+/-':
            positiveNegative();
            break;
        case '.':
            addDecimal();
            break;
        case '=':
            equals();
            break;
        default:
            if (hasFirstNumber())
                firstNumber = parseFloat(display.value);
            if (secondNumber !== 0)
                secondNumber = 0;

            storedOperator = operator;
            clearEntry();
            break;
    }
}

/*
    Event listeners
*/

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', () => addNumber(number.innerHTML)));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () => useOperator(operator.innerHTML)));