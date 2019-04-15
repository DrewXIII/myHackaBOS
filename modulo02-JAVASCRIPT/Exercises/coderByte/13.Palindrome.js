/*13.Palindrome

Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

Sample Test Cases

Input:"never odd or even" || Output:true

Input:"eye" || Output:true */

function Palindrome(str) {

    // code goes here 

    let newString = str.replace(/ /g, "");

    let reverseString = newString.split("").reverse().join("");

    if (newString === reverseString) {
        return true;
    } else {
        return false;
    }


}

// keep this function call here 
Palindrome(readline());