let num1 =''
let num2 = '';
let displayValue = '';
let op = '';
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function operate(num1, op, num2){
    let res = ''
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(op){
        case '+':
            res = add(num1,num2)
            break;
        case '-':
            res = subtract(num1,num2)
            break;
        case '*':
            res = multiply(num1,num2)
            break;
        case '/':
            res = divide(num1,num2)
            break;
            default: console.log("operation error")
    }
    return res
}
let displayBox = document.getElementById('display');
function displayNum(){
    displayBox.textContent = displayValue;
}

const numberButtons = document.querySelectorAll('#numbers button');
numberButtons.forEach((button) => {
    button.addEventListener('click', () =>
    {
        if(button.id !== 'decimal') {
        displayValue += button.textContent;
        displayNum();}
    })
})

function allclear(){
    num1 = '';
    num2 = '';
    displayValue = '';
    displayNum();
}
allclear()
const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', allclear);
console.log(`firstNumber: ${num1} secondNumber: ${num2}`);


const operatorButtons = document.querySelectorAll('#operations button');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () =>
    {
        if(button.id != 'equal'&& button.id != 'backspace' && button.id != 'clear')
        {
            op = button.textContent
            console.log(op)
            num1 = parseInt(displayValue)
            displayValue=''
        }
    }
    )
})

const equalButton = document.getElementById('equal')
equalButton.addEventListener('click', () =>{
    num2 = displayValue
    console.log(`num1; ${num1} num2:${num2} op:${op}`)
    displayValue = operate(num1, op, num2)
    displayNum(displayValue)
})

const backSpaceButton  = document.getElementById('backspace')
backSpaceButton.addEventListener('click', () => {
    if(num1 === '' && num2 === '') {
    displayValue = displayValue.slice(0, -1)
    displayNum()
    }
}
)
const decimalButton = document.getElementById('decimal')
decimalButton.addEventListener('click', () => {
    if(!displayValue.includes('.')) {
    displayValue += '.'
    displayNum()
    }
})