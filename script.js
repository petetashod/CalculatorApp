const display = getElementById('display')
const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelector('.operations')
const equals = document.getElementById('equals');
let firstSelection;
let secondSelection;
let operator;
let numberOne;
let numberTwo;
function getNumbers(number){
    
};

function clear(){
    let firstSelection = "";
    let secondSelection = "";
    let operator = "";

};

function display(){

}

function operatorSelection(){
    if (operations == '+' || operations == '-' || 
    operations == 'X' || operations == '/') { 
        return operator = operations 
 }
}

function calculations(){
    let numberOne = parseFloat(firstSelection)
    let numberTwo = parseFloat(secondSelection)
    if (operator == '+'){
        secondSelection = numberOne + numberTwo
    }

    else if (operator == '-'){
        secondSelection = numberOne - numberTwo
    }
    else if(operator == 'X'){
        secondSelection = numberOne * numberTwo
    }
    else if (operator == '/'){
        secondSelection = numberOne / numberTwo
    }

}