let shoppingList = ["cereal", "cheese", "ice", "milk"];

console.log(`New length of the array after pushing item: ${shoppingList.push("bread")}`);
console.log(shoppingList);

console.log(`Removed ${shoppingList.pop()} from the shoppingList array`);
console.log(shoppingList);

console.log(`Removed ${shoppingList.shift()} from the shoppingList array`);
console.log(shoppingList);

console.log(`New length of the array after unshifting item: ${shoppingList.unshift("cookies")}`);
console.log(shoppingList);