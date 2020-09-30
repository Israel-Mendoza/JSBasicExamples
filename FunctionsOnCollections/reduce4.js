const books = [
    {
        title: "The Garbage Book",
        authors: ["Xavier Tyme"],
        rating: 2.8,
        genres: ["fiction", "garbage"]
    },
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 3.9,
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
        rating: 3.83,
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
        rating: 4.1,
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


const ratedBooks = books.reduce((ratingsObj, currentBook) => {
    let flooredRating = Math.floor(currentBook.rating);
    if (ratingsObj[flooredRating]) {
        ratingsObj[flooredRating].push(currentBook);
    } else {
        ratingsObj[flooredRating] = [currentBook];
    }
    return ratingsObj;
}, {})

for (let rating in ratedBooks) {
    console.log(`\nBooks rating ${rating}: `)
    for (let book of ratedBooks[rating]) {
        if (book.authors.length > 1) {
            let authors = book.authors.join(" and ");
            console.log(`${book.title} by ${authors}`)
        } else {
            console.log(`${book.title} by ${book.authors}`)
        }
    }
}