// Map returns a new array

const names = ["israel", "margarita", "antonia", "arturo"];

const namesUpper = names.map(function (name) {
    name = name[0].toUpperCase() + name.slice(1);
    return name;
})

names.forEach(function (name) {
    console.log(name);
})
console.log();

namesUpper.forEach(function (name) {
    console.log(name);
})
console.log();

// Another example

const numbers = [12, 35, 64, 9, 5, 64, 4, 98, 7];
const numObjects = numbers.map(function (num) {
    return { number: num, isEven: num % 2 === 0 }
});

numObjects.forEach(function (numObj) {
    console.log(`${numObj.number} ${numObj.isEven ? "is even" : "is odd"}`);
})
console.log();

// Another example

const words = ["asap", "byob", "rsvp", "diy"];
const wordsUpper = words.map(function (word) {
    return word.toUpperCase().split("").join(".");
})

wordsUpper.forEach(function (word) {
    console.log(word);
});
console.log();

// Another example

const books = [
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoyevsky",
        rating: 4.9
    },
    {
        title: "The Shining",
        author: "Stephen King",
        rating: 4.1
    },
    {
        title: "The Wind-Up Bird Chronicle",
        author: "Haruki Murakami",
        rating: 4.3
    },
    {
        title: "The Map and the Territory",
        author: "Michel Houellebecq",
        rating: 4.7
    }
];

const booksTitles = books.map((b) => b.title);
booksTitles.forEach(function (b) {
    console.log(b);
});
console.log();
