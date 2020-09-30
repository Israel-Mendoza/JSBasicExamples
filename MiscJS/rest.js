function returnSomeone(firstName, lastName, ...rest) {
    return {
        firstName: firstName,
        lastName: lastName,
        titles: [...rest]
    }
}

const me = returnSomeone("Israel", "Mendoza", ["Jr", "Conde del Pinar del Río"]);
console.log(me);

// Another example

function sum(...numbers) {
    return numbers.reduce((acc, newVal) => {
        return acc + newVal;
    })
}

const mySum = sum(10, 20, 30, 40, 50, 60, 70, 80, 90);
console.log(mySum);
