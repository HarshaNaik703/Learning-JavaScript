// Random Password Generator

const passwrodLenght = 12;
const includeLowerCase = false;
const includeUpperCase = true;
const includeNumbers = false;
const includeSymbols = true;

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "`!@#$%^&*()_+=-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    if(length <= 0){
        return `(password lenght must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(Atleast 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}
const password = generatePassword(
                                5,
                                includeLowerCase, 
                                includeUpperCase, 
                                includeNumbers, 
                                includeSymbols
                            );

console.log(`Generated Password : ${password}`);
