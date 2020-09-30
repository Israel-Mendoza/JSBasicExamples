const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    "In Bruges": 9,
    Amadeus: 10,
    "Kill Bill": 8,
    "Little Miss Sunshine": 8.5,
    Coraline: 7.5
};

for (let key of Object.keys(movieReviews)) {
    console.log(`${key}: ${movieReviews[key]}`);
}


let sum = 0;
for (let value of Object.values(movieReviews)) {
    sum += value;
}
let avgReview = sum / Object.values(movieReviews).length;
console.log(`Review average: ${avgReview}`);
