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
        return array.reduce((total, currentNum) => divide((total, currentNum)));
    } else {
        throw new Error("Invalid operator");
    }
}
