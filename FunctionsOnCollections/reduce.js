const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, newNum) => total * newNum);
console.log(`Product of ${nums}: ${product}`);