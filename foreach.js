let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(display);
fruits.forEach(upperCase);
fruits.forEach(display);

function display(element){
    console.log(element);
}
function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}
