// How it was done before:

const role = "host";
const person = "Jools Holland";
const role2 = "director";
const person2 = "James Cameron";

// Create an empty  object
const team = {};
// Manually assigning the properties and values
team[role] = person;    // team["host"] = "Jools Holland";
team[role2] = person2;  // team["director"] = "James Cameron".
console.log("Team 1: ")
console.log(team)
console.log();

const team2 = {
    [role]: person,
    [role2]: person2
}

console.log("Team 2: ");
console.log(team2);
