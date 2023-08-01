const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".button-number"); 
console.log(numberButtons);

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
let num1 = parseInt(number1);
let num2 = parseInt(number2);

if (operator == '+') {
    let sum = add(num1, num2);
    console.log(sum);    
} else if (operator == '-'){
    let diff = subtract(num2, num1);
    console.log(diff); 
} else if (operator == '*') {
    let mul = multiply(num1, num2);
    console.log(mul); 
} else if (operator == '/') {
    let div = divide(num1, num2);
    console.log(div); 
}

window.addEventListener('keydown', handleKeyboardInput);

function handleKeyboardInput(e){
    if(e.key >= 0 || e.key <= 9) appendNumber(e.key);
}

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

function appendNumber(number) {
    display.textContent += number;
}



window.addEventListener('keydown', function(e) {
    let keycode = e.keyCode;
    if(keycode>=48 && keycode<=57){
        console.log(e.key);        
    }    
});
