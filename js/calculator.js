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
    if (display.innerHTML.length > 16) {
        return true;
    }

    return false;
}

const addNumber = (number) => {
    if (hasMaxLength()) return;

    if (display.innerHTML === '0') {
        display.innerHTML = number;
    } else {
        display.innerHTML += number;
    }
}

const addDecimal = () => {
    if (hasMaxLength()) return;

    if (display.innerHTML.indexOf('.') === -1) {
        display.innerHTML += '.';
    }
}

const positiveNegative = () => {
    if (display.innerHTML !== '0') {
        display.innerHTML = display.innerHTML * -1;
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
const square = (a) => a * a;
const squareRoot = (a) => Math.sqrt(a);


/*
    Clear logic
*/

const clearEntry = () => {
    display.innerHTML = 0;
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
        secondNumber = parseFloat(display.innerHTML);
    }

    switch (storedOperator) {
        case '+':
            display.innerHTML = addition(firstNumber, secondNumber);
            break;
        case '-':
            display.innerHTML = subtraction(firstNumber, secondNumber);
            break;
        case '*':
            display.innerHTML = multiplication(firstNumber, secondNumber);
            break;
        case '/':
            display.innerHTML = division(firstNumber, secondNumber);
            break;
        default:
            break;
    }

    firstNumber = parseFloat(display.innerHTML);
}

const useOperator = (operator) => {
    switch (operator) {
        case '%':
            if (hasFirstNumber()) return;
            display.innerHTML = percent(firstNumber, parseFloat(display.innerHTML));
            break;
        case 'CE':
            clearEntry();
            break;
        case 'C':
            clearAll();
            break;
        case 'B':
            if (display.innerHTML !== "0") {
                display.innerHTML = display.innerHTML.slice(0, -1);
            }
            break;
        case '1/x':
            display.innerHTML = reciprocal(parseFloat(display.innerHTML));
            break;
        case 'x²':
            display.innerHTML = square(parseFloat(display.innerHTML));
            break;
        case '√':
            display.innerHTML = squareRoot(parseFloat(display.innerHTML));
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
                firstNumber = parseFloat(display.innerHTML);
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

const numbers = document.querySelectorAll('.calculator__number');
numbers.forEach(number => number.addEventListener('click', () => addNumber(number.innerHTML)));

const operators = document.querySelectorAll('.calculator__operator');
operators.forEach(operator => operator.addEventListener('click', () => useOperator(operator.innerHTML)));