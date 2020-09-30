// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//      - Be at least 8 characters long
//      - Cannot contain spaces
//      - Cannot contain the username
// Return true if requirements are met, otherwise return false

function isValidPassword(password, username) {
    return password.length >= 8 && password.indexOf(username) === -1 && password.indexOf(" ") === -1;
}

let username = "xander69";
let password = "P@ssw0rd";

console.log(`Username: ${username}`);
console.log(`Password: ${password}`);
console.log(`Validation: ${isValidPassword(password, username)}\n`);


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function to find the average value in an array of numbers

function arrayAverager(anArray) {
    let total = 0;
    for (let i = 0; i < anArray.length; i++) {
        total += anArray[i];
    }
    return total / anArray.length;
}

// Creating an array of random numbers:
let myArray = []
for (let i = 0; i < 10; i++) {
    myArray.push(Math.floor(Math.random() * 25) + 1);
}

// Testing the function:
let myArrayAvg = arrayAverager(myArray);
console.log(`The average of the array is ${myArrayAvg}\n`);


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function called "isPangram" which chechs to see if a 
// given sentence containce every letter of the alphabet.
// Make sure you ignore string casing.

function isPangram(aString) {
    let alphabet = "abcdefghijklmonpqrstuvwxyz";
    for (let letter of alphabet) {
        if (aString.toLowerCase().indexOf(letter) === -1) {
            return false;
        }
    }
    return true;
}

let sencenceOne = "The quick brown fox jumps over the lazy dog";
let sentenceTwo = "The five boxing wizards jump quick";
let sencenceThree = "The five boxing wizards jump quickly";

console.log(`Sencence 1: ${isPangram(sencenceOne)}`);
console.log(`Sentence 2: ${isPangram(sentenceTwo)}`);
console.log(`Sentence 3: ${isPangram(sencenceThree)}\n`);


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a getCard() function which returs a random playing card object, like:
// 
// {
//     value: "K",
//     suit: "clubs"
// }
// Pick a random value from:
//      2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// Pick a random suit from:
//      clubs, spades, hearts, diamonds

function getCard() {
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
    const suits = ["clubs", "spades", "hearts", "diamonds"];
    return {
        value: getRandomFromArray(values),
        suit: getRandomFromArray(suits)
    };
}

function getRandomFromArray(anArray) {
    return anArray[Math.floor(Math.random() * anArray.length)];
}

for (let i = 0; i < 50; i++) {
    let myCard = getCard();
    console.log(`My card is ${myCard.value} of ${myCard.suit}`);
}
