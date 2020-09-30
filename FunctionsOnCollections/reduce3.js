const votes = ["y", "y", "n", "y", "y", "y", "n", "n", "y"];

const poll = votes.reduce((obj, value) => {
    const objectKeys = Object.keys(obj);
    if (objectKeys.includes(value)) {
        obj[value]++;
    } else {
        obj[value] = 1;
    }
    return obj;
}, {})

console.log(poll);
