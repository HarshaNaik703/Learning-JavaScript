const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCalsius = document.getElementById("toCalsius");
const reslut = document.getElementById("result");
let temp;
function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * (9/5) + 32;
        reslut.textContent =    `${temp.toFixed(1)} F`;
    }else if(toCalsius.checked){
        temp = Number(textBox.value);
        temp = (temp-32) * (5/9);
        reslut.textContent = `${temp.toFixed(1)} F`;
    }else{
        reslut.textContent = "Select a unit";
    }
}
