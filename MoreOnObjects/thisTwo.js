const person = {
    first: "Israel",
    last: "Mendoza",
    nickname: "Lehó",
    fullname() {
        // Destructuring the object:
        const { first, last, nickname } = this;
        return `${first} ${last}, AKA ${nickname}`;
    },
    introduction() {
        console.log(`"this" = ${this}`);
        console.log(`My name is ${this.fullname()}\n`);
    },
    speak: () => {
        console.log(`${this}`);
        console.log(`${this.nickname} is laughing!!!`);
    }
}



// Assigning the function that references to "this" to a variable
const introduction = person.introduction;

// Calling the function that references to "this" from the Object "person" context
person.introduction();

// Calling the funtion that references "this" from the Global Execution Context
//introduction();

person.speak();