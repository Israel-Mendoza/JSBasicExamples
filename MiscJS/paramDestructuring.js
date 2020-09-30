const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golder Heart of Kenya"
};


// Destructuring in the function's body
function print(person) {
    const { first, last, title } = person;
    console.log(`${first} ${last}, ${title}`);
}


// Destructuring in the parameters
function printPerson({ first, last, title }) {
    console.log(`${first} ${last}, ${title}`);
}



print(runner);
printPerson(runner);
