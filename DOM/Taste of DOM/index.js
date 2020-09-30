let chinita1 = document.querySelector("#chinita1");
let chinita2 = document.querySelector("#chinita2");

let chinitaLink1 = [
    "https://images.unsplash.com/photo-1597460761640-88e8d7d50660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://media.tits-guru.com/images/637996a3-f29b-4f32-a29f-ff4f1280ea25.jpeg"
]

let chinitaLink2 = [
    "https://images.unsplash.com/photo-1597460761632-ca59808ad268?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://lh6.googleusercontent.com/-fjlI1-dh0lw/VSyG-zzqhwI/AAAAAAAAGk0/hzTSmDDDNnE/s0/552c86f83b4d2.jpg"
]


function changeChinitaNormal1() {
    chinita1.src = chinitaLink1[0];
}

function changeChinitaNaked1() {
    chinita1.src = chinitaLink1[1];
}

function changeChinitaNormal2() {
    chinita2.src = chinitaLink2[0];
}

function changeChinitaNaked2() {
    chinita2.src = chinitaLink2[1];
}

changeChinitaNormal1();
changeChinitaNormal2();

chinita1.addEventListener("mouseover", changeChinitaNaked1);
chinita1.addEventListener("mouseout", changeChinitaNormal1);
chinita2.addEventListener("mouseover", changeChinitaNaked2);
chinita2.addEventListener("mouseout", changeChinitaNormal2);
