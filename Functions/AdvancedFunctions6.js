// Testing closures generated through a loop

function adder(numToAdd) {
    return function (number) {
        return numToAdd + number;
    }
}


const myAdders = [];
for (let i = 1; i <= 10; i++) {
    myAdders.push(adder(i));
}

for (let i = 0; i < myAdders.length; i++) {
    console.log(`Adding 10 to adder at index ${i}: ${myAdders[i](10)}`);
}
console.log();

// Recreating one of the caveates in closures in Python

myAdders.length = 0;

// If we use var to define the free variable, there won't be any
// Because the 'i' will still exist in the global scope
for (var i = 1; i <= 3; i++) {
    myAdders.push((num) => num + i);
}

for (let adder of myAdders) {
    console.log(`Adding 10 to adder: ${adder(10)}`);
}
console.log();

// Clearing the array
myAdders.length = 0;

// If we use let to define the free variable, the 'i' value
// will be correctly retained by the returned function

for (let i = 1; i <= 3; i++) {
    myAdders.push((num) => num + i);
}

for (let adder of myAdders) {
    console.log(`Adding 10 to adder: ${adder(10)}`);
}