const { getDigits } = require("./app");

let phrase = "hello bastard";
let phraseUpperCase = "";

for (let i = 0; i < phrase.length; i++) {
  phraseUpperCase += phrase.charAt(i).toUpperCase();
}

console.log(phraseUpperCase);
