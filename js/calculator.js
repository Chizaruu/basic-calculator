/*
    Calculator display
*/

const display = document.getElementById('display');

let firstNumber = 0;
let secondNumber = 0;
let operator = '';

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
        let result = operation(firstNumber, secondNumber, operator);
        display.value = result;
        firstNumber = result;
    } else if (firstNumber !== 0) {
        secondNumber = display.value;
        let result = operation(firstNumber, secondNumber, operator);
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

/* 
    Button click events
*/

const addbtn = document.getElementById('add');

addbtn.addEventListener('click', (e) => {
    e.preventDefault();
    operator = '+';

    checkOperation(operator);
});


const subbtn = document.getElementById('sub');

subbtn.addEventListener('click', (e) => {
    e.preventDefault();
    operator = '-';

    checkOperation(operator);
});


const mulbtn = document.getElementById('mul');

mulbtn.addEventListener('click', (e) => {
    e.preventDefault();
    operator = '*';

    checkOperation(operator);
});


const divbtn = document.getElementById('div');

divbtn.addEventListener('click', (e) => {
    e.preventDefault();
    operator = '/';

    checkOperation(operator);
});

const changeSign = document.getElementById('change-sign');

changeSign.addEventListener('click', (e) => {
    e.preventDefault();
    if (display.value !== '0') {
        display.value = display.value * -1;
    }
});


const clearbtn = document.getElementById('clear');

clearbtn.addEventListener('click', (e) => {
    e.preventDefault();
    clear();
});


const equalsbtn = document.getElementById('equals');

equalsbtn.addEventListener('click', (e) => {
    e.preventDefault();
    calculate();
});


const dotbtn = document.getElementById('dot');

dotbtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (display.value.indexOf('.') === -1) {
        display.value += '.';
    }
});


const num0btn = document.getElementById('num0');

num0btn.addEventListener('click', (e) => {
    e.preventDefault();
    addNumber('0');
});


const num1btn = document.getElementById('num1');

num1btn.addEventListener('click', (e) => {
    e.preventDefault();
    addNumber('1');
});


const num2btn = document.getElementById('num2');

num2btn.addEventListener('click', (e) => {
    e.preventDefault();
    addNumber('2');
});


const num3btn = document.getElementById('num3');

num3btn.addEventListener('click', (e) => {
    e.preventDefault();
    addNumber('3');
});


const num4btn = document.getElementById('num4');

num4btn.addEventListener('click', (e) => {
    e.preventDefault();
    addNumber('4');
});


const num5btn = document.getElementById('num5');

num5btn.addEventListener('click', (e) => {
    e.preventDefault();
    addNumber('5');
});


const num6btn = document.getElementById('num6');

num6btn.addEventListener('click', (e) => {

    e.preventDefault();
    addNumber('6');
});


const num7btn = document.getElementById('num7');

num7btn.addEventListener('click', (e) => {
    e.preventDefault();
    addNumber('7');
});


const num8btn = document.getElementById('num8');

num8btn.addEventListener('click', (e) => {
    e.preventDefault();
    addNumber('8');
});


const num9btn = document.getElementById('num9');

num9btn.addEventListener('click', (e) => {
    e.preventDefault();
    addNumber('9');
});