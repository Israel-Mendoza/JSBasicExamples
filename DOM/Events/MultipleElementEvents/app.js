const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "violet"
];

const boxContainer = document.querySelector("#boxes");
const result = document.querySelector("#result");
for (let color of colors) {
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.addEventListener("mouseover", printColorToScreen);
    boxContainer.appendChild(box);
}

function printColorToScreen() {
    result.innerText = this.style.backgroundColor.toUpperCase();
}

const pressedKeys = [];

document.body.addEventListener("keypress", function (evt) {
    pressedKeys.push(evt);
});

function showKeys() {
    for (let keyEvent of pressedKeys) {
        console.log(`Key pressed: ${keyEvent.key}`);
    }
}

