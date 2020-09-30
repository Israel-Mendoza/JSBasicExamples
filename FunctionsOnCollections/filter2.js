const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
},
{
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
},
{
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
},
{
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
},
{
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
},
{
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
},
{
    title: "Crime and Punishment",
    authors: ["Fyodor Dostoyevsky"],
    rating: 4.9,
    genres: ["psychological thriller"]
},
{
    title: "The Shining",
    authors: ["Stephen King"],
    rating: 4.1,
    genres: ["horror", "fiction"]
},
{
    title: "The Wind-Up Bird Chronicle",
    authors: ["Haruki Murakami"],
    rating: 4.3,
    genres: ["fiction"]
},
{
    title: "The Map and the Territory",
    authors: ["Michel Houellebecq"],
    rating: 4.7,
    genres: ["drama"]
}
]

let fictionBooks = books.filter((book) => book.genres.includes("fiction"));
for (let book of fictionBooks) {
    console.log(book);
}
console.log("\n\n\n")

let goodBooks = books.filter((book) => book.rating >= 4.5);
for (let book of goodBooks) {
    console.log(book);
}
console.log("\n\n\n");

let query = "tle";
const queriedBooks = books.filter((book) => {
    for (let author of book.authors) {
        if (author.toLowerCase().includes(query.toLowerCase())) {
            return true;
        }
    }
    return book.title.toLowerCase().includes(query.toLowerCase());
})

console.log("Queried books:")
for (let book of queriedBooks) {
    console.log(book);
}
console.log("\n\n\n");