// Method Chaining = Calling one method after anotehr in one continious line of code


let username = window.prompt("Enter you username : ");

// username = username.trim();

// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);

// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;

// window.prompt(username);

//--Method Chaining----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
