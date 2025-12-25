const myCheckbox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {

    if (myCheckbox.checked) {
        subResult.textContent = `You are subscribed`;

    } else {
        subResult.textContent = `You are not subscribed`;
    }
    if (visaBtn.checked) {
        paymentResult.textContent = "You are paying with visa";
    } else if (masterBtn.checked) {
        paymentResult.textContent = "You are paying with master card";
    } else if (payPalBtn.checked) {
        paymentResult.textContent = "You are paying with pay pal";
    } else {
        paymentResult.textContent = "You are not paying";
    }

}
