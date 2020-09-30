const myH1 = document.querySelector("h1");

function transfer(anEvent) {
    let letter = anEvent.key;
    if (letter === "") {
        myH1.innerHTML += "&nbsp";
    } else {
        myH1.innerText += letter;
    }
}

document.body.addEventListener("keypress", transfer);