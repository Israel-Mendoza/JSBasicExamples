// Another callback example

// A button has been added to the html document, which says "Don't click me!"

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
    alert("I TOLD YOU NOT TO!!!!");
});