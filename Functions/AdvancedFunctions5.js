// Creating a multiplier function factory (closures)

function multiplyBy(value) {
    return function (number) {
        return value * number;
    }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);

console.log(`Triple of 5? ${triple(5)}`);
console.log(`Double of 56? ${double(56)}`);
console.log()

// Another example

function makeBetweenFunc(lowerLimit, upperLimit) {
    return function (numberToValidate) {
        return numberToValidate >= lowerLimit && numberToValidate <= upperLimit;
    }
}

const inAgeRange = makeBetweenFunc(18, 100);
console.log(`Is 17 in the age range? ${inAgeRange(17)}`);
console.log(`Is 68 in the age range? ${inAgeRange(68)}`);
console.log(`Is 105 in the age range? ${inAgeRange(105)}`);
console.log();

const isNiceWeather = makeBetweenFunc(18, 29);
console.log(`Is 25° considered a nice weather? ${isNiceWeather(25)}`);
console.log(`Is 14° considered a nice weather? ${isNiceWeather(14)}`);
console.log(`Is 35 considered a nice weather? ${isNiceWeather(35)}`);
console.log();
