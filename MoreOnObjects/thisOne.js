// Global this

function sayHi() {
    console.log("Hi from sayHi()!");
    console.log(this);
}

const sayHello = function () {
    console.log("Hello from sayHello()!");
    console.log(this);
}

sayHi();    // window
sayHello(); // window