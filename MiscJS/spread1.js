const numbers = [2, 5, 12, 62, 4, 95, 210, 2, 35, 4];

// Spread "unpacks" the array into different items
console.log(Math.max(...numbers));
console.log();


// Another example

const colors = ["red", "orange", "red", "green"];

function giveMeFour(a, b, c, d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}

console.log("Passing the array: ")
giveMeFour(colors);
console.log("\nSpreading the array: ");
giveMeFour(...colors);
console.log();
