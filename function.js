function add(x,y){
    let result = x + y;
    return result;
}
// console.log(add(2,3));

function validEmail(email){
    if(email.includes("@gmail.com","@yahoo.com")){
        return true;
    }
    return false;
}

console.log(validEmail("harshanaik2020gmail.com"));
