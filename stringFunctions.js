//const { console } = require("inspector/promises");

const s = "Hello World";
//Example-1 Return the length of the last word in the string
let split = s.split();
console.log(split);
for (let i = 0; i < split.length; i++) {
    console.log(split[0].substring(6, 11));
}

//Example -2 Trim/Split/Identify the last word/calculate length of the word
const s1 = " fly me to the moon ";
let str = s1.trim();
console.log(str);
let word = str.split(" ");
for (let i = 0; i < split.length; i++) {
    console.log(word);
}
// Get the length of the last word
console.log(word[word.length - 1].length);

//Example-3 Check Anagram

const text1 = "listen"
const text2 = "silent"
function checkAnagram(text1, text2) {
    let strval1 = text1.trim();
    var value1 = strval1.toLowerCase();
    //console.log(value1.split().sort());
    const result1 = value1.split('').sort().join('');
    let strval2 = text2.trim();
    var value2 = strval2.toLowerCase();
    //console.log(value2.split().sort());
    const result2 = value2.split('').sort().join('');
    console.log(result1);
    console.log(result2);
    if (result1 == result2) {
        console.log("The given string is an anagram");
        return true;
    }
    else {
        console.log("The given string is not an anagram");
        return false;
    }
}
checkAnagram(text1, text2)
