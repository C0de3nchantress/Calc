function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(array) {
    const sumOfNums = array.reduce((total, currentNum) => {
        return total + currentNum;
    });
    return sumOfNums;
}

function multiply(array) {
    const productOfNums = array.reduce((total, currentNum) => {
        return total * currentNum;
    });
    return productOfNums;
}

function divide(a, b) {
    return a / b;
}

function operate(array, operator) {
    if (operator == "+") {
        return sum(array);
    } else if (operator == "X") {
        return multiply(array);
    } else if (operator == "-") {
        return array.reduce((total, currentNum) => subtract(total, currentNum));
    } else if (operator == "/") {
        return array
            .slice(1)
            .reduce((total, currentNum) => divide(total, currentNum), array[0]);
    } else {
        throw new Error("Invalid operator");
    }
}

let display = [];

let currentNumber = "";
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

const numberButtons = document.querySelectorAll(".operand");
const calcDisplay = document.querySelector("#display");
const clearButton = document.querySelector(".clear");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (waitingForSecondNumber) {
            currentNumber = button.textContent;
            waitingForSecondNumber = false;
        } else {
            currentNumber += button.textContent;
        }
        calcDisplay.textContent = display.join("");
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber == null) {
            firstNumber = parseFloat(currentNumber);
        } else if (currentNumber !== "") {
            const secondNumber = parseFloat(currentNumber);
            const result = calculate(firstNumber, secondNumber, operator);
            firstNumber = result;
            calcDisplay.textContent = result;
        }
        operator = button.textContent;
        waitingForSecondNumber = true;
        currentNumber = "";
    });
});

equalsButton.addEventListener("click", () => {
    if (operator && currentNumber !== "") {
        const secondNumber = parseFloat(currentNumber);
        const result = operate(firstNumber, secondNumber, operator);
        calcDisplay.textContent = result;
        firstNumber = result;
        waitingForSecondNumber = true;
        currentNumber = "";
    }
});

clearButton.addEventListener("click", () => {
    display = [];
    calcDisplay.textContent = display.join("");
});
