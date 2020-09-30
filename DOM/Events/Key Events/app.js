const itemsList = document.querySelector("#items");
const newItemField = document.querySelector("#newItem");

newItemField.addEventListener("keypress", function (event) {
    if (event.key.toLowerCase() === "enter" && this.value !== "") {
        let newElement = document.createElement("li");
        newElement.innerText = this.value;
        itemsList.appendChild(newElement);
        this.value = "";
    }
});

