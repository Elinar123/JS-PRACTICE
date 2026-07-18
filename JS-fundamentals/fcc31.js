//REVERSING STRING FUNCTION
function reverseString(str) {
     const revStr = str.split('').reverse().join('');
     return revStr;
}

const reversedStr = reverseString("Greetings from Earth");
console.log(reversedStr)