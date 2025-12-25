const numbers = [1,2,3,4,5];

const squares = numbers.map(toSquare);
console.log(squares);

function toSquare(element){
    return Math.pow(element,2);
}

students = ["hasrha", "krisha", "srisail"]

const studUpper = students.map(upperCase);
console.log(studUpper);
function upperCase(element){
    return element.toUpperCase();
}
