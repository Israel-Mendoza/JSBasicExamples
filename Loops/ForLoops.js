for (let i = 0; i < 10; i++) {
    console.log(`Loop number ${i}`);
}

for (let i = 200; i > 0; i--) {
    console.log(`Countdown ${i}`);
}

const animals = ["lions", "tigers", "deer", "rabbits"];

for (let i = 0; i < animals.length; i++) {
    console.log(`${animals[i]}? I love ${animals[i]}!!!`);
}

const myStudents = [
    {
        name: "Zeus",
        grade: 86
    },
    {
        name: "Artemis",
        grade: 97
    },
    {
        name: "Hera",
        grade: 72
    },
    {
        name: "Apollo",
        grade: 90
    }
];

let sumOfGrades = 0;
for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    console.log(`${student.name} got ${student.grade} in their English exam!!!`);
    sumOfGrades += +student.grade;
}
let avgGrades = sumOfGrades / myStudents.length;
console.log(`The grades averages is ${avgGrades}`);

let myString = "Parangaricutirimicuaro";
for (let i = myString.length - 1; i >= 0; i--) {
    console.log(`Character "${myString[i]}" at index ${i}`);
}

// Nesting loops

for (let i = 0; i <= 10; i++) {
    for (let j = 10; j >= 0; j--) {
        console.log(`${i} | ${j}`);
    }
}

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let total = 0;
for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
        total += gameBoard[i][j];
    }
}
console.log(`Total sum of numbers in game board: ${total}`);