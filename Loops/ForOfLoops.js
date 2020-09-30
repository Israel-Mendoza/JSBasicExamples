let myFriends = ["Victor", "Carlos", "Moises", "Luis", "Miguel"];

for (let friend of myFriends) {
    console.log(`Here is one of my friends: ${friend}`);
}

for (let character of "Parangaricutirimicuaro") {
    console.log(character.toUpperCase());
}

const magicSquare = [
    [2, 4, 6],
    [1, 3, 5],
    [8, 10, 12],
    [7, 9, 11]
];

for (let row of magicSquare) {
    for (let item of row) {
        console.log(`Item in magic square: ${item}`);
    }
}

const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

for (let i = 0; i < words1.length; i++) {
    console.log(`${words1[i]}${words2[i]} `);
}
