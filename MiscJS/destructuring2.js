const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golder Heart of Kenya"
};

const { first, last } = runner;

const { country: nation, title: honorific } = runner;

const { titles, ...other } = runner;