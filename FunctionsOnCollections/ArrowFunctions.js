const numbers = [2, 6, 4, 12, 94, 15, 25, 62, 3];
const squares = numbers.map((x) => x * x);
squares.forEach((x) => {
    console.log(x);
})
console.log();

const squaresEvenness = squares.map(x => x % 2 === 0 ? "even" : "odd");
squaresEvenness.forEach(x => {
    console.log(x)
})