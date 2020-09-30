// Creating methods

const math = {
    numbers: [1, 2, 3, 4, 5],
    add(x, y) {
        return x + y;
    },
    multiply(x, y) {
        return x * y;
    }
}

console.log(typeof math.add);
console.log(math.multiply);
console.log(math.add(10, 20)); 
