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

let firstBestBook = books.find((x) => x.rating > 4.5);

console.log(firstBestBook);
