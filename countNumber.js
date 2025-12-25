
const decreaseBtn = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const count = document.getElementById("count");

let countNum = 0;
count.textContent = countNum;
increaseBtn.onclick = function () {
    countNum++;
    count.textContent = countNum;
}

decreaseBtn.onclick = function () {
    countNum--;
    count.textContent = countNum;
}

reset.onclick = function () {
    countNum = 0;
    count.textContent = countNum;
}


