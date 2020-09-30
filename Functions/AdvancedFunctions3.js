function add(a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

const divide = function division(a, b) {
    return a / b;
}

// We can store functions in an array
const operations = [add, subtract, multiply, divide];

for (let func of operations) {
    console.log(func(10, 20));
}
console.log();

// We can store functions as the value for an object attribute

const aThing = {
    doSomething: multiply
}

console.log(`The thing can do something: ${aThing.doSomething(100, 22)}`);