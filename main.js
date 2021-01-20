const addButton = document.querySelector('.add-button');
const subtractButton = document.querySelector('.subtract-button');
const divideButton = document.querySelector('.divide-button');
const multiplyButton = document.querySelector('.multiply-button');
const equalsButton = document.querySelector('.equals-button');
const ACButton = document.querySelector('.clear-button'); 
const display = document.querySelector('#display');
const backspaceButton = document.querySelector('.backspace-button');

const numberButtons = document.querySelectorAll('.num');
const number0 = document.querySelector('#btn0');
const number1 = document.querySelector('#btn1');
const number2 = document.querySelector('#btn2');
const number3 = document.querySelector('#btn3');
const number4 = document.querySelector('#btn4');
const number5 = document.querySelector('#btn5');
const number6 = document.querySelector('#btn6');
const number7 = document.querySelector('#btn7');
const number8 = document.querySelector('#btn8');
const number9 = document.querySelector('#btn9');
const decimalButton = document.querySelector('.decimal-button');

let result = 0; 
let onDisplay = '';  

let countOperator = 0; 

display.textContent = result; 

let strNum = ''; 
let operator = ''; 

let num1 = 0; 
let num2 = 0; 

function findOperatorIndex(str) {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '-' || str[i] ===  '+'
         || str[i] ===  '*' || str[i] ===  '/') {
            return i;
         }
    }
    return 0; 
}

function disableNumberButtons() {
    number0.disabled = true; 
    number1.disabled = true; 
    number2.disabled = true; 
    number3.disabled = true; 
    number4.disabled = true; 
    number5.disabled = true; 
    number6.disabled = true; 
    number7.disabled = true; 
    number8.disabled = true; 
    number9.disabled = true; 
    decimalButton.disabled = true; 
}

function unDisableNumberButtons() {
    number0.disabled = false; 
    number1.disabled = false; 
    number2.disabled = false; 
    number3.disabled = false;
    number4.disabled = false;
    number5.disabled = false;
    number6.disabled = false;
    number7.disabled = false;
    number8.disabled = false;
    number9.disabled = false;
    decimalButton.disabled = false; 
}

function splitArray(str) {
    let breakPoint = findOperatorIndex(str); 
   
    let num1 = str.substring(0, breakPoint); 
    let num2 = str.substring(breakPoint+1, str.length); 
   
    console.log('inside splitarr str:',str);
    console.log('inside splitarr num1:', num1);
    console.log('inside splitarr num2:',num2);
    
    nums = {
        "num1": num1,
        "num2": num2,
    }
    return nums; 
    // js ei tue monen palauttamista 
       
}




number0.addEventListener('click',(e) => {
    strNum += 0; 
    addToDisplay(0)
})
number1.addEventListener('click' ,(e) => {
    strNum += 1;  
    addToDisplay(1);
})
number2.addEventListener('click' ,(e) => {
    strNum += 2; 
     addToDisplay(2);
 })
 number3.addEventListener('click' ,(e) => {
     strNum += 3; 
     addToDisplay(3);
 })
number4.addEventListener('click' ,(e) => {
    strNum += 4;
    addToDisplay(4);
})
number5.addEventListener('click' ,(e) => {
    strNum += 5;
     addToDisplay(5);
 })
 number6.addEventListener('click' ,(e) => {
    strNum += 6; 
     addToDisplay(6);
 })
 number7.addEventListener('click' ,(e) => {
    strNum += 7; 
     addToDisplay(7);
 })
 number8.addEventListener('click' ,(e) => {
    strNum += 8; 
     addToDisplay(8);
 })
 number9.addEventListener('click' ,(e) => {
    strNum += 9; 
     addToDisplay(9);
 })

 decimalButton.addEventListener('click', (e) => {
     strNum += '.';
     addToDisplay('.');
 })

