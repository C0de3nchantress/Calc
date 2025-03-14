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
