/*04.Letter Changes

Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

Sample Test Cases

Input:"hello*3" || Output:Ifmmp*3

Input:"fun times!" || Output:gvO Ujnft! */

function LetterChanges(str) {

    // code goes here  
    str.toLowerCase();

    let newString = str.replace(/[a-z]/g, function (char) {
        if (char === 'z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }

    });

    let finalNewString = newString.replace(/a|e|i|o|u/gi, function (vowel) {
        return vowel.toUpperCase();
    })


    return finalNewString;
}

// keep this function call here 
LetterChanges(readline());
