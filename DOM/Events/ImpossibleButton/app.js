const myButton = document.querySelector("#impossibleButton");


function dodgeClick() {
    const left = Math.floor(Math.random() * 100);
    const top = Math.floor(Math.random() * 100);
    myButton.style.left = `${left}%`;
    myButton.style.top = `${top}%`;
}




myButton.addEventListener("mouseover", dodgeClick);
myButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "teal";
    this.innerText = "YOU GOT ME!";
});