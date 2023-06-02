/** @format */

let display = document.getElementById("display");
const numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operations");
const equals = document.getElementById("equal");
const clearButton = document.getElementById("clearButton");
let result = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    firstOperand = e.target.textContent;
    if (firstOperand !== null && operator !== null){
      secondOperand = e.target.textContent
    }
    screenDisplay();
    //console.log(numbers)
    ///parseInt(number)
  });
});


operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    operator = e.target.textContent;
    
    
  });
});

clearButton.addEventListener("click", clear);
equals.addEventListener("click", calculations);
console.log(equals);
function clear() {
  display.textContent = "";
  firstOperand = "";
  result = "";
  operator = "";
  secondOperand = "";
}

function screenDisplay() {
  if (firstOperand) {
    display.textContent = firstOperand 
  }  
  if (firstOperand && operator){
    display.textContent = secondOperand
    
  }
  
}


function calculations() {
  let numberOne = parseFloat(firstOperand);
  let numberTwo = parseFloat (secondOperand);
  if (numberOne && numberTwo && operator){
    
    if (operator == "+") {
      result = numberOne + numberTwo;
      parseFloat(result.toFixed(3));
      firstNumber = "";
      return display.textContent = result;
  
    } else if (operator == "-") {
      result= numberOne - numberTwo;
      parseFloat(result.toFixed(3));
      firstNumber = "";
      return display.textContent = result;
    } else if (operator == "X") {
      result= numberOne * numberTwo;
      parseFloat(result.toFixed(3));
      firstNumber = "";
      return display.textContent = result;
    } else if (operator == "/") {
      result= numberOne / numberTwo;
      parseFloat(result.toFixed(3));
      firstNumber = "";
      return display.textContent = result;
    }

  }
  
  
}

// ask andy why the number you choose is getting passed into both operands at the same time
// even though you are choosing to separate numbers 