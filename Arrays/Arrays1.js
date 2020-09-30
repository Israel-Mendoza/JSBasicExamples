// Creating Arrays

let shoppingList = ["cereal", "cheese", "ice", "milk"];
let lottoNumbers = [45, 12, 23, 25, 34];
let myCollection = [12, "dog", true, NaN, null];
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

// Accessing the array's contents

console.log(shoppingList[0]);
console.log(shoppingList[5]); // undefined

// Modifying an array

shoppingList[3] = "whole milk";
console.log(shoppingList);
shoppingList[4] = "ice cream";
console.log(shoppingList);

// Appending items to an array:

colors[colors.length] = "black";
console.log(colors);