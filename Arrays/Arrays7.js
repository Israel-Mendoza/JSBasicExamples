function formatArray(anArray) {
    return anArray.join(", ");
}
let fruits = ["orange", "watermelon", "banana"];
console.log(formatArray(fruits));

fruits.sort();
console.log(formatArray(fruits));
