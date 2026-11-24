let firstNumber = '';
let operator = '';
let secondNumber = '';

const display = document.getElementById('display');

function pressNumber(num) {
    if (operator === '') {
       
        firstNumber = firstNumber + num;
        display.value = firstNumber;
    } else {
        
        secondNumber = secondNumber + num;
        display.value = secondNumber;
    }
}

function pressOperator(op) {
    if (firstNumber !== '') {
        operator = op;
    }
}

function calculateResult() {
    if (firstNumber === '' || operator === '' || secondNumber === '') {
        return; 
    }

    
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    let answer = 0;

    if (operator === '+') {
        answer = num1 + num2;
    } else if (operator === '-') {
        answer = num1 - num2;
    } else if (operator === '*') {
        answer = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            display.value = 'Cannot divide by 0';
            resetVariables();
            return;
        }
        answer = num1 / num2;
    }
  
    display.value = answer;

   
    firstNumber = answer.toString();
    operator = '';
    secondNumber = '';
}


function clearCalc() {
    resetVariables();
    display.value = '0';
}

function resetVariables() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
}
