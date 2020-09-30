function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numberOfRolls) {
    for (let i = 0; i < numberOfRolls; i++) {
        rollDice();
    }
}

throwDice(3);