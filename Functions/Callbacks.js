// Using a callback in the High-Order function "setTimeout"

function grumpus() {
    console.log("GAAAHHH GO AWAY!!!!");
}

setTimeout(grumpus, 5000);
setTimeout(function () {
    console.log("Waaahhhh... I'm sooo saaad!!!")
}, 7000);

console.log("Wait... I hear good ol' grumpus coming!");
console.log("And the weeper is just behind him...");