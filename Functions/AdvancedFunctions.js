// FUNCTION SCOPE

// All declared varbales in a function will be only accessible from the function itself.

function helpMe() {
    let message = "Au secours!!!";
    console.log(`${message} from the helpMe() function!!!`);
}

try {
    console.log(message);
} catch (error) {
    console.log(error, "\n\n");
}

// BLOCK SCOPE

// Variable declared using "const" and "let" from within a block will be restricted to that block.
// Variables declared using "var" will be accessible from outside the block

var num = 10000;
console.log(`num declared globally = ${num}`);

for (var num = 0; num < 5; num++) {
    console.log(`num from within the loop: ${num}`);
}

console.log(`num accessed from outside the loop: ${num}\n\n`);


// LEXICAL SCOPE

function outer() {
    let movie = "Amadeus";

    function inner() {
        console.log(`My favorite movie is "${movie}"`);
    }

    inner();
}

outer();