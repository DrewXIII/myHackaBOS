/*3.Longest Word

Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

Sample Test Cases

Input:"fun&!! time" || Output:time

Input:"I love dogs" || Output:love */

function LongestWord(sen) {
    // code goes here  
    let maxLength = 0;
    let biggestWord = "";

    let regex = /\w+/ig;

    let arr = sen.match(regex)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
            biggestWord = arr[i];
        }
    }
    return biggestWord;
}

// keep this function call here 
LongestWord(readline());
