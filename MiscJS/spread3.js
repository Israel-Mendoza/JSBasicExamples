const feline = {
    legs: 4,
    family: "felidae"
}

const canine = {
    family: "caninae",
    furry: true
}

const dog = {
    ...canine,
    isPet: true
}

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: "unpredictable"
}

const catDog = {
    ...dog,
    ...houseCat
}

console.log(dog);
console.log(houseCat);
console.log(catDog);
