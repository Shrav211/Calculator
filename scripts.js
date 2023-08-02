const currOperation = document.getElementById("display");
const prevOperation = document.getElementById("display-up")
const numberButtons = document.querySelectorAll(".button-number"); 
const operatorButtons = document.querySelectorAll(".button-operator");
const clearButton = document.getElementById("button-clear");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    if (a > b){
        return a - b;
    } else {
        return b - a;
    }
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let number1 = '';
let operator = '';
let number2 = '';
let currentOperation = null;

// let num1 = parseInt(number1);
// let num2 = parseInt(number2);

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator == '+') {
        let sum = add(num1, num2);
        return sum;   
    } else if (operator == '-'){
        let diff = subtract(num2, num1);
        return diff; 
    } else if (operator == '*') {
        let mul = multiply(num1, num2);
        return mul; 
    } else if (operator == '/') {
        let div = divide(num1, num2);
        return div; 
    }
}

window.addEventListener('keydown', handleKeyboardInput);

function handleKeyboardInput(e){
    if(e.key >= 0 || e.key <= 9) appendNumber(e.key);
    if((e.key) == '+' || (e.key) == '-' || (e.key) == '*' || (e.key) == '/') setOperation(e.key);
    if (e.key === '=' || e.key === 'Enter') evaluate();
}

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

clearButton.addEventListener('click', clear)

function appendNumber(number) {
    currOperation.textContent += number;
}

function setOperation(operator) {
    // if (operator !== null) {
    //     evaluate();
    // }
    number1 = currOperation.textContent;
    currentOperation = operator;
    console.log(number1);
    console.log(currentOperation);
    //currentOperation = null;
    prevOperation.textContent = currOperation.textContent + operator;
    currOperation.textContent = '';
    //evaluate();
}

function evaluate() {
    number2 = currOperation.textContent;
    console.log(number2);
    console.log(currentOperation);
    currOperation.textContent = operate(currentOperation, number1, number2);
    //currentOperation = null;
}

function clear() {
    currOperation.textContent = ''
    prevOperation.textContent = ''
    number1 = ''
    number2 = ''
    currentOperation = null
  }

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}  