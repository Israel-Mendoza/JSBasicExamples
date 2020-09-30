const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (number, index) {
    console.log(`${index}.- ${number} times ${number} = ${number * number}`)
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

books.forEach(function (b) {
    console.log(`I just read ${b.author}'s ${b.title}. My rating? ${b.rating}`);
});
console.log();

// Recreating the previous example with a "for__of" loop

for (let book of books) {
    console.log(`I just read ${book.author}'s ${book.title}. My rating? ${book.rating}`);
}
