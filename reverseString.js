let str = "nitin";
var reverseStr = "";
function reverseString(str) {

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + str.charAt(i)
    }
    console.log("The reversed String is " + reverseStr)
}
//reverseString("nitin");

function checkPalindrome(str) {
    reverseString(str);
    if (str === reverseStr) {
        console.log(str + " is a palindrome");
        return str;
    }
    else {
        console.log("Not a palindrome");
    }
}
checkPalindrome(str)