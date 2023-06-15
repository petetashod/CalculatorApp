/** @format */

let display = document.getElementById("display");
const numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operations");
const equals = document.getElementById("equal");
const clearButton = document.getElementById("clearButton");
const period = document.getElementById("period");
let result = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";
let initialOperations ="";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
  
    if (firstOperand !== "" && operator !== "" && secondOperand.length < 12) {
      secondOperand += e.target.textContent;
    }
    if (firstOperand == "" || firstOperand.length < 12 && secondOperand == "") {
      firstOperand += e.target.textContent;
    }
    
    screenDisplay();
  });
});


operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    operator = e.target.textContent;
    
    if ( operator && secondOperand){
       calculations();
       
    }  
  });
});
period.addEventListener("click", () => {
  if (operator == ""){
    if (!firstOperand.includes(".")) {
     // then
     firstOperand += ".";
     display.textContent = firstOperand; 
    }   
  }   
  else if(!secondOperand.includes(".")) {
    secondOperand += "."
    display.textContent = secondOperand;
  }
  



});
clearButton.addEventListener("click", clear);
const answer = equals.addEventListener("click", calculations);
function clear() {
  display.textContent = "";
  firstOperand = "";
  result = "";
  operator = "";
  secondOperand = "";
}

function screenDisplay() {
  if (firstOperand) {
    display.textContent = firstOperand;
  }  
  if (firstOperand && operator){
    display.textContent = secondOperand;
    
  }
 
}


function calculations() {
  let numberOne = parseFloat(firstOperand);
  let numberTwo = parseFloat (secondOperand);
  if (numberOne && numberTwo && operator){
    
    if (operator == "+") {
      result = numberOne + numberTwo;
      parseFloat(result.toFixed(3));
      display.textContent = result;
      firstOperand = result;
      secondOperand = "";
  
    } else if (operator == "-") {
      result= numberOne - numberTwo;
      parseFloat(result.toFixed(3));
      display.textContent = result;
      firstOperand = result;
      secondOperand = "";

    } else if (operator == "X") {
      result= numberOne * numberTwo;
      parseFloat(result.toFixed(3));
      display.textContent = result;
      firstOperand = result;
      secondOperand = "";
  
    } else if (operator == "/") {
      result= numberOne / numberTwo;
      parseFloat(result.toFixed(3));
      display.textContent = result;
      firstOperand = result;
      secondOperand = "";
    }

  }
  
  
}