addButton.addEventListener('click', (e) => {
    //operate(add, a, b);
    operator = '+'; 
    strNum += '+';
    addToDisplay('+');
    unDisableNumberButtons();
})

subtractButton.addEventListener('click', (e) => {
    operator = '-';
    strNum += '-';
    addToDisplay('-');
    unDisableNumberButtons();
})

multiplyButton.addEventListener('click', (e) => {
    operator = '*'; 
    strNum += '*';
    addToDisplay('*');
    unDisableNumberButtons();
}) 

divideButton.addEventListener('click', (e) => {

    operator = '/'; 
    strNum += '/';
    addToDisplay('/');
    unDisableNumberButtons();
})

function removeOne() {
    onDisplay = onDisplay.slice(0, -1); 
    strNum = strNum.slice(0, -1); 
    display.textContent = onDisplay;
} 


backspaceButton.addEventListener('click', (e) => {
   removeOne();
})

equalsButton.addEventListener('click', (e) => {
   clearDisplay();
   let splittedNums = splitArray(strNum);
   
   console.log('nums inside equal button: ', splittedNums["num1"], splittedNums["num2"])
   let num1Int = parseInt(splittedNums["num1"]); 
   let num2Int = parseInt(splittedNums["num2"]); 
   disableNumberButtons();

    switch(operator) {
        case '+':
            if(countOperator < 1) {
                strNum = '';  
                strNum += result;
                result += operate(add, num1Int, num2Int); 
                addToDisplay(result);
                console.log('result after operate ',result);
                countOperator++; 
            } else {
                strNum = '';
                strNum += result;
                result += num2Int; 
                addToDisplay(result);
            }
           
            break;
        case '-':
            if(countOperator < 1) {
                strNum = '';  
                strNum += result;
                result += operate(subtract, num1Int, num2Int); 
                addToDisplay(result);
                console.log('result after operate ',result);
                countOperator++; 
            } else {
                strNum = '';
                strNum += result;
                result -= num2Int; 
                addToDisplay(result);
            }
            break;
        case '*':
            if(countOperator < 1) {
                strNum = '';  
                strNum += result;
                result += operate(multiply, num1Int, num2Int); 
                addToDisplay(result);
                console.log('result after operate ',result);
                countOperator++; 
            } else {
                strNum = '';
                strNum += result;
                result *= num2Int; 
                addToDisplay(result);
            }
            break;
        case '/':
            if(num1Int === 0 || num2Int === 0) {
                alert( 'It is not possible divide with zero.')
            }
            else if(countOperator < 1) {
                strNum = '';  
                strNum += result;
                result += operate(divide, num1Int, num2Int); 
                addToDisplay(result.toFixed(2));
                console.log('result after operate ',result);
                countOperator++; 
            } else {
                strNum = '';
                strNum += result;
                result /= num2Int; 
                addToDisplay(result.toFixed(2));
            }
            break;

        default: 
            console.log('I did not found any operator');
    } 
}) 

ACButton.addEventListener('click', (e) => {
    console.log('clicked ac');
    strNum = ''; 
    result = 0;  
    countOperator = 0; 
    unDisableNumberButtons();
    clearDisplay();
})

function clearDisplay() {
    onDisplay = ''; 
    
    display.textContent = onDisplay;
    display.textContent = 0; 
}

function addToDisplay(a) {
    
    onDisplay += a.toString(); 
    display.textContent = onDisplay;
     
}

function add(a, b) {
    
    console.log('add'); 
    return a + b; 
}

function subtract(a, b) {
    return a - b; 
}

function divide(a, b) {
    console.log('divide called')
    console.log('a', a);
    console.log('b', b); 
    if(a !== 0 || b !== 0) {
       
        return a / b; 
    }
    return 0; 
    
}

function multiply(a, b) {

    console.log('multiply called')
    console.log('a', a);
    console.log('b', b); 
    
    return a * b; 
} 

function operate(operator, a, b) {
    return operator(a, b); 
}
