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
    screenDisplay();
    //console.log(numbers)
    ///parseInt(number)
  });
});


operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    operations = e.target.textContent;
    console.log(operations)
    // if (firstOperand && secondOperand){
    //     calculations();
    // }
  });
});

clearButton.addEventListener("click", clear);
equals.addEventListener("click", calculations);

function clear() {
  display.textContent = "";
  firstOperand = "";
  result = "";
  operator = "";
  secondOperand = "";
}

function screenDisplay() {
    display.textContent = firstOperand;
  if (firstOperand !== null) {
    firstOperand = secondOperand;
    firstOperand = "";
  }  
  if (firstOperand && secondOperand && operator){
    display.textContent = result;

   }

}

function calculations() {
  let numberOne = parseFloat(firstOperand);
  let numberTwo = parseFloat (secondOperand);
  if (operator == "+") {
    result=numberOne + numberTwo;
    parseFloat(result.toFixed(3));
    firstNumber = "";

    return (display.textContent = result);
  } else if (operator == "-") {
    result= numberOne - numberTwo;
    return parseFloat(result.toFixed(3));
  } else if (operator == "X") {
    result= numberOne * numberTwo;
    return parseFloat(result.toFixed(3));
  } else if (operator == "/") {
    result= numberOne / numberTwo;
    return parseFloat(result.toFixed(3));
  }
  
}