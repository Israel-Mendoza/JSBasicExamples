// Working dinamically with properties

function addProperty(anObject, propName, propValue) {
    anObject[propName] = propValue;
}

const person = {
    name: "Israel"
}

console.log(person);

addProperty(person, "age", 28);

console.log(person);
