let numbers = [1,2,3,4,5];
let evenNumbs = numbers.filter(isEven);
console.log(evenNumbs);
function isEven(element){
    return element % 2 === 0;
}
let oddNumbs = numbers.filter(isOdd);
console.log(oddNumbs);
function isOdd(element){
    return element % 2 !== 0;
}
