function isValidPassword(password, username) {
    return (password.length >= 8 && password.indexOf(" ") === -1 && password.indexOf(username) === -1);
}

let username = "dogLuvr";
let password = "89Fjjlnms";

console.log(`Username: ${username}\nPassword: ${password}\nValidation: ${isValidPassword(password, username)}\n`);

password = "dogLuvr123!"
console.log(`Username: ${username}\nPassword: ${password}\nValidation: ${isValidPassword(password, username)}\n`);

password = "Pizza Pizza"
console.log(`Username: ${username}\nPassword: ${password}\nValidation: ${isValidPassword(password, username)}\n`);

password = "pasword"
console.log(`Username: ${username}\nPassword: ${password}\nValidation: ${isValidPassword(password, username)}\n`);

function avg(numArray) {
    let total = 0;
    for (let num of numArray) {
        total += num;
    }
    return total / numArray.length;
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(avg(myArray));

function isPangram(aString) {
    for (let char of "abcdefghijklmnopqrstuvwxyz") {
        if (aString.toLowerCase().indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

function isPangram2(aString) {
    for (let char of "abcdefghijklmnopqrstuvwxyz") {
        if (!aString.toLowerCase().includes(char)) {
            return false;
        }
    }
    return true;
}

let sentence = "The quick brown fox jumps over the lazy dog";
let sentence2 = "The five boxing wizards jump quickly";
let sentence3 = "Waxy and quivering, jocks fumble the pizza";

function getCard() {
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const suits = ["clubs", "spades", "hearts", "diamonds"];
    return { value: getRandomItem(values), suit: getRandomItem(suits) };
}

function getRandomItem(anArray) {
    return anArray[Math.floor(Math.random() * anArray.length)];
}