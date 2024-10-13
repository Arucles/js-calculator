const add = function (a, b) {
    return a + b;
  };
  
  const subtract = function (a, b) {
    return a - b;
  };

  const multiply = function (a, b) {
    return a * b;
  };

  const divide = function (a, b) {
    return a / b;
  };


let num1 = 0;
let operator = "";
let num2 = 0;
let arr = [];

let firstValueArray = [];
let secondValueArray= [];

function operate(operator, num1, num2){
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            break;
    }
}

const numberButton = document.querySelectorAll('.number-btn');
const operatorButton = document.querySelectorAll('.operator-btn');
const displayScreenNumber = document.querySelector('#display-number');
const equalsButton = document.querySelector('#equals-btn');
const clearButton = document.querySelector('#clear-btn');
const pointButton = document.querySelector('#point-btn');
let operators = '+*/-';
let isFirstNumberDone= false;
let isSecondNumberDone = false;
let isOperatorDone= false;


numberButton.forEach(button => {
  button.addEventListener("click", (event) => {
    const numberButtonValue = event.target.textContent;
    if (!isOperatorDone) {
      if (numberButtonValue>=0 && numberButtonValue<=9) {
        firstValueArray.push(numberButtonValue);
      }
      console.log(firstValueArray);
      console.log(firstValueArray.join(""));
      console.log("1st: "+isFirstNumberDone+" 2nd: "+ isSecondNumberDone+" op: " +isOperatorDone)
      displayScreenNumber.innerHTML = 
        parseInt(firstValueArray.join(""));
    } else {
      if (numberButtonValue>=0 && numberButtonValue<=9) {
        secondValueArray.push(numberButtonValue);
      }
      console.log(firstValueArray, secondValueArray);
      console.log("1st: "+isFirstNumberDone+" 2nd: "+ isSecondNumberDone+" op: " +isOperatorDone)
      displayScreenNumber.innerHTML = 
        parseInt(secondValueArray.join(""));
    }
  })
});


operatorButton.forEach(button => {
  button.addEventListener("click", (event) =>{
    const operatorButtonValue = event.target.textContent;
    if (firstValueArray.length == 0) {
      alert("Please input a number first!");
      return;
    } else {
      if (operators.includes(operatorButtonValue) ) {
        operator = operatorButtonValue;
        displayScreenNumber.innerHTML= operator;
        console.log(operator);
        isFirstNumberDone=true;
        isOperatorDone=true;
        return;
      }
    }
  })
  
});

equalsButton.addEventListener("click", ()=>{
  if (!isFirstNumberDone) {
    alert("Please select a number!");
    return;
  } else if (!isOperatorDone) {
    alert("Choose an operator!");
    return;
  } else if (!secondValueArray.length>0) {
    alert("Choose the second number!");
    return;
  } else {
    num1 = parseInt(firstValueArray.join(""));
    num2 = parseInt(secondValueArray.join(""));
    console.log(num1, operator, num2);
    result = operate(operator, num1, num2);
    displayScreenNumber.innerHTML = result;
    firstValueArray.splice(0, firstValueArray.length);
    secondValueArray.splice(0, secondValueArray.length);
    firstValueArray.push(result);
    isFirstNumberDone=true;
    isOperatorDone=false;
  }
})

clearButton.addEventListener("click", ()=>{
  firstValueArray.splice(0, firstValueArray.length);
  secondValueArray.splice(0, secondValueArray.length);
  operator="";
  displayScreenNumber.innerHTML = "00000";
})

pointButton.addEventListener("click", ()=>{

  if (!isFirstNumberDone) {
    firstValueArray.push("."); 
    console.log(firstValueArray);
    displayScreenNumber.innerHTML = 
      firstValueArray.join("");
      console.log("1st: "+isFirstNumberDone+" 2nd: "+ isSecondNumberDone+" op: " +isOperatorDone)
  }
})
