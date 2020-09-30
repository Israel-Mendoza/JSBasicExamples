let i = 0;

while (i < 10) {
    console.log(`While Loop: ${i}`);
    i++;
}

let randomGuess = Math.floor(Math.random() * 100);
let randomInt;
let count = 0;
while (true) {
    count++;
    randomInt = Math.floor(Math.random() * 100);
    if (randomGuess === randomInt) {
        console.log(`I guessed your number (${randomInt}) and it only took me ${count} attempts!`);
        break;
    }
}

randomGuess = Math.floor(Math.random() * 100);
randomInt = null;
count = 0;
while (randomGuess !== randomInt) {
    count++;
    randomInt = Math.floor(Math.random() * 100);
}
console.log(`I guessed your number again (${randomInt}) and it only took me ${count} attempts!`);

randomGuess = Math.floor(Math.random() * 100);
randomInt = null;
count = 0;
let gameOver = false;
while (!gameOver) {
    count++;
    randomInt = Math.floor(Math.random() * 100);
    if (randomInt === randomGuess) {
        gameOver = true;
    }
}
console.log(`I guessed your number again (${randomInt}) and it only took me ${count} attempts!`);
