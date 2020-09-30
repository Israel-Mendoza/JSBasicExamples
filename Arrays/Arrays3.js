let fruits = ["oranges", "mangoes", "grapes"];
let veggies = ["celery", "carrots", "persil"];
let meats = ["steak", "chicken breast"];

let allFood = meats.concat(veggies, fruits);

console.log(allFood);

console.log(allFood.includes("fish")); // Returns boolean
console.log(allFood.indexOf("celery")); // Returns index or -1 if non-existent
