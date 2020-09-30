const creditCardInfo = document.querySelector("#creditcard");
const soulSoldCheckbox = document.querySelector("#soulSold");
const vegetable = document.querySelector("#vegetable");

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", function (event) {
    console.log(`Credit card number: ${creditCardInfo.value}`);
    console.log(`Did you sell you soul? ${soulSoldCheckbox.checked}`);
    console.log(`Vegetable: ${vegetable.value}`);
    event.preventDefault();
});


