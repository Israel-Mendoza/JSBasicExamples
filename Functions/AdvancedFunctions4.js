// HIGH ORDER FUNCTIONS
// Working with functions that accept other functions as arguments

function callThreeTimes(aFunction) {
    aFunction();
    aFunction();
    aFunction();
    console.log();
}

function cry() {
    console.log("Boooohoooo!!! I'm so saaaaad!!!!");
}

function rage() {
    console.log("I HATE EVERYTHING!!!");
}

callThreeTimes(cry);
callThreeTimes(rage);

/// Another example

function callNTimes(aFunction, number) {
    for (let i = 0; i < number; i++) {
        aFunction();
    }
    console.log();
}


callNTimes(cry, 5);
callNTimes(rage, 7);

// Another example

function runRandomFunc(aFunc, anotherFunc) {
    functionList = [aFunc, anotherFunc];
    let index = Math.floor(Math.random() * 2);
    functionList[index]();
}

runRandomFunc(cry, rage);
