const cephalopods = ["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"];
const gastropods = ["giant african snail", "banana slug", "variable neon slug"];
const cnidaria = ["fire coral", "moon jelly"];

let weirdAnimals = [cephalopods, gastropods, cnidaria];
console.log(weirdAnimals);
weirdAnimals = [...cephalopods, ...gastropods, ...cnidaria];
console.log(weirdAnimals);


function print(...args) {
    console.log(args);
}


print(1, 2, 3, 4, 5);
