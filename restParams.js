// rest paramater allows a funtion work with a variable number of args by building them into array
// whereas spread expands an array into seperate elements . 
// rest bundles seperate elements into an array

const food1 = "pizza";
const food2 = "hamburg";

function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
openFridge(food1, food2);


console.log(getFood(food1, food2));

function joinString(...strings){
    return strings.join(" ");
}

console.log("harsha","sathyanaryana","naik");

