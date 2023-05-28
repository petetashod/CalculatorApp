let display = document.getElementById("display");
const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelector('.operations')
const equals = document.getElementById('equals');
const clearButton = document.getElementById('clear');
let result;
let operator;
let numberOne;
let numberTwo;

numbers.forEach((number) => {
    number.addEventListener('click',(e)=>{
        let number = e.target.textContent
        screenDisplay();
        //console.log(number)
        ///parseInt(number)
    })
})
console.log(numbers)
Array.from(operations).forEach((operation) => {
    operation.addEventListener('click',(e) =>{
        operations = e.target.textContent
    })
})

clearButton.addEventListener('click',clear);


function clear(){
    display.textContent = '';
    let numberONe= "";
    let result = "";
    let operator = "";
    let numberTwo = "";

};

function screenDisplay(){
    let display = numbers.value;
}


function calculations(){
    let numberOne = parseFloat(firstSelection)
    let numberTwo = parseFloat(secondSelection)
    if (operator == '+'){
        result = numberOne + numberTwo
        return parseFloat(result.toFixed(3))
    }

    else if (operator == '-'){
        return parseFloat(result.toFixed(3))
    }
    else if(operator == 'X'){
        return parseFloat(result.toFixed(3))

    }
    else if (operator == '/'){
        return parseFloat(result.toFixed(3))

    }
}