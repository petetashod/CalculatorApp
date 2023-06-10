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

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    // if firstOperand is empty then set firstOperand 
    // otherwise 
  
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
    
  });
});
period.addEventListener("click", () => {
  // you want to append the dot to display if clicked on
  // if operator is empty (update the firstOperand)
  if (operator == ""){
    // if firstoperand does not contain a decimal
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
equals.addEventListener("click", calculations);
console.log(equals);
function clear() {
  display.textContent = "";
  firstOperand = "";
  result = "";
  operator = "";
  secondOperand = "";
}
// write out of the steps for how to add 1+1+1+1 
// write every single step 
function screenDisplay() {
  if (firstOperand) {
    display.textContent = firstOperand;
    firstOperand = "";
    
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
      parseFloat(result.toFixed(2));
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

