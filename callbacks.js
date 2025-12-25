
// callback = a function that is passed as an argument to another fuction.

sum(displayResult,5,6);
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayResult(display){
    console.log(display);
}
