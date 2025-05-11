function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(first, second, operator) {
    if (operator == "+") {
        return add(first, second);
    } else if (operator == "X") {
        return multiply(first, second);
    } else if (operator == "-") {
        return subtract(first, second);
    } else if (operator == "/") {
        return divide(first, second);
    } else {
        return second;
    }
}

let currentNumber = "";
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

const numberButtons = document.querySelectorAll(".operand");
const calcDisplay = document.querySelector("#display");
const clearButton = document.querySelector(".clear");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const changeSignButton = document.querySelector(".sign")
const percentageButton = document.querySelector(".percentage")

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (waitingForSecondNumber) {
            currentNumber = button.textContent;
            waitingForSecondNumber = false;
        } else {
            currentNumber += button.textContent;
        }
        calcDisplay.textContent = currentNumber;
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
    currentNumber = "";
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = false;
    calcDisplay.textContent = 0;
});

changeSignButton.addEventListener("click", () => {
    if (currentNumber !== "") {
        currentNumber = (parseFloat(currentNumber) * -1).toString();
        calcDisplay.textContent = currentNumber;
    }
})

percentageButton.addEventListener("click", () => {
    if (currentNumber !== "") {
        currentNumber = (parseFloat(currentNumber) / 100).toString()
        calcDisplay.textContent = currentNumber;
    } else if (firstNumber != null) {
        firstNumber /= 100
        calcDisplay.textContent = firstNumber
    }
})