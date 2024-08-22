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
        displayValue += button.textContent;
        displayNum();
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
        if(button.id != 'equal')
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
    num2 = parseInt(displayBox.textContent)
    console.log(`num1; ${num1} num2:${num2} op:${op}`)
    displayValue = operate(num1, op, num2)
    displayNum(displayValue)
})