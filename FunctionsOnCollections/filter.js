// Generating an array with random integers

const myNumbers = [];
for (let i = 0; i < 10; i++) {
    myNumbers.push(Math.floor(Math.random() * 200) + 1);
}

const myOddNumbers = myNumbers.filter((x) => x % 2 !== 0);
const myEvenNumbers = myNumbers.filter((x) => x % 2 === 0);
const moreThanHundred = myNumbers.filter((x) => x >= 100);

console.log(`My numbers: [${myNumbers}]`);
console.log(`My odd numbers: [${myOddNumbers}]`);
console.log(`My even numbers: [${myOddNumbers}]`);
console.log(`Numbers more than 100: [${moreThanHundred}]`);