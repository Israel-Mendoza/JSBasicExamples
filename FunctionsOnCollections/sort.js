// The compareFn passed to sort() must:
// return a negative number if the first item goes first
// return zero if both values are the same
// return a positive number if the second number goes first

//400     50      => 350      => [50, 400]
//400     50      => -350     => [400, 500]

const prices = [400, 50, 125, 200, 10, 500, 550, 290];

const ascPrices = prices.slice().sort((a, b) => a - b);
const descPrices = prices.slice().sort((a, b) => b - a);

console.log(`Original array: ${prices}`);
console.log(`Ascending array: ${ascPrices}`);
console.log(`Descending array: ${descPrices}`);
